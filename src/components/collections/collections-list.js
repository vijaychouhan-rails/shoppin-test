import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';

const CollectionList = props => (
  <FlatList
    data={props.collectionList}
    renderItem={listItem => (
      <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween]}>
        <View style={CommonStyles.directionRow}>
          <Icon
            name="square-o"
            style={BasicStyles.icon}
            size={40}
          />
          <View>
            <Text style={[BasicStyles.textStyle, BasicStyles.fontStyle]}>
              {listItem.item.collection_name}
            </Text>
            <Text style={BasicStyles.margin}>{listItem.item.no_of_products}</Text>
          </View>

        </View>
        <TouchableOpacity onPress={Actions.viewCollections(listItem.item.collection_name)}>
          <Icon
            name="angle-right"
            style={CommonStyles.rightIcon}
            size={30}
          />
        </TouchableOpacity>
      </View>
    )}
  />
);

CollectionList.propTypes = {
  collectionList: PropTypes.string.isRequired,
};

export default CollectionList;
