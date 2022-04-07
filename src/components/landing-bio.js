import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import downloadFile from '../public/static/CV.pdf'
import Button from "../components/btn/btn"
import {  Link } from "gatsby"
import imageQR from "../images/CV.png"
import Img from "gatsby-image"


const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 90vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const CVDo = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`


const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          <CVDo>
          <a href= {downloadFile} target="_blank" rel="noopener noreferrer">
          <img src={imageQR} width="350"
     height="350" alt="CV" />
     </a>
          </CVDo>
          <Description>  <strong><Button href={downloadFile} children="Curriculum Vitae"/>
          </strong>
          </Description>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
