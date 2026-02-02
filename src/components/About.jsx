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
                Hello! I’m Aarti Mehra, a passionate and dedicated DevOps enthusiast committed to mastering the art of seamless software delivery and infrastructure management.
              </p>

              <h4 className="mt-4">Learning Journey</h4>
              <p>
                My journey into DevOps began with a fascination for automation and efficiency in software development. Over the years, I have immersed myself in learning various tools and practices that enhance collaboration between development and operations teams.
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