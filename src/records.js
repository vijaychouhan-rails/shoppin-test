import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  orders: [
    {
      date: '12 February',
      hash: '#0100',
      name: 'Johne Doe',
      rs: 'US$13.00',
      payment: 'Paid',
      fulfiled: 'fulfiled',
      no_of_orders: '4',
    },
    {
      date: '13 February',
      hash: '#0100',
      name: 'Johne Doe',
      rs: 'US$13.00',
      payment: 'Paid',
      fulfiled: 'fulfiled',
      no_of_orders: '4',
    },
    {
      date: '14 February',
      hash: '#0100',
      name: 'Johne Doe',
      rs: 'US$13.00',
      payment: 'Paid',
      fulfiled: 'fulfiled',
      no_of_orders: '4',
    },
    {
      date: '15 February',
      hash: '#0100',
      name: 'Johne Doe',
      rs: 'US$13.00',
      payment: 'Paid',
      fulfiled: 'fulfiled',
      no_of_orders: '4',
    },
  ],
  orderDetails: [
    { title: 'Title', size: 'L', price: '40 $' },
    { title: 'Title', size: 'L', price: '40 $' },
    { title: 'Title', size: 'L', price: '40 $' },
  ],
  productList: ['All Products', 'Collections'],

  collectionList: [
    { product_name: 'Swarovki Crystals', no_of_products: '19 Products' },
    { product_name: 'Tools & Accessories', no_of_products: '16 Products' },
  ],

  all_products: [
    { product_name: 'Super Glue for flip flop', no_of_products: '100 in stock' },
    { product_name: 'Swarovki Crystals 001', no_of_products: '150 inStock', variants: '150 in variants' },
  ],

  view_collection_list: [
    { view_collection_name: 'Air Blue Opal 258', no_of_products: '150 in stonk', no_of_variants: '12 variants' },
    { view_collection_name: 'Amethyst 204', no_of_products: '100 in stock', no_of_variants: '12 variants' },
  ],

  productListDetails: [
    { size: 'Small / SS5', rs: 'US$3.14', product_code: 'SWR-258-SS5-S' },
    { size: 'Small / SS7', rs: 'US$3.14', product_code: 'SWR-258-SS5-S' },
  ],
});

export default initialState;
