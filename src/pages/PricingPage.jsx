import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import LogoCloud from '../components/LogoCloud';
import tick from '../assets/Tick.png';

const PricingPage = () => {
  const pageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Inter, system-ui, sans-serif',
  };

  const headerStyle = {
    padding: '120px 0 80px',
    textAlign: 'center',
  };

  const h1Style = {
    fontSize: '56px',
    fontWeight: 600,
    marginBottom: '20px',
  };

  const subtitleStyle = {
    fontSize: '21px',
    color: '#b3b3b3',
    maxWidth: '550px',
    margin: '0 auto',
  };

  const getCardStyle = (index, highlighted) => {
    const style = {
      backgroundColor: '#0a0a0a',
      border: '1px solid #222',
      borderRadius: '0',
      padding: '20px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    };

    if (index === 0) {
      style.borderTopLeftRadius = '12px';
      style.borderBottomLeftRadius = '12px';
    } else {
      style.borderLeft = 'none';
    }

    if (index === plans.length - 1) {
      style.borderTopRightRadius = '12px';
      style.borderBottomRightRadius = '12px';
    }

    if (highlighted) {
      return {
        ...style,
        border: '1px solid #fff',
        transform: 'scale(1.05)',
        zIndex: 1,
        borderRadius: '12px',
      };
    }

    return style;
  };

  const planNameStyle = {
    fontSize: '1.1rem',
    fontWeight: 500,
  };

  const priceStyle = {
    fontSize: '1.6rem',
    fontWeight: 600,
    margin: '8px 0',
  };

  const priceMutedStyle = {
    fontSize: '0.8rem',
    color: '#888',
  };

  const featureListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: '20px 0',
    flexGrow: 1,
  };

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
    fontSize: '0.8rem',
  };

  const tickStyle = {
    width: '16px',
    marginRight: '10px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '8px',
    fontWeight: 500,
    fontSize: '0.8rem',
  };

  const plans = [
    {
      name: 'Free',
      price: '$0',
      priceInfo: 'Free for everyone',
      features: [
        'Unlimited members',
        '2 teams',
        '250 issues',
        'Slack and GitHub',
        'API access',
      ],
      buttonText: 'Get started',
      variant: 'dark',
    },
    {
      name: 'Basic',
      price: 'US$8',
      priceInfo: 'per user/month',
      billedYearly: true,
      features: [
        'All Free features +',
        '5 teams',
        'Unlimited issues',
        'Unlimited file uploads',
        'Admin roles',
      ],
      buttonText: 'Get started',
      variant: 'dark',
    },
    {
      name: 'Business',
      price: 'US$14',
      priceInfo: 'per user/month',
      billedYearly: true,
      features: [
        'All Basic features +',
        'Linear Asks',
        'Unlimited teams',
        'Private teams and guests',
        'Linear Insights',
        'Triage responsibility',
        'Zendesk and Intercom integrations',
      ],
      buttonText: 'Get started',
      variant: 'light',
      highlighted: true,
      contactSales: true,
    },
    {
      name: 'Enterprise',
      price: 'Contact us',
      priceInfo: 'Annual billing only',
      features: [
        'All Business features +',
        'Advanced Linear Asks',
        'Issue SLAs',
        'SAML and SCIM',
        'Advanced security',
        'Migration and onboarding support',
      ],
      buttonText: 'Request trial',
      variant: 'dark',
    },
  ];

  return (
    <div style={pageStyle}>
      <AppNavbar />
      <Container>
        <header style={headerStyle}>
          <h1 style={h1Style}>Pricing</h1>
          <p style={subtitleStyle}>
            Use Linear for free with your whole team. Upgrade to enable unlimited issues, enhanced security controls, and additional features.
          </p>
        </header>
        <div style={{ width: '1024px', height: '555.91px', margin: '0 auto', display: 'flex' }}>
          {plans.map((plan, index) => (
            <Col md={3} key={index} style={{ display: 'flex' }}>
              <Card style={getCardStyle(index, plan.highlighted)}>
                <Card.Body className="d-flex flex-column">
                  <div style={planNameStyle}>{plan.name}</div>
                  <div style={priceStyle}>{plan.price}</div>
                  <div style={priceMutedStyle}>{plan.priceInfo}</div>
                  {plan.billedYearly && (
                    <div className="d-flex align-items-center my-2">
                      <Form.Check type="switch" id={`billed-yearly-${index}`} defaultChecked />
                      <span className="ms-2" style={{ fontSize: '0.8rem' }}>Billed yearly</span>
                    </div>
                  )}
                  <hr style={{ borderColor: '#333' }} />
                  <ul style={featureListStyle}>
                    {plan.features.map((feature, i) => (
                      <li key={i} style={featureItemStyle}>
                        <img src={tick} alt="tick" style={tickStyle} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button variant={plan.variant} style={buttonStyle}>{plan.buttonText}</Button>
                    {plan.contactSales && <div className="text-center mt-2"><a href="#" style={{ color: '#888', fontSize: '0.7rem' }}>or contact sales</a></div>}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </div>
      </Container>
      <LogoCloud />
      <Footer />
    </div>
  );
};

export default PricingPage;
