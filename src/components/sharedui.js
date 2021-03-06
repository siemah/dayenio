import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Button, Chip } from 'react-materialize';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export const LinkItem = ({ containerClass, to, labelId = null, label, alt, className, Children, ...props }) => {
  to = typeof to === 'string' && to[0] !== '/'
    ? `/${to}`
    : to;
  to = to.replace('//', '/');

  return (
    <li className={containerClass || ''}>
      {
        <Link to={to} alt={alt || ''} className={className} {...props}>
          {
            labelId !== null ?
              <FormattedMessage id={labelId} /> :
              label
          }
        </Link>
      }
    </li>
  )
}

export const SocialContactItem = ({ className, href, label, alt, source }) => (
  <li className={className}>
    <a href={href} title={label || ''} >
      <img src={source} alt={alt || ''} />
    </a>
  </li>
);


export const CaseItem = ({ right = false, caseImg, caseImgAlt, logo, altLogo, brand, caseDescription, link = null, linkLabel = '', techs = [], carouselImages = null, ...props }) => {
  let getImage = carouselImages ?
    <Carousel autoPlay={true} showIndicators={false} interval={3000} infiniteLoop={true} dynamicHeight={false}>
      {
        carouselImages.map(img => {
          return (
            <div key={img.src}>
              <img src={img.src} alt={img.alt} />
            </div>
          )
        })
      }
    </Carousel> :
    <img src={caseImg} alt={caseImgAlt} />
  return (
    <Row className='media-container custom-container'>

      {
        right ?
          (
            <>
              <Col m={12} l={6}>

                <div className="case-logo">
                  <img src={logo} height={70} alt={altLogo} />
                </div>

                <div className="case-description">
                  <h4>{brand}</h4>
                  <p>{caseDescription}</p>
                  <div className="case-action">
                    {
                      link &&
                      <Button>
                        <a href={`//${link}`} target='_blanck' >{linkLabel || link}</a>
                      </Button>
                    }
                    <div style={{ marginBottom: '10px' }} />
                    <div>
                      {
                        techs.map(tech =>
                          <Chip key={tech}>{tech}</Chip>
                        )
                      }
                    </div>
                  </div>
                </div>

              </Col>
              <Col m={12} l={6}>
                {getImage}
              </Col>
            </>
          ) :
          (
            <>
              <Col m={12} l={6}>

                {getImage}

              </Col>

              <Col m={12} l={6}>

                <div className="case-logo">
                  <img src={logo} height={70} alt={altLogo} />
                </div>

                <div className="case-description">
                  <h4>{brand}</h4>
                  <p>{caseDescription}</p>
                  <div className="case-action">
                    {
                      link &&
                      <Button>
                        <a href={`//${link}`} target='_blanck' >{linkLabel || link}</a>
                      </Button>
                    }
                    <div style={{ marginBottom: '10px' }} />
                    <div>
                      {
                        techs.map(tech =>
                          <Chip key={tech}>{tech}</Chip>
                        )
                      }
                    </div>
                  </div>
                </div>

              </Col>

            </>
          )
      }


    </Row>

  )
}
