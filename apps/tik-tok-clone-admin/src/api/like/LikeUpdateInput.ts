import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  likeTimestamp?: Date | null;
  video?: VideoWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
