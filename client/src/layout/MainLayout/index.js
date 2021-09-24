import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import PascalCase from 'common/string/PascalCase';
import PROJECT_CONSTANT from 'constant/ProjectConstant';

// Other Layout related Component
// import Sidebar from './Sidebar';
import Header from 'component/header';
import Main from 'component/main';
import SideBar from 'component/sidebar';
import Wrapper from 'component/wrapper';
// import Footer from './Footer';

const MainLayout = (props) => {
  React.useEffect(() => {
    const currentpage = PascalCase.toPascalCase(
      props.location.pathname.slice(1),
    );
    // タイトル変更
    document.title = currentpage + ' | ' + PROJECT_CONSTANT.TITLE;
  }, [props.location.pathname]);

  return (
    <Wrapper>
      <SideBar />
      {/* <Sidebar /> */}
      <Main>
        <Header />
        {props.children}
      </Main>
      {/* <Footer /> */}
    </Wrapper>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default withRouter(MainLayout);
