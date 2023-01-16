import React from "react";
import { Heading, P } from "../Roadmap/RoadmapStyles";
import { Container } from "./style";
import { Form, FormContainer, Button, FormGroup, Input, Label } from "../Form";
import axios from "../../pages/api/axios";

export default function Page() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    emailAddress: "",
    jobTitle: "",
    appName: "",
    appUrl: "",
    totalUsers: 0,
    companyType: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("/api/partner", {
      ...formData,
    });
  }

  return (
    <div style={{ padding: "2rem 0" }}>
      <Heading>Looking to Partner Up?</Heading>
      <P>
        Before we begin, please provide a brief overview of your business so we
        can make the most of our conversation.
      </P>
      <Container>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Full Name</Label>
              <Input
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Email Address</Label>
              <Input
                type="email"
                value={formData.emailAddress}
                onChange={(e) =>
                  setFormData({ ...formData, emailAddress: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Job Title</Label>
              <Input
                type="text"
                value={formData.jobTitle}
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>App Name</Label>
              <Input
                type="text"
                value={formData.appName}
                onChange={(e) =>
                  setFormData({ ...formData, appName: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>App Website URL</Label>
              <Input
                type="url"
                value={formData.appUrl}
                onChange={(e) =>
                  setFormData({ ...formData, appUrl: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Total Users</Label>
              <Input
                type="number"
                value={formData.totalUsers}
                min={0}
                onChange={(e) =>
                  setFormData({ ...formData, totalUsers: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Type of Company</Label>
              <Input
                type="text"
                value={formData.companyType}
                onChange={(e) =>
                  setFormData({ ...formData, companyType: e.target.value })
                }
                required
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </FormContainer>
      </Container>
    </div>
  );
}
