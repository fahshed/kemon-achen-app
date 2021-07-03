import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ItemSeparator, Post } from '../../components';
import { theme } from '../../config';
import NavRoutes from '../../navigation/NavRoutes';

import { H5Bold } from '../../styles';
import Api from '../../api';

export default function GeneralPostsScreen({ userId, isCommunityFeed, isProfileFeed }) {
  const [posts, setPosts] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const navigation = useNavigation();

  const handleLikePress = async (postId, isLiked) => {
    Api.likePost(postId, isLiked ? 'like' : 'unlike');
  };

  const renderItem = ({ item }) => (
    <Post
      touchDisabled={false}
      content={item.content}
      commentCount={item.commentCount}
      communityName={item.community.name}
      postedAgo={item.createdAt}
      title={item.title}
      username=""
      voteCount={item.voteCount}
      onLikePress={() => handleLikePress(item._id, item.isPostLiked)}
      isPostLiked={item.isLikedByCurrentUser}
      onPress={() => {
        navigation.navigate(NavRoutes.POST_DETAILS, item._id);
      }}
      isCommunityFeed={isCommunityFeed}
      isProfileFeed={isProfileFeed}
    />
  );

  const getProfessionalPosts = async () => {
    const response = await Api.getPostsByUserId(userId);
    console.log(response);
    setPosts(response);
    setIsRefreshing(false);
  };

  useEffect(() => {
    getProfessionalPosts();
  }, []);

  return (
    <>
      {isRefreshing && (
        <H5Bold align="center" color="grey5" mt="8px" mb="8px">
          Feed Loading........
        </H5Bold>
      )}

      <FlatList
        data={posts}
        ItemSeparatorComponent={() => (
          <ItemSeparator height={8} color={theme.grey1} />
        )}
        keyExtractor={(post) => post._id}
        refreshing={isRefreshing}
        onRefresh={() => {
          setIsRefreshing(true);
          getProfessionalPosts();
        }}
        renderItem={renderItem}
      />
    </>
  );
}
