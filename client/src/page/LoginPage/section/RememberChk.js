import React from 'react';
import { CustomInput } from 'reactstrap';

const RememberChk = () => {
  return (
    <div>
      <CustomInput
        type="checkbox"
        id="rememberMe"
        label="Remember me next time"
        defaultChecked
      />
    </div>
  );
};

export default RememberChk;
