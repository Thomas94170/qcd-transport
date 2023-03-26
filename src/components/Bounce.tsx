'use client'
import React from 'react';
import Bounce from 'react-reveal/Bounce';

class BounceA extends React.Component {
  render() {
    return (
      <div>
        <Bounce>
        <p className='content-center text-center text-white text-2xl sm:text-6xl'>Nos Services</p>
        </Bounce>
      </div>
    );
  }
}

export default BounceA;