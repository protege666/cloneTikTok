import { Video } from "../video/Video";
import { User } from "../user/User";

export type Like = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  likeTimestamp: Date | null;
  video?: Video | null;
  user?: User | null;
};
