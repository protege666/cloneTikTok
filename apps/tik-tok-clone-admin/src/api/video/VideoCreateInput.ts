import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { LikeCreateNestedManyWithoutVideosInput } from "./LikeCreateNestedManyWithoutVideosInput";
import { CommentCreateNestedManyWithoutVideosInput } from "./CommentCreateNestedManyWithoutVideosInput";

export type VideoCreateInput = {
  title?: string | null;
  description?: string | null;
  uploadDate?: Date | null;
  fileUrl?: string | null;
  views?: number | null;
  user?: UserWhereUniqueInput | null;
  likes?: LikeCreateNestedManyWithoutVideosInput;
  comments?: CommentCreateNestedManyWithoutVideosInput;
};
