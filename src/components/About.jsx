import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">About Me</h2>
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-5" style={{ textAlign: 'justify' }}>
              <p className="lead">
                 I am an Aspiring Backend Developer with a deep fascination for how complex systems operate behind the scenes. While many start with the visual side of the web, I’ve dedicated my focus to the "hidden" architecture—ensuring that data is secure, APIs are efficient, and the server-side logic is rock solid.
                 
              </p>

              <h4 className="mt-4">Learning Journey</h4>
              <p>
                I’m actively developing my skills through hands-on projects and structured learning programs.  I’m gaining practical experience with essential Development tools and methodologies.
              </p>
              
              
    

              <h4 className="mt-4">Knowledge Sharing</h4>
              <p>
                I document my learning journey and insights on <a href="https://hashnode.com/@aartim" target="_blank" rel="noopener noreferrer"><u>Hashnode</u></a>, sharing practical solutions and challenges encountered in the DevOps space.
              </p>

              {/* <h4 className="mt-4">Interests</h4>
              <p>
                Beyond work, I enjoy exploring emerging technologies, engaging with tech communities, and staying abreast of trends in  development,and cloud computing.
              </p> */}

              <h4 className="mt-4">Let’s Connect</h4>
              <p>
                Feel free to reach out via email at <a href="mailto:mehra11aarti@gmail.com">mehra11aarti@gmail.com</a>.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;