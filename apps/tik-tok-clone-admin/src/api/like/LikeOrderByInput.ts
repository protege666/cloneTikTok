import { SortOrder } from "../../util/SortOrder";

export type LikeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  likeTimestamp?: SortOrder;
  videoId?: SortOrder;
  userId?: SortOrder;
};
