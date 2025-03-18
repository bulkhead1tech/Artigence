import React, { useState } from 'react';

const ImageMagnifier = ({
  src,
  className,
  width,
  height,
  alt="Image",
  magnifierHeight = 535,
  magnifierWidth = 1076,
  zoomLevel=5,
  multiplyFactor,
  patient,
  rectangles,
  sample
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);
  const zoom = zoomLevel* multiplyFactor
  const mouseEnter = (e) => {
    const el = e.currentTarget;

    const { width, height } = el.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  }

  const mouseLeave = (e) => {
    e.preventDefault();
    setShowMagnifier(false);
  }

  const mouseMove = (e) => {
    const el = e.currentTarget;
    const { top, left } = el.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    setXY([x, y]);
  };

  return <div className="relative z-10 col-span-5 row-span-7 grid grid-cols-4 grid-rows-3 p-2 overflow-hidden">
    <div className='col-start-4 col-span-1 row-span-1 h-full w-full border-2 border-blue-950'>
    <img
      src={ src }
      className={ className }
      width={ width }
      height={ height }
      alt={ alt }
      onMouseEnter={ (e) => mouseEnter(e) }
      onMouseLeave={ (e) => mouseLeave(e) }
    onMouseMove={ (e) => mouseMove(e) }
    />
     <div className="flex bg-white h-1/5 w-full">
            <div className="h-full w-1/2 px-5 leading-4"><label className="text-[.7rem] " htmlFor="patient">
              Patient ID:
            </label>
            <h1 name="patient" className="font-bold">{patient}</h1></div>
            <div className="h-full w-1/2 px-5 leading-4"><label className="text-[.7rem] " htmlFor="blood">
              Sample:
            </label>
            <h1 name="blood" className="font-bold">{sample}</h1></div>
            </div></div>
    <div
    id='maginifiedimage'
      style={{
        
        position: 'absolute',
        pointerEvents: 'none',
        height: '100%',
        width: `100%`,
        opacity: '1',
        zIndex: -1,
        border: '1px solid lightgrey',
        backgroundColor: 'white',
        borderRadius: '5px',
        backgroundImage: `url('${src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${imgWidth * zoom}px ${imgHeight * zoom}px`,
        backgroundPositionX: `${-x * zoom + magnifierWidth/2}px`,
        backgroundPositionY: `${-y * zoom + magnifierHeight/2}px`,
      }}
    />
     {rectangles.map(([x1, y1, x2, y2, label], index) => {
           const scaleX = imgWidth / width; 
           const scaleY = imgHeight / height; 
       
           const scaledX1 = x1 * scaleX * zoom;
           const scaledY1 = y1 * scaleY * zoom;
           const scaledX2 = x2 * scaleX * zoom;
           const scaledY2 = y2 * scaleY * zoom;
                  const rectX = scaledX1 - (x * zoom) + (magnifierWidth / 2);
           const rectY = scaledY1 - (y * zoom) + (magnifierHeight / 2);
           const rectWidth = (scaledX2 - scaledX1);
           const rectHeight = (scaledY2 - scaledY1);

            return (
              <div
                key={index}
                style={{
                  display: showMagnifier? "": "none",
                  position: "absolute",
                  pointerEvents: 'none',
                  zIndex:-1,
                  left: `${rectX}px`,
                  top: `${rectY}px`,
                  width: `${rectWidth}px`,
                  height: `${rectHeight}px`,
                  border: "2px solid blue",
                  boxSizing: "border-box",
                }}
              >              
              </div>
            );
          })}
  </div>
};

export default ImageMagnifier;