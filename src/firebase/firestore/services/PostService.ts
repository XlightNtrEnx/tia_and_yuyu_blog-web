import { BaseSchema, BaseService } from "./BaseService";

export interface IPost extends BaseSchema {
  text: string;
  title?: string;
  userId: string | null;
}

export type PostInsertionAttributes = Omit<
  IPost,
  "id" | "createdAt" | "updatedAt"
>;

class PostService extends BaseService<IPost, PostInsertionAttributes> {
  constructor() {
    super("posts");
  }
}

export const postService = new PostService();
