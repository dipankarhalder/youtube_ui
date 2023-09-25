export const VideoContent = () => {
  const yHeading =
    'Lorem Ipsum is simply dummy or text of the printing and type setting industry lorem Ipsum';

  return (
    <ul>
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22,
      ].map((item) => (
        <li key={item}>
          <span></span>
          <div className="app_video_details">
            <div className="app_video_profile"></div>
            <div className="app_video_other_details">
              <h4>
                {yHeading.length > 50
                  ? `${yHeading.slice(0, 50)}...`
                  : yHeading}
              </h4>
              <p>Technical Suneja</p>
              <div className="app_video_views">
                <p>34k views</p>
                <span></span>
                <p>2 days ago</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
