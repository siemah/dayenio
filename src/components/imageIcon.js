import React from 'react';
import '../assets/css/image-icon.css'

export default ({source, alt, className, ...props}) => {
  return (
    <div className={`image-icon-container ${className || ''}`} {...props}>
      <img src={source} alt={alt} />
    </div>
  )
}
