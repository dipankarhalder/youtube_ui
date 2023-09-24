import { topArr } from '../common/content';

export const TopScroll = () => {
  return (
    <div className="app_top_scroller">
      {topArr.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
    </div>
  );
};
