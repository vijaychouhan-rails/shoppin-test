import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';

const ProductsList = props => (
  <FlatList
    data={props.productList}
    renderItem={listItem => (
      <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween]}>
        <View style={CommonStyles.directionRow}>
          <Icon
            name="square-o"
            style={BasicStyles.icon}
            size={40}
          />
          <Text style={[BasicStyles.textStyle, CommonStyles.fontStyle, BasicStyles.marginTop]}>
            {listItem.item}
          </Text>
        </View>
        <TouchableOpacity onPress={() => Actions.collections(listItem.item)}>
          <Icon
            name="angle-right"
            style={CommonStyles.rightIcon}
            size={30}
          />
        </TouchableOpacity>
      </View>
    )}
    keyExtractor={(item, index) => index}
  />
);

ProductsList.propTypes = {
  productList: PropTypes.instanceOf(Array).isRequired,
};

export default ProductsList;
