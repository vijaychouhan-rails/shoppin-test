import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';

const ProductsList = props => (
  <FlatList
    data={props.productList}
    renderItem={listItem => (
      <TouchableOpacity
        style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
          CommonStyles.border]}
        onPress={() => Actions.collections(listItem.item)}
      >
        <View style={[CommonStyles.directionRow, BasicStyles.margin]}>
          <Icon
            name="square-o"
            style={BasicStyles.icon}
            size={50}
          />
          <Text style={[BasicStyles.textStyle, CommonStyles.fontStyle,
            BasicStyles.text_top_margin]}
          >
            {listItem.item}
          </Text>
        </View>
        <TouchableOpacity onPress={() => Actions.collections(listItem.item)}>
          <Icon
            name="angle-right"
            style={[CommonStyles.rightIcon, BasicStyles.arrow_top_margin]}
            size={30}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);

ProductsList.propTypes = {
  productList: PropTypes.instanceOf(Array).isRequired,
};

export default ProductsList;
