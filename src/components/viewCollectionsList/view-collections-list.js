import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';

const ViewCollectionsList = props => (
  <FlatList
    data={props.view_collection_list}
    renderItem={listItem => (
      <TouchableOpacity
        style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
          BasicStyles.marginTop, CommonStyles.centerContent]}
        onPress={() => Actions.product_details(listItem.item.view_collection_name)}
      >
        <View style={[CommonStyles.directionRow, CommonStyles.centerContent]}>
          <Image
            style={CommonStyles.imageStyle}
          />
          <View style={BasicStyles.marginTop}>
            <Text style={[BasicStyles.textStyle, CommonStyles.fontStyle]}>
              {listItem.item.view_collection_name}
            </Text>
            <View style={CommonStyles.directionRow}>
              <Text style={[BasicStyles.margin, CommonStyles.fontColor]}>
                {listItem.item.no_of_products}
              </Text>
              <Text style={[BasicStyles.margin, CommonStyles.fontColor]}>
                {listItem.item.no_of_variants}
              </Text>
            </View>
          </View>

        </View>
        <TouchableOpacity
          onPress={() => Actions.product_details(listItem.item.view_collection_name)}
        >
          <Icon
            name="angle-right"
            style={CommonStyles.rightIcon}
            size={30}
          />
        </TouchableOpacity>

      </TouchableOpacity>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);

ViewCollectionsList.propTypes = {
  view_collection_list: PropTypes.instanceOf(Array).isRequired,
};

export default ViewCollectionsList;
