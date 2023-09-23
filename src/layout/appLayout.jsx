import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/sidebar';

import './layout.css';

export const AppLayout = () => {
  return (
    <div className="app_profile_wrapper">
      <div className="app_sidebar_wrapper">
        <Sidebar />
      </div>
      <div className="app_video_content_wrapper">
        <Outlet />
      </div>
    </div>
  );
};
