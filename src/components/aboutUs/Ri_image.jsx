import React from 'react';
import './Ri_image.css';
function Ri_image(props) {
  return (
    <div className='Ri_image_Container'>
        <div className="Ri_ImageTexT">
           <div className="Ri_textWrap">
           <h1 className='Ri_imageHeading'>{props.heading}</h1>
            <h4 className='tagline'><i>{props?.tagline}</i></h4>
            <p className='Ri_imageDetail'>{props?.detail}</p>
           </div>
        </div>
        <div className="Ri_image_ContainerImg">
            <img src={props?.img}  alt="" />
        </div>
    </div>
  )
}

export default Ri_image;