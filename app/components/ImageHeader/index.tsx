import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../config';

function ImageHeader({ id }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: `https://picsum.photos/seed/${new Date()}/500/200` }}
        style={styles.backgroundBanner}
      >
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Image
              style={styles.image}
              source={{
                uri: `https://picsum.photos/seed/${id}/300`,
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundBanner: {
    width: '100%',
    height: 72,
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    backgroundColor: theme.white,
    flexDirection: 'row',
    width: '100%',
    height: 107,
  },
  image: {
    height: 72,
    width: 72,
    borderRadius: 36,
  },
  imageContainer: {
    justifyContent: 'center',
    marginTop: 40,
  },
  header: {
    flexDirection: 'row',
  },
});

export default ImageHeader;
