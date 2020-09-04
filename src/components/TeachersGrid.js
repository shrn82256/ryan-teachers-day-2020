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

  const renderTeacherCard = (teacher, i) => {
    const isLastCard = i === 11;
    const onCardClick = isLastCard ? null : () => onTeacherCardClick(i);
    const cardContent = isLastCard ? 'and many more...' : teacher.name;
    const classTag =
      isLastCard || !teacher.class ? null : (
        <span className="tag is-link">{teacher.class}</span>
      );

    return (
      <div className="column is-one-quarter teacher-card" key={i}>
        <div className="card has-text-light" onClick={onCardClick}>
          <div className="card-content">
            <span className="card-title">{cardContent}</span>
            {classTag}
          </div>
        </div>
      </div>
    );
  };

  const renderTeacherModal = () => {
    if (teachers.length === 0) return null;

    const teacher = teachers[currentTeacherIndex];

    const teacherName = <div className="teacher-name">{teacher.name}</div>;
    const teacherClass = teacher.class ? (
      <span className="teacher-class tag is-light">{teacher.class}</span>
    ) : null;
    const teacherQuality = (
      <div className="teacher-quality">
        {teacher.quality ? (
          <>
            <span>We love you beacuse you're </span>
            <span className="has-text-weight-bold">{teacher.quality}</span>
          </>
        ) : (
          teacher.note
        )}
      </div>
    );

    return (
      <div
        className={classNames('teacher-modal modal', {
          'is-active': isTeacherModalActive,
        })}
      >
        <div
          className="modal-background"
          onClick={() => setTeacherModalStatus(false)}
        />
        <div className="modal-content">
          <div className="card has-text-light">
            <div className="card-content">
              <div className="columns">
                <div className="column is-8">{teacherName}</div>
                <div className="column is-4 has-text-right">{teacherClass}</div>
              </div>
              <br />
              {teacherQuality}
            </div>
          </div>
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
