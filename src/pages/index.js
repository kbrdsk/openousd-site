import React from "react"
import { graphql } from "gatsby"
import { Link } from 'gatsby-plugin-intl'
import { RichText } from 'prismic-reactjs';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

import Layout from "../components/layout";
import MuralImage from "../components/mural-image";
import SEO from "../components/seo";
import "../styles/pages/index.scss"

import { Container, Col, Row, Button } from 'react-bootstrap';

const IndexPage = ({data}) => (
  <Layout pageClassName="index-page">
    <SEO title="Home" />

        <div className="hero mx-auto">
            <MuralImage />
            </div>

    <Container>
        <Row className="descriptions justify-content-center">
          <Col xs={11} md={5} className="px-md-5 py-md-4 px-3 py-3">
            {RichText.render(data.prismic.home_page.home_page_card[0].card_heading)}
            {RichText.render(data.prismic.home_page.home_page_card[0].card_content)}
          </Col>

          <Col xs={11} md={5} className="px-md-5 py-md-4 px-3 py-3">
            {RichText.render(data.prismic.home_page.home_page_card[1].card_heading)}
            {RichText.render(data.prismic.home_page.home_page_card[1].card_content)}
            <Link to="/central-programs/">
              <Button
                variant="primary"
                size="lg"
                className="cta"
                onClick={e => trackCustomEvent({category: "Home Card",
                                                action: "Explore Central Programs",
                                                label:" What Are Central Programs?"})}
              >
                {data.prismic.home_page.home_page_card[1].cta_button}
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={11} sm={10} className="mx-auto mt-3">
            {RichText.render(data.prismic.home_page.hero_image_attribution)}
          </Col>
        </Row>
    </Container>
  </Layout>

)

export const query = graphql`
  query HomePageQuery($language: String!) {
    prismic {
      home_page(uid: "index", lang: $language) {
        hero_image_attribution
        home_page_card {
          card_heading
          cta_button
          card_content
        }
      }
    }
  }
`

export default IndexPage
