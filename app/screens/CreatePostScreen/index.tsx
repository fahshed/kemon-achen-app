import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';

import * as Yup from 'yup';
import { Entypo } from '@expo/vector-icons';

import {
  Form,
  FormField,
  FormPicker,
  FormSwitch,
  SubmitButton,
} from '../../components/FormComponents';
import { Body1, Container, H6Bold } from '../../styles';
import { theme } from '../../config';
import { ItemSeparator } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCommunities } from '../../store/reducers';
import { createPost } from '../../store/reducers/Posts';
import NavRoutes from '../../navigation/NavRoutes';

const validationSchema = Yup.object().shape({
  communityName: Yup.string().required().label('Community'),
  anonymous: Yup.boolean().required(),
  postTitle: Yup.string().required().label('Post Title'),
  postContent: Yup.string().required().label('Post Content'),
});

const postContentNumOfLines = 12;
const postTitleNumOfLines = 3;

function CreatePostScreen({ navigation }) {
  const dispatch = useAppDispatch();
  const { communities } = useAppSelector((state) => state.Community);
  const [isUploaded, setIsUpLoaded] = useState(false);

  const getCommunitiesOfUser = async () => {
    await dispatch(fetchCommunities());
  };

  useEffect(() => {
    getCommunitiesOfUser();
  }, []);

  const handleSubmit = async (
    { anonymous, communityName, postTitle, postContent },
    { resetForm },
  ) => {
    setIsUpLoaded(true);
    await dispatch(
      createPost({
        title: postTitle,
        content: postContent,
        asPseudo: anonymous,
        community: {
          name: communityName,
        },
      }),
    );
    setIsUpLoaded(false);
    resetForm();
    navigation.navigate(NavRoutes.HOME);
    // setTimeout(() => {
    //   setIsUpLoaded(false);
    //   resetForm();
    //   navigation.navigate(NavRoutes.HOME);
    // }, 2000);
  };

  return (
    <View style={{ padding: 8, flex: 1 }}>
      {isUploaded ? (
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'transparent',
            height: '100%',
            opacity: 1,
            width: '100%',
            zIndex: 1,
          }}
        >
          <LottieView
            autoPlay
            loop
            source={require('../../assets/animations/done.json')}
          />
        </View>
      ) : (
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
            <Container width="auto">
              <SubmitButton title="Post" small={true} />
            </Container>
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
          <ItemSeparator height={4} color={theme.grey3} />

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
          <ItemSeparator height={4} color={theme.grey3} />

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
        </Form>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 8,
  },
  buttonCrossContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default CreatePostScreen;
