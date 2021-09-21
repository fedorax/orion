import React from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';


// Import Routes all
import authRoute from './AuthRoute';
import nonAuthRoute from './NonAuthRoute';

// Import all middleware
import AuthGuard from 'common/auth/AuthGuard';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {nonAuthRoute.map((route) => (
          <AuthGuard
            path={route.path}
            layout={route.layout}
            component={route.component}
            key={route.path}
            activate={false}
          />
        ))}

        {authRoute.map((route) => (
          <AuthGuard
            path={route.path}
            layout={route.layout}
            component={route.component}
            key={route.path}
            activate={true}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default AppRouter;
