'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeSlide extends React.Component {
  render() {
    return (
      <div>
        <Fade right>
        <h3 className="qcd text-2xl">QCD TRANSPORT, la promesse de la qualité à moindre coût</h3>
              <p className=" about mt-5">
              Société spécialisée dans le transport express, taxi colis et déménagement, 
              nous sommes au service des professionnels et particuliers. Notre société garantie 
              une livraison de vos équipements, matériels, colis dans les délais impartis aux quatre 
              coins de l’hexagone et à l’internationale !
              </p>
              <br />
        </Fade>
      </div>
    );
  }
}

export default FadeSlide;
