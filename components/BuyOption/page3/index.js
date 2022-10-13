import { Row, Col } from "react-bootstrap";
import { Container, Heading, P } from "../style";
import {
  Form,
  FormContainer,
  Input,
  Button,
  FormGroup,
  Label,
  ButtonContainer,
  Icon
} from "../../Form";
import { motion } from "framer-motion";

const Step3 = ({ page, setPage, formData, setFormData }) => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Row>
        <Col>
          <Heading>Vendor</Heading>
          <P>
            iSocks risk Management to reduce your trading risk, the verified
            advertiser has already paid a deposit as collateral.
          </P>
        </Col>
      </Row>
      <FormContainer>
        <Form>
          <FormGroup>
            <Label fontWeight="400" htmlFor="emailAddress">
              Email
            </Label>
            <Input
              type="emailAddress"
              name="emailAddress"
              id="emailAddress"
              value={formData.emailAddress}
              onChange={(e) =>
                setFormData({ ...formData, emailAddress: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label fontWeight="400" htmlFor="phoneNumber">
              Phone Number
            </Label>
            <Input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <Label fontWeight="400" htmlFor="walletAddress">
              Wallet Address Used in purchase
            </Label>
            <Input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
          </FormGroup>

          <ButtonContainer>
            <Button
              type="button"
              color="var(--primary-brand)"
              borderColor="#E3E5E8"
              backgroundColor="transparent"
              hoverBorderColor="#fff"
              hoverBackgroundColor="#E3E5E8"
              onClick={() => setPage(page - 1)}
              width="100%"
            >
              Previous
            </Button>
            <Button
              type="button"
              width="100%"
              onClick={() => setPage(page + 1)}
            >
              Continue
            </Button>
          </ButtonContainer>
          <FormGroup flexDirection="row">
            <Icon src="/img/icons/info-circle.svg" alt="info circle" />
            <span>
              You will need a wallet in order to buy  from a<br /> vendor know more
              here.
            </span>
          </FormGroup>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Step3;
