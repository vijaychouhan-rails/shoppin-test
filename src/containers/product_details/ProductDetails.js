import React, { Component } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { Container, Content } from 'native-base';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';
import HeaderView from '../../components/header/header';
import constantsText from '../../constants/constantsText';
import FooterView from '../../components/footer/footer';
import BasicStyles from './BasicStyles';
import CommonStyles from '../../assets/CommonStyles';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        { size: 'Small / SS5', rs: 'US$3.14', product_code: 'SWR-258-SS5-S' },
        { size: 'Small / SS7', rs: 'US$3.14', product_code: 'SWR-258-SS5-S' },
      ],
    };
    this.showList = this.showList.bind(this);
  }

  showList() {
    return (
      <FlatList
        data={this.state.productList}
        renderItem={listItem => (
          <View style={[CommonStyles.directionRow, CommonStyles.spaceBetween,
            BasicStyles.marginTop, CommonStyles.centerContent]}
          >
            <View style={[CommonStyles.directionRow, CommonStyles.centerContent]}>
              <Image
                style={CommonStyles.imageStyle}
              />
              <View style={BasicStyles.marginTop}>
                <Text style={[BasicStyles.textStyle, CommonStyles.fontStyle]}>
                  {listItem.item.size}
                </Text>
                <View style={CommonStyles.directionRow}>
                  <Text style={[BasicStyles.margin, CommonStyles.fontColor]}>
                    {listItem.item.rs}
                  </Text>
                  <Text style={[BasicStyles.margin, CommonStyles.fontColor]}>
                    {listItem.item.product_code}
                  </Text>
                </View>
              </View>

            </View>
          </View>
        )}
        keyExtractor={(item, index) => index}
      />
    );
  }


  render() {
    return (
      <Container
        style={CommonStyles.backgroundColor}
      >
        <HeaderView title={this.props.data} />
        <Content>
          <View style={BasicStyles.imageSlider}>
            <Swiper
              style={BasicStyles.wrapper}
              showsButtons={false}
              activeDotColor={BasicStyles.activeDotColor}
            >
              <Image style={[BasicStyles.slide, BasicStyles.backgroundColor1]} />
              <Image style={[BasicStyles.slide, BasicStyles.backgroundColor2]} />
              <Image style={[BasicStyles.slide, BasicStyles.backgroundColor1]} />
              <Image style={[BasicStyles.slide, BasicStyles.backgroundColor3]} />
            </Swiper>
          </View>
          <Text style={[BasicStyles.textStyle, CommonStyles.fontStyle]}>
            {this.props.data}
          </Text>
          <Text style={[BasicStyles.textStyle, CommonStyles.fontStyle, CommonStyles.border_style,
            BasicStyles.paddingBoth]}
          >
            {constantsText.title_of_list}
          </Text>
          {this.showList()}
        </Content>
        <FooterView />
      </Container>
    );
  }
}
ProductDetails.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};


export default ProductDetails;
