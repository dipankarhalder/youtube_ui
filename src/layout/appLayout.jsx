import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/sidebar';
import { Header } from '../components/header';
import { TopScroll } from '../components/topScroll';

import './layout.css';

export const AppLayout = () => {
  return (
    <div className="app_profile_wrapper">
      <div className="app_sidebar_wrapper">
        <Sidebar />
      </div>
      <div className="app_video_content_wrapper">
        <div className="app_fixed_top_section">
          <Header />
          <TopScroll />
        </div>
        <div className="app_all_video_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
