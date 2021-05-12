import React, { useRef } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import RBSheet from 'react-native-raw-bottom-sheet';

import { theme } from '../../config';
import { Body1 } from '../../styles';
import AppButton from '../AppButton';
import PickerItem from '../PickerItem';

function AppPicker({
  items,
  numberOfColumns = 1,
  onSelectItem,
  placeholder,
  selectedItem,
  width = '100%',
}) {
  const refRBSheet = useRef(null);
  return (
    <>
      <TouchableOpacity onPress={() => refRBSheet.current.open()}>
        <View style={[styles.container, { width }]}>
          <SimpleLineIcons
            name="people"
            size={24}
            color={theme.grey5}
            style={{ marginRight: 8 }}
          />
          {selectedItem ? (
            <Body1 color="black" style={{ flex: 1 }}>
              {selectedItem}
            </Body1>
          ) : (
            <Body1 color="grey5" style={{ flex: 1 }}>
              {placeholder}
            </Body1>
          )}
          <AntDesign
            name="down"
            size={16}
            color={theme.grey5}
            style={{ marginLeft: 8 }}
          />
        </View>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: theme.primary,
          },
        }}
      >
        <AppButton
          title="Close"
          style={{ height: 32 }}
          onPress={() => refRBSheet.current.close()}
        />
        <FlatList
          data={items}
          keyExtractor={(item) => item._id}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItem
              item={item}
              onPress={() => {
                onSelectItem(item);
                refRBSheet.current.close();
              }}
            />
          )}
        />
      </RBSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.lightGrey,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },
});

export default AppPicker;
