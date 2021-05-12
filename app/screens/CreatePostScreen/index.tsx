import React, { useEffect } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';

import * as Yup from 'yup';
import { Entypo } from '@expo/vector-icons';

import { Client } from '../../api';
import {
  Form,
  FormField,
  FormPicker,
  FormSwitch,
  SubmitButton,
} from '../../components/FormComponents';
import { useApi } from '../../hooks';
import { Body1, H6Bold } from '../../styles';
import { theme } from '../../config';

const validationSchema = Yup.object().shape({
  communityName: Yup.string().required().label('Community'),
  anonymous: Yup.boolean().required(),
  postTitle: Yup.string().required().label('Post Title'),
  postContent: Yup.string().required().label('Post Content'),
});

const postContentNumOfLines = 7;
const postTitleNumOfLines = 3;

// const communities = [
//   {
//     _id: '1',
//     name: 'PTSD',
//     photo: 'a.jpg',
//   },
//   {
//     _id: '2',
//     name: 'Stress',
//     photo: 'a.jpg',
//   },
//   {
//     _id: '3',
//     name: 'Anxiety',
//     photo: 'a.jpg',
//   },
//   {
//     _id: '4',
//     name: 'OCD',
//     photo: 'a.jpg',
//   },
// ];

// const getComms = async (getCommsApi) => {
//   const communities2 = await getCommsApi.request();
//   return communities2.data;
// };

function CreatePostScreen({ navigation }) {
  const {
    data: postData,
    error: postError,
    loading: postLoading,
    request: createPost,
  } = useApi(Client.prototype.createPost);

  const {
    data: communities,
    //loading: communityLoading,
    request: getCommunities,
  } = useApi(Client.prototype.getCommunities);

  useEffect(() => {
    (async function () {
      const response = await getCommunities();
      if ('error' in response) {
        console.log('Community fetch error', response.error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //const communities2 = await getCommunitiesApi.request();

  const handleSubmit = async (
    { anonymous, communityName, postTitle, postContent },
    { resetForm },
  ) => {
    await createPost({
      title: postTitle,
      content: postContent,
      asPseudo: anonymous,
      community: {
        name: communityName,
      },
    });
    resetForm();
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
        <View style={styles.container}>
          <View style={styles.buttonCrossContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo
                name="cross"
                size={32}
                color={theme.primary}
                style={{ marginRight: 8 }}
              />
            </TouchableOpacity>
            <H6Bold style={{ padding: 8, textAlign: 'center' }}>
              Your Post
            </H6Bold>
            <SubmitButton
              title="Post"
              style={{
                height: 24,
                width: 48,
                marginTop: 0,
              }}
            />
          </View>
        </View>

        <FormPicker
          items={communities}
          name="communityName"
          numberOfColumns={1}
          placeholder="Choose a community"
        />

        <View style={styles.detailsContainer}>
          <FormSwitch name="anonymous" />
          <Body1>Post as anonymous</Body1>
        </View>

        <View style={styles.separator} />

        <FormField
          border={0}
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
        <View style={styles.separator} />

        <FormField
          border={0}
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

        {postLoading ? (
          <Body1>Loading...</Body1>
        ) : (
          <View>
            {postError && <Body1 mt="24px">Error Occured</Body1>}
            <Body1 mt="24px">{JSON.stringify(postData)}</Body1>
          </View>
        )}
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    padding: 8,
    marginBottom: 8,
    flexDirection: 'row',
    width: '100%',
  },
  detailsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  separator: {
    backgroundColor: theme.grey5,
    height: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  buttonCrossContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default CreatePostScreen;
