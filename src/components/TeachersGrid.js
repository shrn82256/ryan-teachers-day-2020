import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

function TeachersGrid({ teachers }) {
  const [isTeacherModalActive, setTeacherModalStatus] = useState(false);
  const [currentTeacherIndex, setCurrentTeacherIndex] = useState(0);

  useEffect(() => {
    const htmlDom = document.getElementsByTagName('html')[0];
    if (isTeacherModalActive) htmlDom.classList.add('is-clipped');
    else htmlDom.classList.remove('is-clipped');
  }, [isTeacherModalActive]);

  const onTeacherCardClick = (teacherIndex) => {
    setCurrentTeacherIndex(teacherIndex);
    setTeacherModalStatus(true);
  };

  const renderTeacherCard = (teacher, i) => (
    <div className="column is-one-fifth teacher-card" key={i}>
      <div className="card" onClick={() => onTeacherCardClick(i)}>
        <div className="card-content">{teacher.name}</div>
      </div>
    </div>
  );

  const renderTeacherModal = () => {
    const teacher = teachers[currentTeacherIndex];

    return (
      <div
        className={classNames('modal', { 'is-active': isTeacherModalActive })}
      >
        <div
          className="modal-background"
          onClick={() => setTeacherModalStatus(false)}
        />
        <div className="modal-content">
          <div className="card">
            <div className="card-content">
              {teacher.name}
              <br />
              {teacher.class}
              <br />
              {teacher.quality}
            </div>
          </div>
          `
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setTeacherModalStatus(false)}
        />
      </div>
    );
  };

  return (
    <div id="TeachersGrid" className="columns is-multiline">
      {teachers.map(renderTeacherCard)}
      {renderTeacherModal()}
    </div>
  );
}

export default TeachersGrid;
