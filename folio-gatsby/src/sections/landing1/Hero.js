import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgL from "../../assets/image/png/portrait-1.png";

const ImgRight = styled.img`
  max-width: 100%;
  border-radius: 25%;
  transition: 0.4s;
  &:hover {
    transform: scale(0.8) rotate(-16deg);
    box-shadow: 0 32px 74px rgba(68, 77, 136, 0.2);
  }
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="7" className="mb-5 mb-lg-0">
              <Box>
                <Text
                  variant="tag"
                  mb={4}
                  className="text-uppercase"
                  color="heading"
                  mb="40px"
                >
                  Welcome
                </Text>
                <Title variant="hero">Ariya Ariyachotima</Title>
                <Text pb="1.875rem" pt="1.25rem" color="heading">
                 Currently studying in Chulalongkorn University.<br/>
                 Faculty of Architecture<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;• Passionist<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;• Self-Driven<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;• Productive<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;• Hard-Working<br/>
                </Text>
                <Title variant="hero"> 1st Anniversary</Title>

                <Box mt="52px">
                  <Link
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <Button arrowRight>See my Works</Button>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col lg="5" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  <ImgRight src={imgL} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
