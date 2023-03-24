'use client'
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { Modal } from './Modal';

class ZoomA extends React.Component {
  render() {
    return (
      <div>
        <Zoom left>
        <Modal/>
        </Zoom>
      </div>
    );
  }
}

export default ZoomA;
