import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { BarChart } from 'react-native-animated-charts';

import { Container, H5Bold } from '../../styles';
// import Api from '../../api';

export default function ScoreScreen({ route }) {
  useEffect(() => {
    (async () => {
      console.log(route.params.testId);
      console.log(route.params.score);
    })();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container p="8px">
        <H5Bold align="center">Score</H5Bold>
        <BarChart
          labels={['10k', '2k', '1.2k', '4.5k', '3k']}
          dataY={[10, 2, 1.2, 4.5, 3]}
          color={'#a7bd4f'}
          height={300}
          containerStyles={styles.barChart}
        />
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  barChart: {
    backgroundColor: 'transparent',
    height: 500,
    width: 400,
    marginTop: 20,
  },
});
