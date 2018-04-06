import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';

const { height } = Dimensions.get('window');

const ProductsList = props => (
  <FlatList
    data={props.productList}
    renderItem={listItem => (
      <TouchableOpacity
        activeOpacity={1}
        style={[CommonStyles.directionRow, CommonStyles.spaceBetween, CommonStyles.centerContent,
          CommonStyles.border]}
        onPress={() => Actions.collections(listItem.item)}
      >
        <View style={[CommonStyles.directionRow, BasicStyles.margin]}>
          <Icon
            name="square-o"
            style={BasicStyles.icon}
            size={height / 15}
          />
          <Text style={BasicStyles.textStyle} >
            {listItem.item}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Actions.collections(listItem.item)}
        >
          <Icon
            name="angle-right"
            style={CommonStyles.rightIcon}
            size={height / 30}
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
