'use client'
import React from 'react';
import Rotate from 'react-reveal/Rotate';

class RotateImg extends React.Component {
  render() {
    return (
      <div>
        <Rotate bottom right>
        <div className="h-200 bg-gray-400 scale-75 hover:scale-100 duration-700 liv">
        <img src='https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='image'/>
        </div>
       
        </Rotate>
      </div>
    );
  }
}

export default RotateImg;
 