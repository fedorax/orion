import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import PascalCase from 'common/string/PascalCase';
import PROJECT_CONSTANT from 'constant/projectConstant';

const NonAuthLayout = (props) => {
  React.useEffect(() => {
    const currentpage = PascalCase.toPascalCase(
      props.location.pathname.slice(1),
    );
    // タイトル変更
    document.title = currentpage + ' | ' + PROJECT_CONSTANT.TITLE;
  }, [props.location.pathname]);
  return <>{props.children}</>;
};

NonAuthLayout.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default withRouter(NonAuthLayout);
