/**
 * @providesModule AppRouter
 */

import {
  createRouter,
} from '@exponent/ex-navigation';

import ProductList from './screens/ProductList';
import ProductDetails from './screens/ProductDetails';

const AppRouter = createRouter(() => ({
  productList: () => ProductList,
  productDetails: () => ProductDetails,
}));

export default AppRouter;