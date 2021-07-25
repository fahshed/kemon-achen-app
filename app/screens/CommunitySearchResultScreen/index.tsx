import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../config';

import { Container, Body2 } from '../../styles';
import { ItemSeparator, Post } from '../../components';
import NavRoutes from '../../navigation/NavRoutes';

import Api from '../../api';

const searchOptionLabels = ['All', 'Q/A', 'Help', 'Recommendations'];
let posts = [];

function CommunitySearchResultScreen({ route }) {
  const { searchQuery, communityId } = route.params;
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(0);
  const [postsState, setPosts] = useState(null);

  const handleLikePress = async (postId, isLiked) => {
    Api.likePost(postId, isLiked ? 'like' : 'unlike');
  };

  const onSearchOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const filterList = (index) => {
    let type = 'All';
    if (index === 1) {
      type = 'Q/A';
    } else if (index === 2) {
      type = 'Help';
    } else if (index === 3) {
      type = 'Recommendations';
    } else {
      return setPosts(posts);
    }

    setPosts(posts.filter((post) => post.postType === type));
  };

  const getSearchResult = async () => {
    const response = await Api.searchCommunityPosts(communityId, searchQuery);
    posts = response;
    setPosts(response);
  };

  useEffect(() => {
    getSearchResult();
  }, []);

  return (
    <>
      <Container
        direction="row"
        bg="transparent"
        justify="space-evenly"
        p="16px"
      >
        {searchOptionLabels.map((label, index) => (
          <SearchOptionButton
            key={label}
            label={label}
            selected={index === selectedOption}
            onSelect={() => {
              onSearchOptionSelect(index);
              filterList(index);
            }}
          />
        ))}
      </Container>

      <ItemSeparator height={8} color={theme.grey3} />
      <ScrollView>
        {postsState &&
          postsState.map((item, index) => (
            <View key={index}>
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
                key={item._id}
              />
              <ItemSeparator height={8} color={theme.grey3} />
            </View>
          ))}
      </ScrollView>
    </>
  );
}

function SearchOptionButton({ label, selected, onSelect }) {
  return (
    <TouchableOpacity activeOpacity={0.2} onPress={onSelect}>
      <Container bg={selected ? 'secondary' : 'white'} p="7px" corner="16px">
        <Body2 color={selected ? 'white' : 'black'}>{label}</Body2>
      </Container>
    </TouchableOpacity>
  );
}

export default CommunitySearchResultScreen;
