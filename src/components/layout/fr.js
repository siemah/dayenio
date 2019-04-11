import React from 'react';
import { addLocaleData } from 'react-intl';

import Layout from '../layout';

import messages from '../../data/messages/fr';
import fr from 'react-intl/locale-data/fr';
import 'intl/locale-data/jsonp/fr';

addLocaleData(fr);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />
);
