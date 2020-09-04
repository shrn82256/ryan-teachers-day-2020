import React from 'react';

import cryLaughingEmoji from '../assets/emojis/cry_laughing.png';
import heartEmoji from '../assets/emojis/heart.png';
import clapperEmoji from '../assets/emojis/clapper.png';

function Videos() {
  const renderThumbnail = (emoji, backgroundColor, title) => {
    return (
      <div className="thumbnail">
        <div
          className="thumbnail-emoji"
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <img src={emoji} alt="emoji" />
        </div>
        <br />
        <div className="thumbnail-title has-text-centered has-text-light">
          {title}
        </div>
      </div>
    );
  };

  return (
    <div id="Videos">
      {renderThumbnail(cryLaughingEmoji, '#91ccec', 'Bloopers')}
      {renderThumbnail(heartEmoji, '#ffc0eb', 'Gift')}
      {renderThumbnail(clapperEmoji, 'lightgrey', 'Skit')}
    </div>
  );
}

export default Videos;
