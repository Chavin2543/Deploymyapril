import React, { useState, useEffect } from "react";
import { Container, Col , Row } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section, Box, ListNav, Title } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { designWorks1 } from "../../data";
const mystyle = {
  color: "red",
};
const Gifts = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col lg="7" className="mb-5 mb-lg-0">
          <Box>
            <Title background="blue" color="red"variant="herobig">Not your Birthday Yet! :)</Title>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default Gifts;
