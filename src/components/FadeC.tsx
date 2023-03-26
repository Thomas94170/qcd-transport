'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeC extends React.Component {
  render() {
    return (
      <div>
        <Fade top>
        <p className='phrase'>QCD TRANSPORT vous accompagne pour vos <b>livraisons régulières ou urgentes 7/7</b>.
        Pour cela, nous mettons à votre dispositon un véhicule de <b>15m3</b> pouvant transporter de <b>
          1 à 5 palettes type europe (80 x 120) </b>. Concernant vos colis, notre capacité va de <b>1 à 100 colis</b>.
          Nous prenons en charge vos marchandises jusqu à <b>1300kg</b>.
          </p>
        </Fade>
      </div>
    );
  }
}

export default FadeC;
