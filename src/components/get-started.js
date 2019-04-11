import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from 'gatsby';
import { Button } from 'react-materialize';

import '../assets/css/get-started.css';

export default (props) => (
  <div className="get-started center">
    <p><FormattedMessage id='get-started-description' /></p>
    <Button className='z-depth-0'>
      <Link to='/get-in-touch'><FormattedMessage id='get-started-button' /></Link>
    </Button>
  </div>
);
