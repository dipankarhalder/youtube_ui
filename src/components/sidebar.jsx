import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { routerJson } from '../common/router';

import './components.css';
import reactLogo from '../assets/images/logo.svg';

export const Sidebar = () => {
  return (
    <div className="app_sidebar_cover">
      <div className="app_logo_wrap">
        <span>
          <HiOutlineMenuAlt1 />
        </span>
        <Link to="/">
          <img src={reactLogo} alt="youtube" />
        </Link>
      </div>
      <div className="app_scrollable_nav">
        <div className="app_category_navigation">
          <ul>
            {routerJson.general.map((item, idx) => (
              <li key={idx}>
                <item.icon /> <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="app_category_navigation">
          <ul>
            {routerJson.genOther.map((item, idx) => (
              <li key={idx}>
                <item.icon /> <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="app_category_navigation">
          <h3>Subscriptions</h3>
          <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
              <Fragment key={idx}>
                <li>
                  <span></span>
                  <p>SonyLiv</p>
                </li>
                <li>
                  <span></span>
                  <p>Technical Suneja</p>
                </li>
                <li>
                  <span></span>
                  <p>Thapa Technical</p>
                </li>
                <li>
                  <span></span>
                  <p>ByteGrad</p>
                </li>
                <li>
                  <span></span>
                  <p>Love Babbar</p>
                </li>
              </Fragment>
            ))}
          </ul>
        </div>
        <div className="app_category_navigation">
          <h3>{routerJson.explore.heading}</h3>
          <ul>
            {routerJson.explore.lists.map((item, idx) => (
              <li key={idx}>
                <item.icon /> <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="app_category_navigation">
          <ul>
            {routerJson.youSel.map((item, idx) => (
              <li key={idx}>
                <item.icon /> <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="app_category_navigation">
          <ul>
            {routerJson.other.map((item, idx) => (
              <li key={idx}>
                <item.icon /> <p>{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
