import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

import teachersDb from '../data.json';

const fuse = new Fuse(teachersDb, {
  keys: ['name'],
  threshold: 0.3,
});

function Search({ setTeachers }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    let teachers;
    if (query) teachers = fuse.search(query).map(({ item }) => item);
    else teachers = teachersDb;

    setTeachers(teachers);
  }, [query, setTeachers]);

  return (
    <div id="Search">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Normal input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
