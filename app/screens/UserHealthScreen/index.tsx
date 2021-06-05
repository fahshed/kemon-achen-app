import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { Body1Bold, Caption } from '../../styles';
import { ItemSeparator } from '../../components';
import { theme } from '../../config';
import MetricComponent from '../../components/MetricComponent';
import TestInfoComponent from '../../components/TestInfoComponent';

export default function UserHealthScreen() {
  const metricData = [
    { id: '123452', name: 'Depression', score: '60%' },
    { id: '123435', name: 'Anxiety', score: '80%' },
    { id: '12345f', name: 'Stress', score: '40%' },
  ];

  const testInfo = [
    {
      _id: '1234',
      score: '12',
      color: 'red',
      testName: 'Anxiety',
      numericInfo: '1h',
    },
    {
      _id: '12342',
      score: '40',
      color: 'green',
      testName: 'Bipolar Disorder',
      numericInfo: '1h',
    },
    {
      _id: '12343',
      score: '20',
      color: 'blue',
      testName: 'Suicidal Tendency',
      numericInfo: '1h',
    },
    {
      _id: '12344d',
      score: '50',
      color: 'yellow',
      testName: 'PTSD',
      numericInfo: '1h',
    },
    {
      _id: '1234d',
      score: '12',
      color: 'red',
      testName: 'Anxiety',
      numericInfo: '1h',
    },
    {
      _id: '12342d',
      score: '40',
      color: 'green',
      testName: 'Bipolar Disorder',
      numericInfo: '1h',
    },
    {
      _id: '12343d',
      score: '20',
      color: 'blue',
      testName: 'Suicidal Tendency',
      numericInfo: '1h',
    },
    {
      _id: '123442d',
      score: '50',
      color: 'yellow',
      testName: 'PTSD',
      numericInfo: '1h',
    },
  ];

  const suggestedtestInfo = [
    {
      _id: '1234',
      score: '12',
      color: 'red',
      testName: 'Schrizophrenia',
      numericInfo: '100 people took this test',
    },
    {
      _id: '12342',
      score: '40',
      color: 'green',
      testName: 'PTSD',
      numericInfo: '40 people took this test',
    },
    {
      _id: '12343',
      score: '20',
      color: 'blue',
      testName: 'Anxiety',
      numericInfo: '1h',
    },
    {
      _id: '12344',
      score: '50',
      color: 'yellow',
      testName: 'Eating Disorder',
      numericInfo: '1h',
    },
  ];

  const renderMetricItem = ({ item }) => (
    <MetricComponent name={item.name} score={item.score} color="red" />
  );

  const renderTestBadge = ({ item }) => (
    <TestInfoComponent
      score={item.score}
      color={item.color}
      testName={item.testName}
      numericInfo={item.numericInfo}
    />
  );

  const renderSuggestedTestBadge = ({ item }) => (
    <TestInfoComponent
      score=""
      color={item.color}
      testName={item.testName}
      numericInfo={item.numericInfo}
    />
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <Body1Bold ml="16px" mt="16px" mb="16px">
          Overall Metric
        </Body1Bold>

        <FlatList
          data={metricData}
          ItemSeparatorComponent={() => (
            <ItemSeparator height={16} color={theme.white} />
          )}
          keyExtractor={(metric) => metric._id}
          renderItem={renderMetricItem}
        />
        <View style={styles.header}>
          <Body1Bold ml="16px" mt="32px" mb="16px">
            Test
          </Body1Bold>
          <TouchableOpacity
            style={{ marginLeft: 'auto', marginRight: 16, marginTop: 32 }}
          >
            <Caption color="red">See All</Caption>
          </TouchableOpacity>
        </View>
        <FlatList
          data={testInfo}
          ItemSeparatorComponent={() => (
            <ItemSeparator height={8} color={theme.white} />
          )}
          keyExtractor={(test) => test._id}
          renderItem={renderTestBadge}
        />

        <View style={styles.header}>
          <Body1Bold ml="16px" mt="32px" mb="16px">
            Test
          </Body1Bold>
          <TouchableOpacity
            style={{ marginLeft: 'auto', marginRight: 16, marginTop: 36 }}
          >
            <Caption color="red">See All</Caption>
          </TouchableOpacity>
        </View>
        <FlatList
          data={suggestedtestInfo}
          ItemSeparatorComponent={() => (
            <ItemSeparator height={8} color={theme.white} />
          )}
          keyExtractor={(test) => test._id}
          renderItem={renderSuggestedTestBadge}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
