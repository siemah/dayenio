import React from 'react'
import { FormattedMessage } from 'react-intl';

const IconItem = ({ source, label, descriptionId }) => (
  <div className='icon-item anime js-anime'>
    <img src={source} alt={label || ''} />
    <h3>{label}</h3>
    <p><FormattedMessage id={descriptionId} /></p>
  </div>
);

export default  IconItem;
