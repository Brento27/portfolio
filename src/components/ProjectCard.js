import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, siteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={siteUrl} target='_blank'>
        <div className='proj-imgbx'>
          <img src={imgUrl} alt='project' />
          <div className='proj-txtx'>
            <h4 style={{ textDecoration: 'none', color: 'white' }}>{title}</h4>
            <span style={{ textDecoration: 'none', color: 'white' }}>
              {description}
            </span>
          </div>
        </div>
      </a>
    </Col>
  );
};
