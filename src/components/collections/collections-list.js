import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';
import { BUTTER } from '../../constants/images';

const { height } = Dimensions.get('window');

const CollectionList = props => (
  <FlatList
    data={props.collectionList}
    renderItem={listItem => (
      <TouchableOpacity
        activeOpacity={1}
        style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
          BasicStyles.marginTop, CommonStyles.centerContent]}
        onPress={() => Actions.viewCollections(listItem.item.product_name)}
      >
        <View style={[CommonStyles.directionRow, CommonStyles.flex]}>
          <Image
            source={BUTTER}
            style={CommonStyles.imageStyle}
          />
          <View style={[CommonStyles.directionRow, CommonStyles.border, CommonStyles.height,
            CommonStyles.centerContent, CommonStyles.flex, CommonStyles.spaceBetween,
            BasicStyles.paddingVertical]}
          >
            <View>
              <Text style={[BasicStyles.textStyle, CommonStyles.fontBold]}>
                {listItem.item.product_name}
              </Text>
              <View style={[CommonStyles.directionRow, BasicStyles.marginTop]}>
                <Text style={[BasicStyles.margin, CommonStyles.fontColor, BasicStyles.fontSize]}>
                  {listItem.item.no_of_products}
                </Text>
                <Text style={[BasicStyles.margin, CommonStyles.fontColor]}>
                  {listItem.item.variants}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => Actions.viewCollections(listItem.item.product_name)}
            >
              <Icon
                name="angle-right"
                style={CommonStyles.rightIcon}
                size={height / 30}
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
