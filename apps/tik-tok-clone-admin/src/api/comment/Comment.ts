import { User } from "../user/User";
import { Video } from "../video/Video";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  commentTimestamp: Date | null;
  commentText: string | null;
  user?: User | null;
  video?: Video | null;
};
