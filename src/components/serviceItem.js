import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'react-materialize';

import '../assets/css/service-item.css'

export default ({number, titleId, descriptionId, className, ...props}) => {
  return (
    <Row className={`service-item relative js-anime anime ${className || ''}`} {...props}>
      <Col s={12} l={2} className='service-index'>
        { number }
      </Col>
      <Col s={12} l={10}>
        <h2 className='service-title'>
          <FormattedMessage id={titleId} />
        </h2>
        <p className='service-description'>
          <FormattedMessage id={descriptionId} />
        </p>
      </Col>
    </Row>
  )
}
