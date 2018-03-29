import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';

const CollectionList = props => (
  <FlatList
    data={props.collectionList}
    renderItem={listItem => (
      <TouchableOpacity
        style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
          BasicStyles.marginTop, CommonStyles.centerContent]}
        onPress={() => Actions.viewCollections(listItem.item.product_name)}
      >
        <View style={[CommonStyles.directionRow, CommonStyles.centerContent, CommonStyles.flex]}>
          <Image
            style={CommonStyles.imageStyle}
          />
          <View style={[CommonStyles.directionRow, CommonStyles.border, CommonStyles.flex,
            CommonStyles.spaceBetween, BasicStyles.paddingVertical]}
          >
            <View>
              <Text style={[BasicStyles.textStyle, CommonStyles.fontStyle]}>
                {listItem.item.product_name}
              </Text>
              <View style={[CommonStyles.directionRow, BasicStyles.marginTop]}>
                <Text style={[BasicStyles.margin, CommonStyles.fontColor]}>
                  {listItem.item.no_of_products}
                </Text>
                <Text style={[BasicStyles.margin, CommonStyles.fontColor]}>
                  {listItem.item.variants}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => Actions.viewCollections(listItem.item.product_name)}>
              <Icon
                name="angle-right"
                style={CommonStyles.rightIcon}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>

      </TouchableOpacity>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);

CollectionList.propTypes = {
  collectionList: PropTypes.instanceOf(Array).isRequired,
};

export default CollectionList;
