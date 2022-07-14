import { Image } from 'antd';
import React from 'react';

import './index.less';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-bg">
        <div className="loading-content">
          <Image src="http://f.gamecreator.com.cn/img/404/defplug.png" preview={false} />
          <h1>Loading...</h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
