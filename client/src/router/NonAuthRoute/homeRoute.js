import NonAuthLayout from 'layout/NonAuthLayout';
import HomePage from 'page/HomePage';
const homeRoute = {
  path: '/home',
  layout: NonAuthLayout,
  component: HomePage,
};
export default homeRoute;
