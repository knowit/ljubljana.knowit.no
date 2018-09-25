import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import BEMHelper from 'react-bem-helper';

import Header from '../components/Header';
import '../css/index.css';
import viewmodel from '../json';

export const classes = new BEMHelper({
  name: 'content',
  prefix: 'c-',
});

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet
        title="Knowit Objectnet Fagseminar 2018"
        meta={[
          {
            name: 'description',
            content:
              'Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte selv som lager programmet. Høsten 2018 vil den bli avholdt 19. oktober - 22. oktober 2018 i Ljubljana, Slovenia.',
          },
          { name: 'keywords', content: 'Fagseminar, Ljubljana, Fag' },
        ]}>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway"
          rel="stylesheet"
        />
      </Helmet>
      {children()}
      <div className="google-maps-wrapper">
        <div className="google-maps-blocker" />
        <div className="google-maps-content">
          <h1>Lokasjon</h1>
          <h3>Austria Trend Hotel</h3>
          <h3>Dunajska cesta 154, 1000</h3>
          <h3>Ljubljana</h3>
        </div>
        <iframe
          className="google-maps"
          src={viewmodel.event.gmapsUrl}
          frameborder="0"
        />
      </div>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
