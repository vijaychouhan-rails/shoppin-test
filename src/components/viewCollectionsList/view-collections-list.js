import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';
import { BUTTER } from '../../constants/images';

const { height } = Dimensions.get('window');

const ViewCollectionsList = props => (
  <FlatList
    data={props.view_collection_list}
    renderItem={listItem => (
      <TouchableOpacity
        activeOpacity={1}
        style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
          BasicStyles.marginTop, CommonStyles.centerContent]}
        onPress={() => Actions.product_details(listItem.item.view_collection_name)}
      >
        <View style={[CommonStyles.directionRow, CommonStyles.centerContent, CommonStyles.flex]}>
          <Image
            source={BUTTER}
            style={CommonStyles.imageStyle}
          />
          <View style={[CommonStyles.directionRow, CommonStyles.border, CommonStyles.flex,
            CommonStyles.centerContent, CommonStyles.height, CommonStyles.spaceBetween,
            BasicStyles.paddingVertical]}
          >
            <View style={BasicStyles.marginTop}>
              <Text style={[BasicStyles.textStyle, CommonStyles.fontBold]}>
                {listItem.item.view_collection_name}
              </Text>
              <View style={CommonStyles.directionRow}>
                <Text style={[BasicStyles.margin, CommonStyles.fontColor, BasicStyles.fontSize]}>
                  {listItem.item.no_of_products}
                </Text>
                <Text style={[BasicStyles.margin, CommonStyles.fontColor, BasicStyles.fontSize]}>
                  {listItem.item.no_of_variants}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => Actions.product_details(listItem.item.view_collection_name)}
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

ViewCollectionsList.propTypes = {
  view_collection_list: PropTypes.instanceOf(Array).isRequired,
};

export default ViewCollectionsList;
