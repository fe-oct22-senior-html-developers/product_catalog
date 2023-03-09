import React from 'react';
import './ProductTechSpecs.scss';

type Props = {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  capacity: string;
  camera: string;
  zoom: string;
  cell: string[];
};

export const ProductTechSpecs: React.FC<Props> = ({
  screen,
  resolution,
  processor,
  ram,
  capacity,
  camera,
  zoom,
  cell,
}) => {
  return (
    <div className="product__tech-specs">
      <h3 className="product__tech-specs--title">Tech specs</h3>
      <div className="product__tech-specs--details">
        <p className="product__tech-specs--detail product__tech-specs--key">
          Screen
        </p>
        <p className="product__tech-specs--detail product__tech-specs--value">
          {screen}
        </p>
      </div>
      <div className="product__tech-specs--details">
        <p className="product__tech-specs--detail product__tech-specs--key">
          Resolution
        </p>
        <p className="product__tech-specs--detail product__tech-specs--value">
          {resolution}
        </p>
      </div>
      <div className="product__tech-specs--details">
        <p className="product__tech-specs--detail product__tech-specs--key">
          Processor
        </p>
        <p className="product__tech-specs--detail product__tech-specs--value">
          {processor}
        </p>
      </div>
      <div className="product__tech-specs--details">
        <p className="product__tech-specs--detail product__tech-specs--key">
          RAM
        </p>
        <p className="product__tech-specs--detail product__tech-specs--value">
          {ram}
        </p>
      </div>
      <div className="product__tech-specs--details">
        <p className="product__tech-specs--detail product__tech-specs--key">
          Built in memory
        </p>
        <p className="product__tech-specs--detail product__tech-specs--value">
          {capacity}
        </p>
      </div>
      <div className="product__tech-specs--details">
        <p className="product__tech-specs--detail product__tech-specs--key">
          Camera
        </p>
        <p className="product__tech-specs--detail product__tech-specs--value">
          {camera}
        </p>
      </div>
      <div className="product__tech-specs--details">
        <p className="product__tech-specs--detail product__tech-specs--key">
          Zoom
        </p>
        <p className="product__tech-specs--detail product__tech-specs--value">
          {zoom}
        </p>
      </div>
      <div className="product__tech-specs--details">
        <p className="product__tech-specs--detail product__tech-specs--key">
          Cell
        </p>
        <p className="product__tech-specs--detail product__tech-specs--value">
          {cell}
        </p>
      </div>
    </div>
  );
};
