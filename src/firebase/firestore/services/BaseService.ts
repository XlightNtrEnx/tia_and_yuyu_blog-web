import {
  collection,
  serverTimestamp,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import { db } from "@src/firebase/firestore";

export interface BaseSchema {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum Order {
  ASC = "asc",
  DESC = "desc",
}

/**
 * @type Schema: The schema of the document
 * @type InsertionSchema: The schema of the document when inserting. Should omit createdAt and updatedAt
 */
export abstract class BaseService<
  Schema extends BaseSchema,
  InsertionSchema extends Partial<Schema>
> {
  private collection: ReturnType<typeof collection>;

  constructor(collectionName: string) {
    this.collection = collection(db, collectionName);
  }

  async insert(
    schema: InsertionSchema
  ): Promise<Omit<Schema, "createdAt" | "updatedAt">> {
    const data: Record<string, any> = await this.processInsertionData({
      ...schema,
    });
    data.createdAt = serverTimestamp();
    data.updatedAt = serverTimestamp();

    let docRef: ReturnType<typeof doc>;
    if (data.id) {
      docRef = doc(this.collection, data.id);
      delete data.id;
    } else {
      docRef = doc(this.collection);
    }

    await setDoc(docRef, data);
    schema.id = docRef.id;
    return schema as unknown as Omit<Schema, "createdAt" | "updatedAt">;
  }

  /**
   * It is safe to modify the schema in place
   */
  async processInsertionData(
    schema: Parameters<(typeof this)["insert"]>[0]
  ): Promise<Parameters<(typeof this)["insert"]>[0]> {
    return schema;
  }

  async findOne(schema: Partial<Schema>): Promise<Schema | null> {
    const result = await this.filter(schema, {
      limit: 1,
    });
    return result[0] || null;
  }

  async filter(
    schema: Partial<Schema>,
    options?: { limit?: number; orderBy?: { by: keyof Schema; order: Order } }
  ) {
    const keysAndValues = Object.entries(schema);
    const w: any[] = keysAndValues.map(([key, value]) =>
      key === "id" ? where("__name__", "==", value) : where(key, "==", value)
    );
    if (options?.orderBy)
      w.push(orderBy(options.orderBy.by as string, options.orderBy.order));
    if (options?.limit) w.push(limit(options.limit));
    const q = query(this.collection, ...w);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => {
      const result = doc.data() as Schema;
      result.id = doc.id;
      return result;
    });
  }

  async exists(id: string) {
    const docRef = doc(this.collection, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  }
}
