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

export abstract class BaseService<
  Schema extends BaseSchema,
  InsertionAttributes extends Partial<Schema>
> {
  private collection: ReturnType<typeof collection>;

  constructor(collectionName: string) {
    this.collection = collection(db, collectionName);
  }

  async insert(
    schema: Omit<InsertionAttributes, "id" | "createdAt" | "updatedAt"> & {
      id?: string;
    }
  ) {
    let docRef: ReturnType<typeof doc>;
    const data: Record<string, any> = {
      ...schema,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    if (schema.id) {
      docRef = doc(this.collection, schema.id);
    } else {
      docRef = doc(this.collection);
      delete data.id;
    }

    await setDoc(docRef, data);
    return docRef.id;
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
      w.push(
        orderBy(options.orderBy.by as string, options.orderBy.order as Order)
      );
    if (options?.limit) w.push(limit(options.limit));
    const q = query(this.collection, ...w);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as Schema)
    );
  }
}
