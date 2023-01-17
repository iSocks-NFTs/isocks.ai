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
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="emailAddress">Email Address</Label>
              <Input
                type="email"
                id="emailAddress"
                value={formData.emailAddress}
                onChange={(e) =>
                  setFormData({ ...formData, emailAddress: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="jobTitle">Job Title</Label>
              <Input
                type="text"
                id="jobTitle"
                value={formData.jobTitle}
                onChange={(e) =>
                  setFormData({ ...formData, jobTitle: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="appName">App Name</Label>
              <Input
                type="text"
                id="appName"
                value={formData.appName}
                onChange={(e) =>
                  setFormData({ ...formData, appName: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="appUrl">App Website URL</Label>
              <Input
                type="url"
                id="appUrl"
                value={formData.appUrl}
                onChange={(e) =>
                  setFormData({ ...formData, appUrl: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="totalUsers">Total Users</Label>
              <Input
                type="number"
                id="totalUsers"
                value={formData.totalUsers}
                min={0}
                onChange={(e) =>
                  setFormData({ ...formData, totalUsers: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="companyType">Type of Company</Label>
              <Input
                type="text"
                id="companyType"
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
