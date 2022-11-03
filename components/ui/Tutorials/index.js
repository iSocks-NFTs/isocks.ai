import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  Container,
  CardHeader,
  CardHeaderImg,
  CardStack,
  CardText,
  Heading,
  P,
} from "./styles/tutorialStyles";
import { Card } from "./styles/tutorialStyles";

const Tutorial = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Heading>Tutorials</Heading>
          <P>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
            aliquam mattis in vitae.
          </P>
        </Col>
      </Row>
      <CardStack>
        <Card>
          <CardHeaderImg src="/img/tutorials/binance.png" alt="Binance" />
          <CardHeader>Buy on binance</CardHeader>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardText>
        </Card>
        <Card>
          <CardHeaderImg src="/img/tutorials/binance.png" alt="Binance" />
          <CardHeader>Buy on binance</CardHeader>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardText>
        </Card>
        <Card>
          <CardHeaderImg src="/img/tutorials/binance.png" alt="Binance" />
          <CardHeader>Buy on binance</CardHeader>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardText>
        </Card>
        <Card>
          <CardHeaderImg src="/img/tutorials/binance.png" alt="Binance" />
          <CardHeader>Buy on binance</CardHeader>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardText>
        </Card>
        <Card>
          <CardHeaderImg src="/img/tutorials/binance.png" alt="Binance" />
          <CardHeader>Buy on binance</CardHeader>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardText>
        </Card>
        <Card>
          <CardHeaderImg src="/img/tutorials/binance.png" alt="Binance" />
          <CardHeader>Buy on binance</CardHeader>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CardText>
        </Card>
      </CardStack>
    </Container>
  );
};

export default Tutorial;
