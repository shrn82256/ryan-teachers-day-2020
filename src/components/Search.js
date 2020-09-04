import React, { useState, useEffect, useRef } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import Fuse from 'fuse.js';

import teachersDb from '../data.json';

const fuse = new Fuse(teachersDb, {
  keys: ['name'],
  threshold: 0.3,
});

function Search({ setTeachers }) {
  const [query, setQuery] = useState('');

  const searchBoxRef = useRef(null);
  const executeScroll = () =>
    scrollToComponent(searchBoxRef.current, {
      offset: -100,
      align: 'top',
      duration: 200,
      ease: 'linear',
    });

  useEffect(() => {
    let teachers;
    if (query) teachers = fuse.search(query).map(({ item }) => item);
    else teachers = teachersDb;

    setTeachers(teachers.slice(0, 15));
  }, [query, setTeachers]);

  return (
    <div id="Search" className="columns">
      <div className="column is-8 is-offset-2">
        <div className="control w-100">
          <input
            ref={searchBoxRef}
            className="input is-rounded has-background-dark has-text-white"
            type="text"
            placeholder="Enter Teacher's name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={executeScroll}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
