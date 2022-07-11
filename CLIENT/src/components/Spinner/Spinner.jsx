import React from 'react';
import spinner from '../../assets/img/spinner.gif';

const Spinner = () => {
  return (
    <img
      style={{
        height: '100px',
        width: '100px',
        zIndex: '999',
        position: 'absolute',
        top: '45vh',
        left: '50vw',
        transform: 'translateX(-50%)',
      }}
      src={spinner}
      alt="spinner"
    ></img>
  );
};

export default Spinner;
