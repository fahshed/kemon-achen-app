import React, { useRef } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';

import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import RBSheet from 'react-native-raw-bottom-sheet';

import { theme } from '../../config';
import { Body1, Body1Bold } from '../../styles';
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
            style={{ marginRight: 16 }}
          />
          {selectedItem ? (
            <Body1Bold color="primary" style={{ flex: 1 }}>
              {selectedItem}
            </Body1Bold>
          ) : (
            <Body1 color="grey5" style={{ flex: 1 }}>
              {placeholder}
            </Body1>
          )}
          <AntDesign name="down" size={16} color={theme.grey6} />
        </View>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            //backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: theme.primary,
          },
        }}
      >
        <View style={{ padding: 8 }}>
          <Body1Bold align="center" color="primary">
            Community Names
          </Body1Bold>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item._id}
          numColumns={numberOfColumns}
          renderItem={({ item, index }) => (
            <PickerItem
              item={item}
              index={index}
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
    backgroundColor: theme.white,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
  },
});

export default AppPicker;
