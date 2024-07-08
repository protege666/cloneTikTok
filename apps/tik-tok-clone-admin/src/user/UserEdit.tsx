import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceArrayInput,
} from "react-admin";

import { VideoTitle } from "../video/VideoTitle";
import { LikeTitle } from "../like/LikeTitle";
import { CommentTitle } from "../comment/CommentTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="telegramUserId" source="telegramUserId" />
        <TextInput label="profilePictureUrl" source="profilePictureUrl" />
        <DateTimeInput label="dateJoined" source="dateJoined" />
        <TextInput
          label="userProfilePictureUrl"
          source="userProfilePictureUrl"
        />
        <TextInput label="telegramId" source="telegramId" />
        <TextInput label="profilePhotoUrl" source="profilePhotoUrl" />
        <DateTimeInput label="joinedDate" source="joinedDate" />
        <ReferenceArrayInput
          source="videos"
          reference="Video"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VideoTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
