import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ItemSeparator, TopSearchBar2 } from '../../components';
import UserProfileCommentCard from '../../components/UserProfileCommentCard';

import { theme } from '../../config';

export default function UserPostsScreen() {
  const posts = [
    {
      _id: '6083187898f2f23ebc165433',
      content: 'Sure I will Contact You',
      parentPost: {
        _id: '60831dd413c6a219a8465726',
        title: 'Mission flashbacks at scale',
      },
      repliedTo: '60831c4b3888533d4ccf3c90',
      createdAt: '1mo',
    },
    {
      _id: '6083187898f2f23ebc165434',
      content: 'It does get better',
      parentPost: {
        _id: '60831dd413c6a219a8465727',
        title: 'I am having severe anxiety attacks lately, please help',
      },
      repliedTo: null,
      createdAt: '1mo',
    },
    {
      _id: '608319bc5b79701508fcc6fd',
      content: 'You can do it',
      parentPost: {
        _id: '60831dd413c6a219a8465728',
        title: "Sleeplessness is at it's extreme",
      },
      repliedTo: null,
      createdAt: '1mo',
    },
    {
      _id: '608ade7085c2155bace0bb08',
      content:
        'This is just assssssssssssssssssssss funny test comment ny akil ha ha',
      parentPost: {
        _id: '608a96eec517a9416cf24061',
        title: 'This is just a test Post',
      },
      repliedTo: null,
      createdAt: '1mo',
    },
    {
      _id: '608aeb07c9890844e4b9581a',
      content: 'This is a test reply to a comment',
      parentPost: {
        _id: '608a96eec517a9416cf24061',
        title: 'This is just a test Post',
      },
      repliedTo: '608ade7085c2155bace0bb08',
      createdAt: '1mo',
    },
    {
      _id: '608b13beeadeae59407a5213',
      content: 'This is a hot test reply to a comment',
      parentPost: {
        _id: '608a96eec517a9416cf24061',
        title: 'This is just a test Post',
      },
      repliedTo: '608ade7085c2155bace0bb08',
      createdAt: '1mo',
    },
    {
      _id: '608c6573ec77f9044cc59288',
      content: 'JINX THE COMMENET',
      parentPost: {
        _id: '608a96eec517a9416cf24061',
        title: 'This is just a test Post',
      },
      repliedTo: null,
      createdAt: '1mo',
    },
    {
      _id: '608c6600cc42351a0020df88',
      content: 'JINX THE COMMENET',
      parentPost: {
        _id: '608a96eec517a9416cf24061',
        title: 'This is just a test Post',
      },
      repliedTo: null,
      createdAt: '1mo',
    },
    {
      _id: '608c6621c3854e44b0168543',
      content: 'JIaaaaaaaaaaaaaaaNX THE COMMENET',
      parentPost: {
        _id: '608a96eec517a9416cf24061',
        title: 'This is just a test Post',
      },
      repliedTo: null,
      createdAt: '1mo',
    },
    {
      _id: '608c66b1c3854e44b0168544',
      content: 'A JINXED REPLY ',
      parentPost: {
        _id: '608a96eec517a9416cf24061',
        title: 'This is just a test Post',
      },
      repliedTo: '608c6573ec77f9044cc59288',
      createdAt: '1mo',
    },
    {
      _id: '608e9024b9bb2a2c245e0cd7',
      content: 'This is another test reply to the JINX comment',
      parentPost: {
        _id: '608a96eec517a9416cf24061',
        title: 'This is just a test Post',
      },
      repliedTo: '608c6573ec77f9044cc59288',
      createdAt: '1mo',
    },
  ];

  const renderItem = ({ item }) => (
    <UserProfileCommentCard
      postTitle={item.parentPost.title}
      commentBody={item.content}
      time={item.createdAt}
    />
  );

  return (
    <>
      <FlatList
        data={posts}
        ItemSeparatorComponent={() => (
          <ItemSeparator height={8} color={theme.grey1} />
        )}
        keyExtractor={(post) => post._id}
        renderItem={renderItem}
      />
    </>
  );
}
