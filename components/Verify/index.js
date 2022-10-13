import React,{useState} from "react";
import {
  ArrowRight,
  Container,
  Heading,
  P,
  StageContainer,
  Stage,
  StageItems,
} from "./style";
import { Row, Col } from "react-bootstrap";
import Step1 from "./page1";
import Step2 from "./page2";
import Step3 from "./page3";
import Step4 from "./page4";

const VerifyComponent = () => {
  const [page,setPage] = useState(0);
  const [formData,setFormData] = useState({
    isVendor:false,
    vendorCode:'',
    emailAddress:'',
    firstName:'',
    lastName:'',
    countryOfResidence:'',
    nationality:'',
    username:'',
    UdDomainUsername:''
  })


  const componentList = [
    <Step1 key={1} page={page} setPage={setPage} formData={formData} setFormData={setFormData} />,
    <Step2 key={2} page={page} setPage={setPage} formData={formData} setFormData={setFormData} />,
    <Step3 key={3} page={page} setPage={setPage} formData={formData} setFormData={setFormData} />,
    <Step4 key={4} page={page} setPage={setPage} formData={formData} setFormData={setFormData} />,
  ];

  return (
    <Container>
      <Row>
        <Col>
          <Heading>Verify iSocks</Heading>
          <P>
            You&apos;ll need to complete the form below in order to redeem your
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
              <Stage color={page > 0 ? "var(--primary-brand)" : "var(--subtle-text)"}>Second Stage</Stage>
              <ArrowRight
                src={page > 0 ? "/img/icons/double_right_arrow.svg" : "/img/icons/double_right_arrow_faded.svg"}
                alt="arrow_right"
              />
              <Stage color={page > 1 ? "var(--primary-brand)" : "var(--subtle-text)"} >Third Stage</Stage>
              <ArrowRight
                src={page > 1 ? "/img/icons/double_right_arrow.svg" : "/img/icons/double_right_arrow_faded.svg"}
                alt="arrow_right"
              />
              <Stage color={page > 2 ? "var(--primary-brand)" : "var(--subtle-text)" } >Fourth Stage</Stage>
            </StageItems>
          </StageContainer>
        </Col>
        {componentList[page]}
      </Row>
    </Container>
  );
};

export default VerifyComponent;
