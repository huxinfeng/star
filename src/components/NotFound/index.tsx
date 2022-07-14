import { Image } from 'antd';
import React from 'react';

import './index.less';

const NotFound = () => {
  return (
    <div className="layout404">
      <div className="layout404-bg">
        <div className="layout404-content">
          <Image
            src="https://material.gamecreator.com.cn/webForum/1693186a563a03149b3ff199f820c799/fs7F2zEFemBnHSzRDBsswN8GjEZp3N7f/notfound.png"
            preview={false}
          />
          <h1>你访问的内容已经不见咯~</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
