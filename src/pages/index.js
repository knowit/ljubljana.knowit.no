import React from 'react';
import Link from 'gatsby-link';
import BEMHelper from 'react-bem-helper';
import viewmodel from '../json';
import Paragraph from '../components/Paragraph';
import ButtonGroup from '../components/ButtonGroup';
import Arrow from '../components/Icons/Arrow';
import CodeOfConduct from '../components/CodeOfConduct';

const classes = new BEMHelper({
  name: 'content',
  prefix: 'c-',
});

const buttonClasses = new BEMHelper({
  name: 'button',
  prefix: 'c-',
});

const IndexPage = () => (
  <div>
    <div {...classes('', 'intro')}>
      <img src="./static/ljubljana_logo.png" />
      <h1>{viewmodel.title}</h1>
      <div>
        <Paragraph cssModfier="white">Tid: {viewmodel.event.date}</Paragraph>
        <Paragraph cssModfier="white">
          Sted: {viewmodel.event.city}, {viewmodel.event.country}
        </Paragraph>
      </div>
      <ButtonGroup>
        <Link {...buttonClasses('', 'white')} to="/speakers/">
          Talere
        </Link>
        <Link {...buttonClasses('', 'white')} to="/schedule/">
          Skjema
        </Link>
      </ButtonGroup>
      <a href="#info">
        <Arrow />
      </a>
    </div>
    <div id="info" {...classes('', 'info')}>
      <h2>Informasjon</h2>
      <p>
        Knowit Objectnet arrangerer to fagseminarer årlig. Det er de ansatte
        selv som lager programmet. Høsten 2018 vil den bli avholdt 19. oktober -
        22. oktober 2018 i Ljubljana, Slovenia.
      </p>
      <p>
        Tidligere har vi besøkt Berlin, Istanbul, Madrid, Dublin, Svalbard,
        Reykjavik, Palma etc.
      </p>
    </div>
    <CodeOfConduct />
  </div>
);

export default IndexPage;
