import React from 'react';

import cryLaughingEmoji from '../assets/emojis/cry_laughing.png';
import heartEmoji from '../assets/emojis/heart.png';
import clapperEmoji from '../assets/emojis/clapper.png';

function Videos() {
  const renderThumbnail = (emoji, backgroundColor, title, url) => {
    return (
      <a className="thumbnail" href={url} target="__blank__">
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
      </a>
    );
  };

  return (
    <div id="Videos">
      {renderThumbnail(
        cryLaughingEmoji,
        '#91ccec',
        'Bloopers',
        'https://drive.google.com/file/d/1Y14p5zQvhYGt0q7z9FZN0Ff9rnFQg9oK/view'
      )}
      {renderThumbnail(
        heartEmoji,
        '#ffc0eb',
        'Gift',
        'https://drive.google.com/file/d/1CM2GmVWvYe0bBu1382wqvHumqyLWjD-a/view'
      )}
      {renderThumbnail(
        clapperEmoji,
        'lightgrey',
        'Skit',
        'https://drive.google.com/file/d/1zVABkAB_S16DIXAHFSezSaKNajlvuoLa/view'
      )}
    </div>
  );
}

export default Videos;
