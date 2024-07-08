import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  username?: SortOrder;
  email?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  telegramUserId?: SortOrder;
  profilePictureUrl?: SortOrder;
  dateJoined?: SortOrder;
  userProfilePictureUrl?: SortOrder;
  telegramId?: SortOrder;
  profilePhotoUrl?: SortOrder;
  joinedDate?: SortOrder;
};
