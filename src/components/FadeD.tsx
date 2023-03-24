'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeD extends React.Component {
  render() {
    return (
      <div>
        <Fade top>
        <br/>
                <h1 className='text-2xl titleA'>Transport express de marchandises pour les professionnels</h1>
                <p className='phrase'>Nous livrons vos palettes, colis et marchandises dans le respect strict de votre cahier des charges.</p>
        </Fade>
      </div>
    );
  }
}

export default FadeD;
