import React, { useEffect, useState } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
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
import { Body1, Body1Bold, Body2, Container, H6Bold } from '../../styles';
import { theme } from '../../config';
import { ItemSeparator } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCommunities } from '../../store/reducers';
import { createPost } from '../../store/reducers/Posts';
import NavRoutes from '../../navigation/NavRoutes';

const tags = ['Q/A', 'Recommendations', 'Help'];

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

  const [postTagIndex, setPostTagIndex] = useState(-1);

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
        postType: postTagIndex === -1 ? 'General' : tags[postTagIndex],
      }),
    );
    setIsUpLoaded(false);
    resetForm();
    navigation.navigate(NavRoutes.HOME);
  };

  return isUploaded ? (
    <View
      style={{
        backgroundColor: 'transparent',
        opacity: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LottieView
        autoPlay
        loop
        source={require('../../assets/animations/done.json')}
        style={{ marginLeft: 5 }}
      />
    </View>
  ) : (
    <ScrollView>
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
          <Container width="30%" align="flex-start">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo
                name="cross"
                size={32}
                color={theme.primary}
                style={{ marginRight: 8 }}
              />
            </TouchableOpacity>
          </Container>
          <Container width="30%">
            <H6Bold style={{ padding: 8, textAlign: 'center' }}>
              Your Post
            </H6Bold>
          </Container>
          <Container width="30%" align="flex-end">
            <Container width="auto">
              <SubmitButton title="Post" small={true} />
            </Container>
          </Container>
        </View>

        <Container mb="8px" pl="16px" pr="16px" align="flex-start">
          <FormPicker
            items={communities}
            name="communityName"
            numberOfColumns={1}
            placeholder="Choose a community"
          />
        </Container>

        <ItemSeparator height={4} color={theme.grey3} />

        <View style={styles.detailsContainer}>
          <FormSwitch name="anonymous" />
          <Body1>Post as anonymous</Body1>
        </View>

        <ItemSeparator height={4} color={theme.grey3} />

        <Body1Bold ml="16px" mt="8px" mb="8px">
          Add Post Tags
        </Body1Bold>
        <Container
          direction="row"
          justify="flex-start"
          wrap="wrap"
          align="flex-start"
          pl="16px"
          pr="16px"
          pb="2px"
        >
          {tags.map((label, index) => (
            <OptionButton
              key={index}
              onSelect={() => setPostTagIndex(index)}
              label={label}
              selected={index === postTagIndex}
            />
          ))}
        </Container>

        <ItemSeparator height={4} color={theme.grey3} />

        <View style={{ paddingHorizontal: 8, marginBottom: 8 }}>
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
        </View>

        <ItemSeparator height={4} color={theme.grey3} />

        <View style={{ paddingHorizontal: 8, marginBottom: 8 }}>
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
        </View>
      </Form>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonCrossContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});

export default CreatePostScreen;

function OptionButton({ label, selected, onSelect }) {
  return (
    <TouchableOpacity
      activeOpacity={0.2}
      onPress={onSelect}
      style={{ marginRight: 8, marginBottom: 8 }}
    >
      <Container
        bg={selected ? 'primary' : 'white'}
        p={selected ? '6px' : '5px'}
        corner="16px"
        border={selected ? '0px' : '1px'}
        bc="primary"
      >
        <Body2 color={selected ? 'white' : 'primary'}>{label}</Body2>
      </Container>
    </TouchableOpacity>
  );
}
