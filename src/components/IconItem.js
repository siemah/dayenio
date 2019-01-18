<<<<<<< HEAD
import React from 'react'

const IconItem = ({ source, label, description }) => (
  <div className='icon-item anime js-anime'>
    <img src={source} alt={label || ''} />
    <h3>{label}</h3>
    <p> { description || '' } </p>
  </div>
);

=======
import React from 'react'

const IconItem = ({ source, label, description }) => (
  <div className='icon-item anime js-anime'>
    <img src={source} alt={label || ''} />
    <h3>{label}</h3>
    <p> { description || '' } </p>
  </div>
);

>>>>>>> Finished a get in touch but contact form donsnt work yet
export default  IconItem;