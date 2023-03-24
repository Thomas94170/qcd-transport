'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeSlideA extends React.Component {
  render() {
    return (
      <div>
        <Fade right>
        <h3 className="qcd text-2xl">QCD, le cœur de notre stratégie</h3>
              <p className=" about mt-5">
              La performance de notre société repose sur un engagement ferme, le QCD : 
              Qualité, Coût et Délai. Notre service se traduit par l’optimisation de votre 
              marge d’exploitation et de votre performance financière. 
              </p>
              <br />
              <p className=" about mt-5">
              Concrètement, QCD TRANSPORT a pour objectif de :
              </p>
              <p className=" about mt-5">
               • Garantir une livraison de qualité (réduction du taux de pertes et dommages) 
               et veiller au respect de l’image de marque du donneur d’ordre.
              </p>
              <p className=" about mt-5">
              •	Réduire le coût du transport et ainsi accroître la marge de l’entreprise.
              </p>
              <p className=" about mt-5">
              •	Respecter les délais de livraison avec une forte mobilisation du transporteur.
              </p>
              <br />
              <p className=" about mt-5">
                Nous livrons ce que vous voulez, quand vous voulez, où vous
                voulez dans les meilleures conditions de sécurité, de qualité,
                et de rapidité.
              </p>
              <br />
        </Fade>
      </div>
    );
  }
}

export default FadeSlideA;
