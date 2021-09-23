import NonAuthLayout from 'layout/NonAuthLayout';
import LoginPage from 'page/LoginPage';
const loginRoute = {
  path: '/login',
  layout: NonAuthLayout,
  component: LoginPage,
};
export default loginRoute;
