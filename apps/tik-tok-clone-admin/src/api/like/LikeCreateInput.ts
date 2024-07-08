import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  likeTimestamp?: Date | null;
  video?: VideoWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
