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
      <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
        BasicStyles.marginTop, CommonStyles.centerContent]}
      >
        <View style={[CommonStyles.directionRow, CommonStyles.centerContent]}>
          <Image
            style={CommonStyles.imageStyle}
          />
          <View>
            <Text style={[BasicStyles.textStyle, BasicStyles.fontStyle]}>
              {listItem.item.product_name}
            </Text>
            <View style={[CommonStyles.directionRow, BasicStyles.marginTop]}>
              <Text style={BasicStyles.margin}>{listItem.item.no_of_products}</Text>
              <Text style={BasicStyles.margin}>{listItem.item.variants}</Text>
            </View>
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
    )}
    keyExtractor={(item, index) => index}
  />
);

CollectionList.propTypes = {
  collectionList: PropTypes.instanceOf(Array).isRequired,
};

export default CollectionList;