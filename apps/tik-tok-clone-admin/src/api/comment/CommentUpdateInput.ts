import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type CommentUpdateInput = {
  commentTimestamp?: Date | null;
  commentText?: string | null;
  user?: UserWhereUniqueInput | null;
  video?: VideoWhereUniqueInput | null;
};
