import React from 'react';

const Intro = ({ children }) => {
  return (
    <div className="text-center font-russo font-semibold text-5xl mt-20 mb-20">
      {children}
    </div>
  );
};

export default Intro;

