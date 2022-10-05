import {
  ArrowRight,
  Container,
  Heading,
  P,
  StageContainer,
  Stage,
  StageItems,
  FormContainer,
  FormGroup,
  CheckBoxContainer,
  Label,
  CheckBox,
  Form,
  Input,
  Button
} from "./style";
import { Row, Col } from "react-bootstrap";

const VerifyComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Heading>Verify iSocks</Heading>
          <P>
            You'll need to complete the form below in order to redeem your
            socks.
          </P>
        </Col>
        <Col>
          <StageContainer>
            <StageItems>
              <Stage>First Stage</Stage>
              <ArrowRight
                src="img\icons\double_right_arrow.svg"
                alt="arrow_right"
              />
              <Stage color="var(--subtle-text)">Second Stage</Stage>
              <ArrowRight
                src="img\icons\double_right_arrow_faded.svg"
                alt="arrow_right"
              />
              <Stage color="var(--subtle-text)">Third Stage</Stage>
              <ArrowRight
                src="img\icons\double_right_arrow_faded.svg"
                alt="arrow_right"
              />
              <Stage color="var(--subtle-text)">Fourth Stage</Stage>
            </StageItems>
          </StageContainer>
        </Col>
        <FormContainer>
          <Form>
            <CheckBoxContainer>
              <CheckBox type="checkbox" id="check" />
              <Label htmlfor="check">I'm a vendor</Label>
            </CheckBoxContainer>
            <FormGroup>
              <Label htmlFor="vendorCode" fontWeight="400" color="var(--subtle-text)">
                Vendor Code
              </Label>
              <Input type="text" placeholder="Enter vendor code if you are a vendor" />
            </FormGroup>
            <CheckBoxContainer>
              <CheckBox type="checkbox" id="check" />
              <Label htmlfor="check">I'm not a vendor (I bought the NFT by myself)</Label>
            </CheckBoxContainer>
            <Button>Continue</Button>
          </Form>
        </FormContainer>
      </Row>
    </Container>
  );
};

export default VerifyComponent;
