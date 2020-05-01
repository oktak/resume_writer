import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Certifications = ({ certification, font }) => (
  <section data-testid="Certification" className="resume-certification">
    <h2 style={{ fontFamily: font }}>
      Certifications
    </h2>
    <hr />
    <ul>
      {certification.map(
        (cert, i) => cert.isVisible !== false && (
        <li key={i}>
          <h3 style={{ fontFamily: font }}>
            {cert.issuedBy}
          </h3>
          {cert.dateFrom && (
          <h3 style={{ fontFamily: font }}>
            {`${cert.dateFrom}${cert.dateTo ? ` - ${cert.dateTo}` : ''}`}
          </h3>
          )}
          <p>{cert.id}</p>
        </li>
        ),
      )}
    </ul>
  </section>
);

Certifications.defaultProps = {
  certification: [],
};

Certifications.propTypes = {
  certification: PropTypes.arrayOf(PropTypes.shape({})),
  font: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  certification: state.resume.certification,
  font: state.tools.font,
});

export default connect(mapStateToProps)(Certifications);
