import React from 'react'

import { Link } from 'gatsby'
import { Button, Container } from 'react-materialize'
import Layout from '../components/layout'
import SEO from '../components/seo'

import high5 from '../assets/images/high-five.svg';
import '../assets/css/404.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Form submited with success" />
    <Container className="page-404 success-form center">
      <img src={high5} alt='five hands' />
      <p>Thank you for contacting us. We will reply you very soon, have a nice day.</p>
      <Button id="btn">
        <Link to='/' title="DayenIO home page">
          take me to the home page
        </Link>
      </Button>
    </Container>
  </Layout>
)

export default NotFoundPage
