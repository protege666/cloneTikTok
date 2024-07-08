/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VideoWhereInput } from "./VideoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { VideoOrderByInput } from "./VideoOrderByInput";

@ArgsType()
class VideoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VideoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => VideoWhereInput, { nullable: true })
  @Type(() => VideoWhereInput)
  where?: VideoWhereInput;

  @ApiProperty({
    required: false,
    type: [VideoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [VideoOrderByInput], { nullable: true })
  @Type(() => VideoOrderByInput)
  orderBy?: Array<VideoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { VideoFindManyArgs as VideoFindManyArgs };