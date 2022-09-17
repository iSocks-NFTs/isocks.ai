import React from "react";
import { Button, Container, FormContainer, Heading, Form,Input} from "./subscribeStyles";
import { Row, Col } from "react-bootstrap";

const Subscribe = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Heading>Subscribe to iSocks</Heading>
        </Col>
        <Col>
            <FormContainer>
                <Form>
                    <Input type="text" placeholder="Enter your mail" />
                    <Button>Subscribe</Button>
                </Form>
            </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;
