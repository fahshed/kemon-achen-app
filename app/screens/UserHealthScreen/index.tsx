import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { Body1Bold } from '../../styles';
import { ActivityIndicator, ItemSeparator } from '../../components';
import MetricComponent from '../../components/MetricComponent';
import TestInfoComponent from '../../components/TestInfoComponent';
import { timeAgo } from '../../utils';

import Api from '../../api';

export default function UserHealthScreen() {
  const [testHistory, setTestHistory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await Api.getUserTestsHistory();
      setIsLoading(false);
      setTestHistory(response);
    })();
  }, []);

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <ScrollView>
      <View style={styles.container}>
        <Body1Bold ml="16px" mt="16px" mb="16px">
          Overall Metric
        </Body1Bold>
        {testHistory && testHistory.length !== 0 && (
          <>
            <MetricComponent
              name="Anxiety"
              score={
                (parseInt(testHistory[0].scoreArray[0]) * 5).toString() + '%'
              }
              color="orange"
            />
            <ItemSeparator height={8} color="white" />
            <MetricComponent
              name="Depression"
              score={
                (parseInt(testHistory[0].scoreArray[1]) * 5).toString() + '%'
              }
              color="blue"
            />
            <ItemSeparator height={8} color="white" />
            <MetricComponent
              name="Stress"
              score={
                (parseInt(testHistory[0].scoreArray[2]) * 5).toString() + '%'
              }
              color="lemon"
            />
          </>
        )}
        <View style={styles.header}>
          <Body1Bold ml="16px" mt="32px" mb="16px">
            Test
          </Body1Bold>
          {/* <TouchableOpacity
            style={{ marginLeft: 'auto', marginRight: 16, marginTop: 32 }}
          >
            <Caption color="red">See All</Caption>
          </TouchableOpacity> */}
        </View>
        {testHistory?.map((history, index) => (
          <TestInfoComponent
            key={index}
            score={history.status}
            testName={history.testname}
            createdAgo={timeAgo(history.createdAt)}
          />
        ))}
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
