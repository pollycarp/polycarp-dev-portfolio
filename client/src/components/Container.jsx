// components/Container.jsx
import React from 'react';

const Container = ({ children }) => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem',
        boxSizing: 'border-box',
      }}
    >
      {children}
    </div>
  );
};

export default Container;
