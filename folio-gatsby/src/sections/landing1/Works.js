import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section, Box, ListNav } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { designWorks1 } from "../../data";

const Works = () => {
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  useEffect(() => {
    setItems(designWorks1);
  }, []);

  const filterBy = (cat) => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(designWorks1);
    } else {
      const filteredItems = designWorks1.filter((item) => {
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Box mb="2.5rem" ml="-1.75rem">
            <ListNav className="nav">
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "*" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("*");
                  }}
                >
                  This is your Birthday !
                </a>
              </li>
            </ListNav>
          </Box>
        </Container>
        <Container fluid>
          <Masonry
            options={masonryOptions}
            className={"masonry-grid row"} // default ''
          >
            {items.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="filtr-item">
                <WorkCard workItem={item} mb="30px" link={item.link} />
              </Col>
            ))}
          </Masonry>
        </Container>
      </Section>
    </>
  );
};

export default Works;
