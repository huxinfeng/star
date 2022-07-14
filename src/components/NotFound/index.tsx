import { Image } from 'antd';
import React from 'react';

import './index.less';

const NotFound = () => {
  return (
    <div className="layout404">
      <div className="layout404-bg">
        <div className="layout404-content">
          <Image src="http://f.gamecreator.com.cn/img/404/notfound.png" preview={false} />
          <h1>你访问的内容已经不见咯~</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
