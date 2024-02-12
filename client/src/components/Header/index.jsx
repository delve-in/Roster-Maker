import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, HomeOutlined, PoweroffOutlined, EditOutlined, UploadOutlined } from '@ant-design/icons';

function Nav () {

  const [current, setCurrent] = useState('home');
  const manager = localStorage.getItem("username");
  function showNavigation() {
    if (manager === "Brian Kernighan") { 
      return (
        <Menu.Item key="schedule" icon={<EditOutlined />}>
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
   <div>
   
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu.Item key="dashboard" icon={<HomeOutlined />}>
        <Link to="/Dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="roster" icon={<AppstoreOutlined />}>
        <Link to="/Roster">Roster</Link>
      </Menu.Item>
      <Menu.Item key="availability" icon={<UploadOutlined />}>
        <Link to="/Availability">Availability</Link>
      </Menu.Item>
      {showNavigation()}
      <Menu.SubMenu key="SubMenu" title="Logout" icon={<PoweroffOutlined />}>
      <Menu.Item key="logout" icon={<PoweroffOutlined />}>
      <Link to="/login">Are you sure?</Link>
      </Menu.Item>
      </Menu.SubMenu>
    </Menu>
    </div>
  );
}

export default Nav;
