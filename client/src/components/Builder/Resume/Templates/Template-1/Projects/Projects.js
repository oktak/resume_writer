import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Projects = ({ projects, font }) => (
  <section data-testid="Projects" className="resume-projects">
    <h2 style={{ fontFamily: font }}>
      Projects
    </h2>
    <hr />
    <ul>
      {projects.map(
        (project, i) => project.isVisible !== false && (
        <li key={i}>
          <h3 style={{ fontFamily: font }}>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          {project.dateFrom && (
          <h3 style={{ fontFamily: font }}>
            {`${project.dateFrom}${project.dateTo ? ` - ${project.dateTo}` : ''}`}
          </h3>
          )}
          <em>{project.teamBrief}</em>
          <ul>
            {project.details.map(
              (detail, i) => detail && (
              <li key={i}>
                {detail.search('http') > -1 ? (
                  <a href={detail} target="_blank" rel="noopener noreferrer">
                    {detail}
                  </a>
                ) : (
                  detail
                )}
              </li>
              ),
            )}
          </ul>
        </li>
        ),
      )}
    </ul>
  </section>
);

Projects.defaultProps = {
  projects: [],
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})),
  font: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  projects: state.resume.projects,
  font: state.tools.font,
});

export default connect(mapStateToProps)(Projects);
