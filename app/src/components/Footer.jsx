import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Img,
  Last,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Company</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">Partner with PharmEasy</FooterLink>
            <FooterLink href="#">Sell at PharmEasy</FooterLink>

            <Heading>Our Services</Heading>
            <FooterLink href="#">Order Medicine</FooterLink>
            <FooterLink href="#">Healthcare Products</FooterLink>
            <FooterLink href="#">Lab Tests</FooterLink>
            <FooterLink href="#">Find Nearest Collection Centre</FooterLink>
          </Column>
          <Column>
            <Heading>Featured Categories</Heading>
            <FooterLink href="#">Personal Care</FooterLink>
            <FooterLink href="#">Health Food and Drinks</FooterLink>
            <FooterLink href="#">Skin Care</FooterLink>
            <FooterLink href="#">Home Care</FooterLink>
            <FooterLink href="#">Ayurvedic Care</FooterLink>
            <FooterLink href="#">Sexual Wellness</FooterLink>
            <FooterLink href="#">Fitness & Supplements</FooterLink>
            <FooterLink href="#">Mother and Baby Care</FooterLink>
            <FooterLink href="#">Healthcare Devices</FooterLink>
            <FooterLink href="#">Surgicals and Dressings</FooterLink>
            <FooterLink href="#">Covid Essentials</FooterLink>
            <FooterLink href="#">Health Condition</FooterLink>
            <FooterLink href="#">Diabetic Care</FooterLink>
            <FooterLink href="#">Elderly Care</FooterLink>
            <FooterLink href="#">Accessories And Wearables</FooterLink>
            <FooterLink href="#">Pet Care</FooterLink>
          </Column>
          <Column>
            <Heading>Need Help</Heading>
            <FooterLink href="#">Browse All Medicines</FooterLink>
            <FooterLink href="#">Browse All Molecules</FooterLink>
            <FooterLink href="#">Browse All Cities & Areas</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>

            <Heading>Policy Info</Heading>
            <FooterLink href="#">Editorial Policy</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Vulnerability Disclosure Policy</FooterLink>
            <FooterLink href="#">Terms and Conditions</FooterLink>
            <FooterLink href="#">Customer Support Policy</FooterLink>
            <FooterLink href="#">Return Policy</FooterLink>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <div style={{ display: "flex", gap: "10px" }}>
              <FooterLink
                href="https://www.instagram.com/pharmeasyapp/"
                target="_blank"
              >
                <Img
                  src="https://i.pinimg.com/originals/a1/18/56/a118569459e06a7cc0ad600f446da998.png"
                  style={{
                    borderRadius: "50%",
                    width: "40px",
                  }}
                  alt=""
                />
              </FooterLink>

              <FooterLink
                href="https://www.facebook.com/pharmeasy/"
                target="_blank"
              >
                <img
                  src="https://th.bing.com/th/id/OIP.Fc2P6fxc_shBvBPs_hd7MgAAAA?pid=ImgDet&rs=1"
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                  }}
                />
              </FooterLink>

              <FooterLink
                href="https://www.youtube.com/channel/UCDats_DLX-bGZH3-KGu8JhA"
                target="_blank"
              >
                <img
                  src="https://th.bing.com/th/id/OIP.1hX8tUyNC8XTZ8u6BLuGEAHaHa?pid=ImgDet&rs=1"
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                  }}
                />
              </FooterLink>

              <FooterLink
                href="https://twitter.com/pharmeasyapp/"
                target="_blank"
              >
                <img
                  src="https://th.bing.com/th/id/OIP.y9PZFJdx7Fu_09ajK_45NgHaGh?pid=ImgDet&rs=1"
                  alt=""
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                  }}
                />
              </FooterLink>
            </div>
          </Column>
        </Row>
      </Container>

      <div style={{ paddingBottom: "80px" }}>
        <p style={{ marginLeft: "30px",marginTop:"20px" }}>Our Payment Partners</p>
        <Last
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: "30px" }}>
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/af0c6812.svg"
              alt=""
              style={{ width: "70px" }}
            />
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/0e010044.svg"
              alt=""
              style={{ width: "70px" }}
            />
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/1066bb1f.svg"
              alt=""
              style={{ width: "50px" }}
            />
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/3a1a533d.svg"
              alt=""
              style={{ width: "40px" }}
            />
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/fbea1701.svg"
              alt=""
              style={{ width: "50px" }}
            />
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/4733a49d.svg"
              alt=""
              style={{ width: "45px" }}
            />
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/b278e536.svg"
              alt=""
              style={{ width: "50px" }}
            />
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/0aca2077.svg"
              alt=""
              style={{ width: "55px" }}
            />
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/44a51ca5.svg"
              alt=""
              style={{ width: "55px" }}
            />
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/d058b00d.svg"
              alt=""
              style={{ width: "70px" }}
            />
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/e9445364.svg"
              alt=""
              style={{ width: "70px" }}
            />
            <img
              src="https://assets.pharmeasy.in/web-assets/dist/6e09c713.svg"
              alt=""
              style={{ width: "50px" }}
            />
          </div>
          <p style={{ marginRight: "30px" }}>
            © 2022 PharmEasy. All Rights Reserved
          </p>
        </Last>
      </div>
    </Box>
  );
};
export default Footer;
