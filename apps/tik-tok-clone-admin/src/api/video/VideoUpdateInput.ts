import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { LikeUpdateManyWithoutVideosInput } from "./LikeUpdateManyWithoutVideosInput";
import { CommentUpdateManyWithoutVideosInput } from "./CommentUpdateManyWithoutVideosInput";

export type VideoUpdateInput = {
  title?: string | null;
  description?: string | null;
  uploadDate?: Date | null;
  fileUrl?: string | null;
  views?: number | null;
  user?: UserWhereUniqueInput | null;
  likes?: LikeUpdateManyWithoutVideosInput;
  comments?: CommentUpdateManyWithoutVideosInput;
};
