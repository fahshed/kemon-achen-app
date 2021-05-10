import React from 'react';
import { Platform, View } from 'react-native';

import * as Yup from 'yup';
import Api from '../../api';

import { Form, FormField, SubmitButton } from '../../components/FormComponents';

const validationSchema = Yup.object().shape({
  communityName: Yup.string().required().label('Community'),
  anonymous: Yup.boolean().required(),
  postTitle: Yup.string().required().label('Post Title'),
  postContent: Yup.string().required().label('Post Content'),
});

const postContentNumOfLines = 6;
const postTitleNumOfLines = 3;

function CreatePostScreen() {
  const handleSubmit = async ({
    anonymous,
    communityName,
    postTitle,
    postContent,
  }) => {
    try {
      const response = await Api.createPost({
        title: postTitle,
        content: postContent,
        asPseudo: anonymous,
        community: {
          name: communityName,
        },
      });
      console.log('hello');
      console.log(response);
    } catch (error) {
      console.log('error creating post');
    }
  };
  return (
    <View style={{ padding: 8 }}>
      <Form
        initialValues={{
          communityName: '',
          anonymous: false,
          postTitle: '',
          postContent: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormField name="communityName" placeholder="Choose a Community" />
        <FormField
          name="postTitle"
          numberOfLines={Platform.OS === 'ios' ? null : postTitleNumOfLines}
          minHeight={
            Platform.OS === 'ios' && postTitleNumOfLines
              ? 20 * postTitleNumOfLines
              : null
          }
          maxHeight={
            Platform.OS === 'ios' && postTitleNumOfLines
              ? 20 * postTitleNumOfLines
              : null
          }
          maxLength={192}
          multiline
          placeholder="Enter title of your post"
          textAlignVertical="top"
        />
        <FormField
          name="postContent"
          numberOfLines={Platform.OS === 'ios' ? null : postContentNumOfLines}
          minHeight={
            Platform.OS === 'ios' && postContentNumOfLines
              ? 20 * postContentNumOfLines
              : null
          }
          maxHeight={
            Platform.OS === 'ios' && postContentNumOfLines
              ? 20 * postContentNumOfLines
              : null
          }
          multiline
          placeholder="Enter description of your post"
          textAlignVertical="top"
        />
        <SubmitButton title="Post" />
      </Form>
    </View>
  );
}

export default CreatePostScreen;
