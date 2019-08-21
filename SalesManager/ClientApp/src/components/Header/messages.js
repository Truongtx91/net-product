import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  features:{
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },

  products: {
    id: `${scope}.products`,
    defaultMessage: 'Products',
  },

  orders: {
    id: `${scope}.orders`,
    defaultMessage: 'Orders',
  },
});
