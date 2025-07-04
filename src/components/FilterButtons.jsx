import React from 'react';

function FilterButtons({ filter, setFilter }) {
  return (
    <div className="btn-group mb-4">
      {['all', 'pending', 'completed'].map((f) => (
        <button
          key={f}
          className={`btn btn-sm ${
            filter === f ? 'btn-primary' : 'btn-outline-secondary'
          } text-capitalize`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
