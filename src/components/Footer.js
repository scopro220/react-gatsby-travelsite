import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
  IoLogoTwitter,
} from "react-icons/io"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDescription>
          <h1>TRVLR</h1>
          <p>We strive to create the best experience for our customers</p>
        </FooterDescription>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/about">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destinations</FooterLink>
          <FooterLink to="/">Sponsorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Videos</FooterLinkTitle>
          <FooterLink to="/about">Submit Video</FooterLink>
          <FooterLink to="/">Ambassadors</FooterLink>
          <FooterLink to="/">Agency</FooterLink>
          <FooterLink to="/">Influencer</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/about">
            <IoLogoInstagram size={20} />
          </FooterLink>
          <FooterLink to="/">
            <IoLogoFacebook size={20} />
          </FooterLink>
          <FooterLink to="/">
            <IoLogoYoutube size={20} />
          </FooterLink>
          <FooterLink to="/">
            <IoLogoTwitter size={20} />
          </FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background-color: #fafafb;
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterDescription = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
