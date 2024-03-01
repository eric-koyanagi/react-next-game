import React from 'react';

export interface ParallaxProps {
    speed: number;    
}

const ParallaxLayer = ({speed}: ParallaxProps) => {
  return (
    <div>{speed}</div>
  );
};

export default ParallaxLayer;
