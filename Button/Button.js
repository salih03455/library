import React from 'react';
import './style.scss';

/* Ant Design: */
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export const ApsButton = ({ text }) => {
  return (
    <Button
      id="button"
      type="primary"
      icon={<DownloadOutlined />}
      size="large">
      {text}
    </Button>
  )
}
