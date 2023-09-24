import { Link } from 'react-router-dom';
import { AiOutlineYoutube } from 'react-icons/ai';
import {
  HiOutlineMenuAlt1,
  HiOutlineHome,
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
  HiOutlineInboxIn,
  HiOutlineCursorClick,
  HiOutlineRefresh,
  HiOutlineClock,
  HiOutlineThumbUp,
  HiOutlineFire,
  HiOutlineMusicNote,
  HiOutlineShoppingBag,
  HiOutlineCog,
  HiOutlineFlag,
  HiOutlinePlay,
  HiOutlineLightBulb,
  HiOutlineNewspaper,
  HiOutlineStatusOnline,
  HiOutlineQuestionMarkCircle,
  HiOutlineInformationCircle,
  HiOutlineScissors,
  HiOutlineVolumeUp,
} from 'react-icons/hi';

import './components.css';
import reactLogo from '../assets/images/logo.svg';
import { Fragment } from 'react';

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
            <li>
              <HiOutlineHome /> <p>Home</p>
            </li>
            <li>
              <HiOutlineLightningBolt /> <p>Shorts</p>
            </li>
            <li>
              <HiOutlineCheckCircle /> <p>Subscriptions</p>
            </li>
          </ul>
        </div>
        <div className="app_category_navigation">
          <ul>
            <li>
              <HiOutlineInboxIn /> <p>Library</p>
            </li>
            <li>
              <HiOutlineRefresh /> <p>History</p>
            </li>
            <li>
              <HiOutlineClock /> <p>Watch later</p>
            </li>
            <li>
              <HiOutlineThumbUp /> <p>Liked videos</p>
            </li>
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
          <h3>Explore</h3>
          <ul>
            <li>
              <HiOutlineFire /> <p>Trending</p>
            </li>
            <li>
              <HiOutlineShoppingBag /> <p>Shopping</p>
            </li>
            <li>
              <HiOutlineMusicNote /> <p>Music</p>
            </li>
            <li>
              <HiOutlinePlay /> <p>Movies</p>
            </li>
            <li>
              <HiOutlineStatusOnline /> <p>Live</p>
            </li>
            <li>
              <HiOutlineCursorClick /> <p>Gaming</p>
            </li>
            <li>
              <HiOutlineNewspaper /> <p>News</p>
            </li>
            <li>
              <HiOutlineLightBulb /> <p>Learning</p>
            </li>
            <li>
              <HiOutlineScissors /> <p>Fashion &amp; Beauty</p>
            </li>
          </ul>
        </div>
        <div className="app_category_navigation">
          <ul>
            <li>
              <AiOutlineYoutube /> <p>YouTube Premium</p>
            </li>
            <li>
              <HiOutlineVolumeUp /> <p>YouTube Music</p>
            </li>
          </ul>
        </div>
        <div className="app_category_navigation">
          <ul>
            <li>
              <HiOutlineCog /> <p>Settings</p>
            </li>
            <li>
              <HiOutlineFlag /> <p>Report history</p>
            </li>
            <li>
              <HiOutlineQuestionMarkCircle /> <p>Help</p>
            </li>
            <li>
              <HiOutlineInformationCircle /> <p>Send feedback</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
