import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Heading,
  P,
  Container,
  Point,
  Box,
  PointHeaderText,
  PointHeaderBody,
  PointImage,
  TimeStamp,
} from "./RoadmapStyles";

const Roadmap = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Heading>Where are we going?</Heading>
          <P>Our Roadmap is our North Star</P>
        </Col>
      </Row>
      <Row>
        <Point>
          <Box>
            <PointHeaderText>Sweater</PointHeaderText>
            <PointHeaderBody>
              NFwear Concept ideation, Team members Assembling, Reserch,
              Website/Product <br /> demo.
            </PointHeaderBody>
            <TimeStamp>Q1, 2022</TimeStamp>
          </Box>
          <PointImage alt="iSocks Sweater" src="/img/roadmap/sweater.svg" />
        </Point>
        <Point flexDirectionMobile="column-reverse">
          <PointImage alt="iSocks Beanie" src="/img/roadmap/beanie.png" />
          <Box>
            <PointHeaderText>Beanie</PointHeaderText>
            <PointHeaderBody>
              Social media presence, iSocks NFT whitelist, community
              collaboration,Marketing, Physical isocks production.
            </PointHeaderBody>
            <TimeStamp>Q2, 2022</TimeStamp>
          </Box>
        </Point>
        <Point>
          <Box>
            <PointHeaderText>Scarf</PointHeaderText>
            <PointHeaderBody>
              AR/website full launch, Utility Announcement, Smart contract
              Development, platform integration, iSocks listing date on Binance.
            </PointHeaderBody>
            <div>
              <TimeStamp>Q3/Q4, 2023</TimeStamp>{" "}
            </div>
          </Box>
          <PointImage alt="iSocks Sweater" src="/img/roadmap/scarf.png" />
        </Point>
        <Point flexDirectionMobile="column-reverse">
          <PointImage alt="iSocks Sweater" src="/img/roadmap/socks.png" />
          <Box>
            <PointHeaderText>Socks</PointHeaderText>
            <PointHeaderBody>
              NFT full launch on Binance. Physical isocks redeeming/Distribution
              date, iSocks holders undergroud party announcement.
            </PointHeaderBody>
            <TimeStamp>Q1, 2023</TimeStamp>
            <PointHeaderBody>
              iSocks DAO launch, isocks token launch, isocks mint0.12. NFwear
              mobile app launch.
            </PointHeaderBody>
            <TimeStamp width="25%">Q3, 2023</TimeStamp>
          </Box>
        </Point>
      </Row>
    </Container>
  );
};

export default Roadmap;
