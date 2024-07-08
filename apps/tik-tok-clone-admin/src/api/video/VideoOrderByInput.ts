import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  uploadDate?: SortOrder;
  fileUrl?: SortOrder;
  views?: SortOrder;
  userId?: SortOrder;
};
