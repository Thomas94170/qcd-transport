'use client'
import React from 'react';
import Fade from 'react-reveal/Fade';


class FadeG extends React.Component {
  render() {
    return (
      <div>
        <Fade top>
        <br/>
                <h3 className='text-2xl titleC'>Nos zones d'intervention</h3>
                <p className='phrase'>Afin de garantir un service optimal, nous prenons en charge l’intégralité du transport de vos marchandises dans toute la France pour tout type de prestation.</p>
        </Fade>
      </div>
    );
  }
}

export default FadeG;
