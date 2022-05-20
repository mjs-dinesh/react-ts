import React from 'react';
import { useNavigate } from 'react-router-dom';
import Assets from 'imports/assets.import';
import './sidebar.ui.scss';
import { ErrorMessage, useSetState } from 'utils/functions.utils';
import { Models } from 'utils/imports.utils';
import Divider from '../divider/divider.ui';

const Sidebar = () => {
  const navigate = useNavigate();
  const [state, setState] = useSetState({
    active: '',
  });

  const navigations = [
    {
      icon: 'settings',
      link: '/',
      label: 'Overview',
    },
    
 // _NAV_ ̰
  ];

  const handleLogout = async () => {
    try {
      // await Models.user.logoutUser();
      localStorage.setItem('token', '');
      window.location.href = '/auth';
    } catch (err) {
      ErrorMessage(err);
    }
  };
  return (
    <div className="sidebar_container">
      <div className="sidebar_wrapper">
        <div className="app_logo_caontainer" onClick={() => navigate('/')}>
          {/* <img
            src={Assets.image}
            className="app_logo_image"
            alt="app_logo"
          /> */}
        </div>
        {navigations.map((nav) => (
          <div
            className={`sidebar_item_container ${nav.label === state.active && 'active'
              }`}
            onClick={() => {
              navigate(`${nav.link}`), setState({ active: nav.label });
            }}>
            <div className="sidebar_item_wrapper">
              <div className="sidebar_icon_container">
                <img
                  src={Assets[nav.icon]}
                  width={22}
                  height={22}
                  className="sidebar_icon"
                  alt="view"
                />
              </div>
              <div className="sidebar_label_container">
                <div className="sidebar_label">{nav.label}</div>
              </div>
            </div>
          </div>
        ))}
        <Divider />
        <div
          className={`sidebar_item_container`}
          onClick={() => {
            handleLogout();
          }}>
          <div className="sidebar_item_wrapper">
            <div className="sidebar_icon_container">
              <img
                src={Assets.logout}
                width={25}
                height={25}
                className="sidebar_icon"
                alt="view"
              />
            </div>
            <div className="sidebar_label_container">
              <div className="sidebar_label">Logout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
