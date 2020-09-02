import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import photo1 from '../assets/photos/1.jpeg';
import photo2 from '../assets/photos/2.jpeg';
import photo3 from '../assets/photos/3.jpeg';

const photos = [photo1, photo2, photo3];

function Photos() {
  const [isPhotoModalActive, setPhotoModalStatus] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const htmlDom = document.getElementsByTagName('html')[0];
    if (isPhotoModalActive) htmlDom.classList.add('is-clipped');
    else htmlDom.classList.remove('is-clipped');
  }, [isPhotoModalActive]);

  const onPhotoCardClick = (photoIndex) => {
    setCurrentPhotoIndex(photoIndex);
    setPhotoModalStatus(true);
  };

  const renderPhoto = (photo, i) => (
    <div className="column is-one-third photo-card" key={i}>
      <div className="card" onClick={() => onPhotoCardClick(i)}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img className="photo" alt={`card-${i}`} src={photo} />
          </figure>
        </div>
      </div>
    </div>
  );

  const renderPhotoModal = () => (
    <div className={classNames('modal', { 'is-active': isPhotoModalActive })}>
      <div
        className="modal-background"
        onClick={() => setPhotoModalStatus(false)}
      />
      <div className="modal-content">
        <p className="image">
          <img src={photos[currentPhotoIndex]} alt="modal" />
        </p>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setPhotoModalStatus(false)}
      />
    </div>
  );

  return (
    <div id="Photos" className="columns">
      {photos.map(renderPhoto)}
      {renderPhotoModal()}
    </div>
  );
}

export default Photos;
