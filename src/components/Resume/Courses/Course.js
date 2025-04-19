import React from 'react';
import PropTypes from 'prop-types';

const Publication = ({ data }) => (
  <article className="pub-container">
    <header>
      <h4 className="publication">{data.authors}</h4>
      <p className="school">
        <a href={data.link}>{data.title}</a>, {data.venue}
      </p>
    </header>
  </article>
);

Publication.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
