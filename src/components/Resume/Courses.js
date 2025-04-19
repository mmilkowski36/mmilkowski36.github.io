import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

const Courses = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Publications</h3>
    </div>
    {data.map((course) => (
      <Course data={course} key={course.title} />
    ))}
  </div>
);

Courses.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      authors: PropTypes.string,
      link: PropTypes.string,
      venue: PropTypes.string,
    }),
  ),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
