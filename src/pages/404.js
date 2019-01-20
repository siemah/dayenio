import React from 'react'

import { Link } from 'gatsby'
import { Button, Container } from 'react-materialize'
import Layout from '../components/layout'
import SEO from '../components/seo'

import http404 from '../assets/images/http-404.svg';
import '../assets/css/404.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container className="page-404 center">
      <img src={http404} alt='404 not found' />
      <p>Oops! This page is no longer here.</p>
      <Button id="btn">
        <Link to='/' title="DayenIO home page">
          take me to the home page
        </Link>
      </Button>
    </Container>
  </Layout>
)

export default NotFoundPage