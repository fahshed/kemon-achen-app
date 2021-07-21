import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../config';
//import NavRoutes from '../../navigation/NavRoutes';
//import { Body2Bold, H5Bold } from '../../styles';

// import { TagComponent } from '../../components';
import { Container, Body2 } from '../../styles';
import { ItemSeparator, Post } from '../../components';
import NavRoutes from '../../navigation/NavRoutes';

import Api from '../../api';

const searchOptionLabels = ['General', 'Q/A', 'help', 'recommendations'];
let posts = [];

function CommunitySearchResultScreen({ route }) {
  const { searchQuery, communityId } = route.params;
  const navigation = useNavigation();
  //   const [searchResults, setSearchResults] = useState(null);
  const [selectedOption, setSelectedOption] = useState(0);
  const [postsState, setPosts] = useState(null);

  //console.log(searchQuery);

  const handleLikePress = async (postId, isLiked) => {
    Api.likePost(postId, isLiked ? 'like' : 'unlike');
  };

  const onSearchOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const filterList = (index) => {
    let type = 'General';
    if (index === 1) {
      type = 'Q/A';
    } else if (index === 2) {
      type = 'help';
    } else if (index === 3) {
      type = 'recommendations';
    } else {
      return setPosts(posts);
    }

    setPosts(posts.filter((post) => post.postType === type));
  };
  //console.log(searchQuery);

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
      <View style={styles.communityQueryContainer}>
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
            postsState.map((item) => (
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
            ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  communityQueryContainer: {
    backgroundColor: theme.white,
    flexDirection: 'column',
  },
});

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
