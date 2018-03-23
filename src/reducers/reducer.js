import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  orders: [
    {
      date: '12 February', hash: '#0100', name: 'Johne Doe', rs: 'US$13.00', payment: 'paid', fulfiled: 'fulfiled',
    },
    {
      date: '13 February', hash: '#0100', name: 'Johne Doe', rs: 'US$13.00', payment: 'paid', fulfiled: 'fulfiled',
    },
    {
      date: '14 February', hash: '#0100', name: 'Johne Doe', rs: 'US$13.00', payment: 'paid', fulfiled: 'fulfiled',
    },
    {
      date: '15 February', hash: '#0100', name: 'Johne Doe', rs: 'US$13.00', payment: 'paid', fulfiled: 'fulfiled',
    },
  ],
});

// date: ['12 February', '13 February', '14 February'],
// hase: ['#0100', '#0100', '#0100'],
// name: ['Johne Doe', 'Johne Doe', 'Johne Doe'],
// payment: ['paid', 'paid', 'paid'],
// rs: ['US$13.00', 'US$13.00', 'US$13.00'],
// fulfiled: ['fulfiled', 'fulfiled', 'fulfiled'],


const reducer = (state = initialState) => state;

export default reducer;
