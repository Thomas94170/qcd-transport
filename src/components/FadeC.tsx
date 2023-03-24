'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeC extends React.Component {
  render() {
    return (
      <div>
        <Fade top>
        <p className='phrase'>QCD TRANSPORT vous accompagne pour vos livraisons régulières ou urgentes 7/7</p>
        </Fade>
      </div>
    );
  }
}

export default FadeC;
