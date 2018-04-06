import React, { Component } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { Container } from 'native-base';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderView from '../../components/header/header';
import constantsText from '../../constants/constantsText';
import FooterView from '../../components/footer/footer';
import BasicStyles from './BasicStyles';
import colors from '../../constants/colors';
import CommonStyles from '../../assets/CommonStyles';
import { PRODUCT1, PRODUCT2, PRODUCT3, PRODUCT4, BUTTER } from '../../constants/images';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: 1,
    };
    this.showList = this.showList.bind(this);
  }

  showList() {
    return (
      <FlatList
        data={this.props.product_list_details}
        renderItem={listItem => (
          <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
            BasicStyles.marginTop, CommonStyles.centerContent]}
          >
            <View style={[CommonStyles.directionRow, CommonStyles.centerContent]}>
              <Image
                source={BUTTER}
                style={CommonStyles.imageStyle}
              />
              <View style={[CommonStyles.border, CommonStyles.height, BasicStyles.centerContent,
                CommonStyles.flex, BasicStyles.marginRight]}
              >
                <Text style={[BasicStyles.textStyle, BasicStyles.fontSize, CommonStyles.fontStyle]}>
                  {listItem.item.size}
                </Text>
                <View style={CommonStyles.directionRow}>
                  <Text style={[BasicStyles.margin, BasicStyles.fontSize, CommonStyles.fontColor]}>
                    {listItem.item.rs}
                  </Text>
                  <Text style={[BasicStyles.margin, BasicStyles.fontSize, CommonStyles.fontColor]}>
                    {listItem.item.product_code}
                  </Text>
                </View>
              </View>

            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }


  render() {
    return (
      <Container
        style={CommonStyles.backgroundColor}
      >
        <HeaderView title={this.props.data} showBar />
        <View style={[CommonStyles.imageSlider, BasicStyles.imageSlider]}>
          <Swiper
            showsButtons={false}
            activeDotColor={colors.black}
            paginationStyle={{ bottom: -20 }}
          >
            <View style={BasicStyles.slide}>
              <Image
                source={PRODUCT1}
                style={BasicStyles.slideImage}
              />
            </View>
            <View style={BasicStyles.slide}>
              <Image
                source={PRODUCT2}
                style={BasicStyles.slideImage}
              />
            </View>
            <View style={BasicStyles.slide}>
              <Image
                source={PRODUCT3}
                style={BasicStyles.slideImage}
              />
            </View>
            <View style={BasicStyles.slide}>
              <Image
                source={PRODUCT4}
                style={BasicStyles.slideImage}
              />
            </View>
          </Swiper>
        </View>
        <Text style={[BasicStyles.textStyle, BasicStyles.fontSizeHeading,
          BasicStyles.marginTopText]}
        >
          {this.props.data}
        </Text>
        <View style={[BasicStyles.border_style, BasicStyles.margin, BasicStyles.marginRight]}>
          <Text style={[BasicStyles.textStyle,
            BasicStyles.fontSizeHeading, BasicStyles.paddingBoth]}
          >
            {constantsText.title_of_list}
          </Text>
        </View>

        {this.showList()}
        <FooterView products={this.state.isShow} />
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  product_list_details: state.get('product_list_details').toJS(),
});

ProductDetails.propTypes = {
  data: PropTypes.string.isRequired,
  product_list_details: PropTypes.instanceOf(Array).isRequired,
};


export default connect(mapStateToProps)(ProductDetails);
