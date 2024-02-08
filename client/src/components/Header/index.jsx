import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';

const Nav = () => {
  const [current, setCurrent] = useState('home');

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="dashboard" icon={<MailOutlined />}>
        <Link to="/Dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="roster" icon={<AppstoreOutlined />}>
        <Link to="/Roster">Roster</Link>
      </Menu.Item>
      <Menu.Item key="availability" icon={<AppstoreOutlined />}>
        <Link to="/Availability">Availability</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
