import { Image } from 'antd';
import React from 'react';

import './index.less';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-bg">
        <div className="loading-content">
          <Image
            src="https://material.gamecreator.com.cn/webForum/1693186a563a03149b3ff199f820c799/23hrAiBb4MDDSNJ8sPQ534EdQTYMTGfE/defplug.png"
            preview={false}
          />
          <h1>Loading...</h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
