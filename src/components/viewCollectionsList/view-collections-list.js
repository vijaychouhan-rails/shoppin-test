import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';

const ViewCollectionsList = props => (
  <FlatList
    data={props.view_collection_list}
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
            <View style={CommonStyles.directionRow}>
              <Text style={BasicStyles.margin}>{listItem.item.no_of_products}</Text>
              <Text style={BasicStyles.margin}>{listItem.item.no_of_variants}</Text>
            </View>
          </View>

        </View>
        <Icon
          name="angle-right"
          style={CommonStyles.rightIcon}
          size={30}
        />
      </View>
    )}
  />
);

ViewCollectionsList.propTypes = {
  view_collection_list: PropTypes.string.isRequired,
};

export default ViewCollectionsList;
