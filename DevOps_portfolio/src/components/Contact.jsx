import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { sendEmail } from '../services/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = await sendEmail(formData);
    
    if (result.success) {
      setAlertVariant('success');
      setAlertMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setAlertVariant('danger');
      setAlertMessage('Failed to send message. Please try again.');
    }
    
    setIsSubmitting(false);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Container className="section">
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title"></h2>
        </Col>
      </Row>

      <Row>
        <Col lg={5} className="mb-4 mb-lg-0">
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="p-4">
              <h3 className="mb-4">Contact Information</h3>

              <div className="d-flex align-items-center mb-4">
                <FaEnvelope className="me-3 text-primary" size={24} />
                <div>
                  <h5 className="mb-0">Email</h5>
                  <p className="mb-0">
                    <a href="mailto:mehra11aarti@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                      mehra11aarti@gmail.com
                    </a>
                  </p>
                </div>

              </div>

              <div className="d-flex align-items-center mb-4">
                <FaLinkedin className="me-3 text-primary" size={24} />
                <div>
                  <h5 className="mb-0">LinkedIn</h5>
                  <p className="mb-0">
                    <a href="https://www.linkedin.com/in/aarti-mehra-2b6331263/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/aarti-mehra-2b6331263
                    </a>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <FaGithub className="me-3 text-primary" size={24} />
                <div>
                  <h5 className="mb-0">GitHub</h5>
                  <p className="mb-0">
                    <a href="https://github.com/Aartimehr" target="_blank" rel="noopener noreferrer">
                      github.com/Aartimehr
                    </a>
                  </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;