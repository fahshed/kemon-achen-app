import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

import { ItemSeparator } from '../../components';
import UserProfileCommentCard from '../../components/UserProfileCommentCard';

import { theme } from '../../config';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchUserCommentsById } from '../../store/reducers';

export default function UserCommentsScreen() {
  const dispatch = useAppDispatch();
  // extracting the user from the store
  const { user } = useAppSelector((state) => state.User);
  const { userComments } = useAppSelector((state) => state.User);

  const getCommentssOfUser = async () => {
    const response = await dispatch(fetchUserCommentsById(user._id));
    if ('error' in response) {
      console.log('Community List fetch error', response.error);
    }
  };

  useEffect(() => {
    getCommentssOfUser();
  }, []);

  const renderItem = ({ item }) => (
    <UserProfileCommentCard
      postTitle={item.parentPost.title}
      commentBody={item.content}
      time={item.createdAt}
      handleNaviagtion={() => console.log('this is just a placeholder!')}
    />
  );

  return (
    <>
      <FlatList
        data={userComments}
        ItemSeparatorComponent={() => (
          <ItemSeparator height={8} color={theme.grey1} />
        )}
        keyExtractor={(userComment) => userComment._id}
        renderItem={renderItem}
      />
    </>
  );
}
