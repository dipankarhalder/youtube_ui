import { AiOutlineYoutube } from 'react-icons/ai';
import {
  HiOutlineHome,
  HiOutlineLightningBolt,
  HiOutlineCheckCircle,
  HiOutlineInboxIn,
  HiOutlineRefresh,
  HiOutlineClock,
  HiOutlineThumbUp,
  HiOutlineFire,
  HiOutlineMusicNote,
  HiOutlineShoppingBag,
  HiOutlinePlay,
  HiOutlineLightBulb,
  HiOutlineNewspaper,
  HiOutlineStatusOnline,
  HiOutlineScissors,
  HiOutlineCursorClick,
  HiOutlineCog,
  HiOutlineFlag,
  HiOutlineQuestionMarkCircle,
  HiOutlineInformationCircle,
  HiOutlineVolumeUp,
} from 'react-icons/hi';

/* router json */
export const routerJson = {
  general: [
    { title: 'Home', icon: HiOutlineHome },
    { title: 'Shorts', icon: HiOutlineLightningBolt },
    { title: 'Subscriptions', icon: HiOutlineCheckCircle },
  ],
  genOther: [
    { title: 'Library', icon: HiOutlineInboxIn },
    { title: 'History', icon: HiOutlineRefresh },
    { title: 'Watch later', icon: HiOutlineClock },
    { title: 'Liked videos', icon: HiOutlineThumbUp },
  ],
  explore: {
    heading: 'Explore',
    lists: [
      { title: 'Trending', icon: HiOutlineFire },
      { title: 'Shopping', icon: HiOutlineShoppingBag },
      { title: 'Music', icon: HiOutlineMusicNote },
      { title: 'Movies', icon: HiOutlinePlay },
      { title: 'Live', icon: HiOutlineStatusOnline },
      { title: 'Gaming', icon: HiOutlineCursorClick },
      { title: 'News', icon: HiOutlineNewspaper },
      { title: 'Learning', icon: HiOutlineLightBulb },
      { title: 'Fashion & Beauty', icon: HiOutlineScissors },
    ],
  },
  youSel: [
    { title: 'YouTube Premium', icon: AiOutlineYoutube },
    { title: 'YouTube Music', icon: HiOutlineVolumeUp },
  ],
  other: [
    { title: 'Settings', icon: HiOutlineCog },
    { title: 'Report history', icon: HiOutlineFlag },
    { title: 'Help', icon: HiOutlineQuestionMarkCircle },
    { title: 'Send feedback', icon: HiOutlineInformationCircle },
  ],
};
