import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/blog.png';
import projImg2 from '../assets/img/feedback.png';
import projImg3 from '../assets/img/weather.png';
import projImg4 from '../assets/img/booking.png';
import projImg5 from '../assets/img/ecommerce.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'My Blog',
      description: 'This is where I post my web-developer journey',
      imgUrl: projImg1,
      siteUrl: 'https://my-blog-neon-five.vercel.app/',
    },
    {
      title: 'Feedback-app',
      description:
        'This is a feedback component that you can use on other apps',
      imgUrl: projImg2,
      siteUrl: 'https://brent-feedback.netlify.app',
    },
    {
      title: 'Weather-app',
      description:
        'App that gives you back the weather based on the location you type in',
      imgUrl: projImg3,
      siteUrl: 'https://timely-frangipane-caecca.netlify.app',
    },
    {
      title: 'Booking app',
      description: 'Booking.com clone',
      imgUrl: projImg4,
      siteUrl: 'https://cute-squirrel-d4c5f9.netlify.app',
    },
    {
      title: 'E-commerce',
      description: 'This I made for a personal project',
      imgUrl: projImg5,
      siteUrl: 'https://pricecityapp.herokuapp.com/',
    },
  ];

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are a few example projects that I've built thus far for
                    my portfolio. If you want to visit the actual sites just
                    click on one of the projects below.
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='section'>
                        <p>Nothing Here yet!!</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>Nothing Here yet!!</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='background'
      ></img>
    </section>
  );
};
