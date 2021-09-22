import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import PascalCase from 'common/string/PascalCase';
import PROJECT_CONSTANT from 'constant/projectConstant';

// Other Layout related Component
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';

const DafaultLayout = (props) => {
  React.useEffect(() => {
    const currentpage = PascalCase.toPascalCase(
      props.location.pathname.slice(1),
    );
    // タイトル変更
    document.title = currentpage + ' | ' + PROJECT_CONSTANT.TITLE;
  }, [props.location.pathname]);

  return (
    <div id="layout-wrapper">
      <Header />
      <Sidebar />
      <MainContent content={props.children} />
      <Footer />
    </div>
  );
};

DafaultLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default withRouter(DafaultLayout);
