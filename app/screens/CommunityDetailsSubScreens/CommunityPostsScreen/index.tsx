import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ItemSeparator, Post } from '../../../components';
import { theme } from '../../../config';
import NavRoutes from '../../../navigation/NavRoutes';

import { H5Bold } from '../../../styles';
import Api from '../../../api';

export default function CommunityPostsScreen({ communityId }) {
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
      communityName=""
      postedAgo={item.createdAt}
      title={item.title}
      username={item.postedBy.name}
      voteCount={item.voteCount}
      onLikePress={() => handleLikePress(item._id, item.isPostLiked)}
      isPostLiked={item.isLikedByCurrentUser}
      onPress={() => {
        navigation.navigate(NavRoutes.POST_DETAILS, item._id);
      }}
      isCommunityFeed={true}
      isProfileFeed={false}
    />
  );

  const getCommunityFeed = async () => {
    const response = await Api.getCommunityFeed(communityId);
    setPosts(response);
    setIsRefreshing(false);
  };

  useEffect(() => {
    getCommunityFeed();
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
          getCommunityFeed();
        }}
        renderItem={renderItem}
      />
    </>
  );
}
