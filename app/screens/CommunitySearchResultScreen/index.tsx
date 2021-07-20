import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../config';
//import NavRoutes from '../../navigation/NavRoutes';
//import { Body2Bold, H5Bold } from '../../styles';

// import { TagComponent } from '../../components';
import { Container, Body2 } from '../../styles';
import { ItemSeparator, Post } from '../../components';
import NavRoutes from '../../navigation/NavRoutes';

import Api from '../../api';

const searchOptionLabels = ['All', 'Q/A', 'Suggestions'];
let posts = [
  {
    content: 'sample 1',
    commentCount: 12,
    communityName: '',
    createdAt: '2h',
    title: 'Sample Post 1',
    username: 'Rishov Paul',
    voteCount: 12,
    isLikedByCurrentUser: true,
    _id: '60831dd413c6a219a8465725',
    postType: 'Q/A',
    postedBy: { name: 'AKil' },
    isPostLiked: true,
  },
  {
    content: 'sample 2',
    commentCount: 12,
    communityName: '',
    createdAt: '2h',
    title: 'Sample Post 2',
    voteCount: 12,
    isLikedByCurrentUser: true,
    _id: '60831dd413c6a219a8465725s',
    postType: 'Suggestions',
    postedBy: { name: 'Rishov' },
    isPostLiked: true,
  },
  {
    content: 'sample 3',
    commentCount: 12,
    communityName: '',
    createdAt: '2h',
    title: 'Sample Post 3',
    voteCount: 12,
    isLikedByCurrentUser: true,
    _id: '60831dd413c6a219a8465725v',
    postType: 'All',
    postedBy: { name: 'Fahim' },
    isPostLiked: true,
  },
];

function CommunitySearchResultScreen({ route }) {
  const searchQuery = route.params;
  const navigation = useNavigation();
  //   const [searchResults, setSearchResults] = useState(null);
  const [selectedOption, setSelectedOption] = useState(0);
  const [postsState, setPosts] = useState(posts);

  console.log(searchQuery);

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
      type = 'Suggestions';
    } else {
      return setPosts(posts);
    }

    setPosts(posts.filter((post) => post.postType === type));
  };
  //console.log(searchQuery);

  const getSearchResult = async () => {
    //const response = await Api.getProfessionalChamber(searchQuery);
    //console.log(response);
    //setSearchResults(response);
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
        <View>
          {postsState.map((item) => (
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
        </View>
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
