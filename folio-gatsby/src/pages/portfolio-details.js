import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Contact from "../sections/common/Contact";
import imgWorkCover from "../assets/image/jpg/details/maecover.jpg";
import imgS1 from "../assets/image/jpg/details/details-6.jpg";
import imgS2 from "../assets/image/jpg/details/details-5.jpg";
import imgS3 from "../assets/image/jpg/details/details-4.jpg";
import imgS4 from "../assets/image/jpg/details/details-3.jpg";
import imgS5 from "../assets/image/jpg/details/mae.jpg";
import imgS6 from "../assets/image/jpg/details/mae.jpg";
import { device } from "../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Container
          fluid
          className="px-sm-5"
          css={`
            margin-top: 92px;
          `}
        >
          <img src={imgWorkCover} alt="" className="img-fluid w-100" />
        </Container>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Title variant="secSm" className="my-4">
                  Happy birthday!!.{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  09/04/2021 Guess what day it is.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section mt="22%" bg="dark">
          <Container>
            <Row
              css={`
                margin-top: -40%;
              `}
            >
              <Col xs="12" className="mb-5">
                <img src={imgS5} alt="" className="img-fluid w-100" />
              </Col>
            </Row>
          </Container>
        </Section>
        <Box py={4}>
          <Section className="mt-lg-5">
            <Container>
              <Row>
                <Col lg="8">
                  <Title variant="secSm" className="my-4">
                    You may receive your gift via direct contact{" "}
                  </Title>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  >
                    Or fill in the google form for extra gifts!!.
                  </Text>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  >
                   https://forms.gle/dwTuYtCjUiiqN4hZ7
                  </Text>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  >
                  Essentials gift will arrive at 21.00 tomorrow.
                  </Text>
                </Col>
              </Row>
            </Container>
          </Section>
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
