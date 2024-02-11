import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';

function Nav () {

  const [current, setCurrent] = useState('home');
  const manager = localStorage.getItem("username");
  function showNavigation() {
    if (manager === "Brian Kernighan") { 
      return (
        <Menu.Item key="schedule" icon={<AppstoreOutlined />}>
        <Link to="/Schedule">Schedule</Link>
      </Menu.Item>
      );}
      }
  const onClick = (e) => {
    setCurrent(e.key);
    if(e.key === "logout"){
      localStorage.setItem('id_token', "");
      localStorage.setItem('username', "");
    }
  };

  return (
   
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu.Item key="dashboard" icon={<MailOutlined />}>
        <Link to="/Dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="roster" icon={<AppstoreOutlined />}>
        <Link to="/Roster">Roster</Link>
      </Menu.Item>
      <Menu.Item key="availability" icon={<AppstoreOutlined />}>
        <Link to="/Availability">Availability</Link>
      </Menu.Item>
      {showNavigation()}
      <Menu.SubMenu key="SubMenu" title="Logout" icon={<AppstoreOutlined />}>
      <Menu.Item key="logout" icon={<AppstoreOutlined />}>
      <Link to="/login">Are you sure?</Link>
      </Menu.Item>
      </Menu.SubMenu>
    </Menu>

  );
}

export default Nav;
