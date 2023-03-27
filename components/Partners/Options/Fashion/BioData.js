import {
  Form,
  FormGroup,
  FormContainer,
  Input,
  Button,
  ButtonContainer,
  Label,
} from "../../../Form";
import { motion } from "framer-motion";
import Toast from "awesome-toast-component";

export default function BioData({ option, setOption, formData, setFormData }) {
  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function nextForm() {
    const { fullName, brandName, emailAddress } = formData;
    if (fullName === "" || brandName === "" || emailAddress === "") {
      return;
    }
    setOption(3);
  }

  return (
    <motion.div
      className="my-[6.5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center my-3">
        <h3 className="text-3xl font-bold">Hey There</h3>
        <p className="font-thin">We would like to get to know you</p>
      </div>
      <FormContainer>
        <Form>
          <FormGroup>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="emailAddress">Email Address</Label>
            <Input
              type="text"
              id="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="brandName">Brand Name</Label>
            <Input
              type="text"
              id="brandName"
              value={formData.brandName}
              onChange={handleChange}
              required
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
              width="100%"
              onClick={() => setOption(0)}
            >
              Previous
            </Button>
            <Button type="button" width="100%" onClick={nextForm}>
              Next
            </Button>
          </ButtonContainer>
        </Form>
      </FormContainer>
    </motion.div>
  );
}
