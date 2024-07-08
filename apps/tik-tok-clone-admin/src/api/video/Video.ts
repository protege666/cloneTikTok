import { User } from "../user/User";
import { Like } from "../like/Like";
import { Comment } from "../comment/Comment";

export type Video = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  uploadDate: Date | null;
  fileUrl: string | null;
  views: number | null;
  user?: User | null;
  likes?: Array<Like>;
  comments?: Array<Comment>;
};
