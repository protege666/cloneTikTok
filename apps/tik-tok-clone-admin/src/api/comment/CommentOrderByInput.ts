import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  commentTimestamp?: SortOrder;
  commentText?: SortOrder;
  userId?: SortOrder;
  videoId?: SortOrder;
};
