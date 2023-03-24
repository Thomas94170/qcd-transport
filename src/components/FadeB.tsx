'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeSlideB extends React.Component {
  render() {
    return (
      <div>
        <Fade right>
        
        <h3 className="qcd text-2xl">Responsabilité sociétale</h3>
              <p className=" about mt-5">
              Choisir QCD TRANSPORT, c'est opter pour une société de transport à taille humaine fiable, 
              flexible, rapide et soucieuse de son impact environnemental.
              </p>
              <p className=" about mt-5">
              Respectueux de l’environnement et répondant à des besoins de proximité, la société est sensible 
              aux enjeux de développement durable. QCD TRANSPORT cherche à avoir un impact positif sur la 
              société tout en étant économiquement viable. 
              </p>
              <p className=" about mt-5">
              Notre société limite ses émissions de CO2 en adoptant une conduite éco-responsable 
              et en mutualisant les chargements pour réduire les flux et éviter les trajets à vide.
              </p>
            

        </Fade>
      </div>
    );
  }
}

export default FadeSlideB;
