import { BaseSchema, BaseService } from "./BaseService";

export interface IPost extends BaseSchema {
  title?: string;
  text: string;
}

export type PostInsertionAttributes = Pick<IPost, "text"> &
  Partial<Pick<IPost, "title">>;

class PostService extends BaseService<IPost, PostInsertionAttributes> {
  constructor() {
    super("posts");
  }
}

export const postService = new PostService();
