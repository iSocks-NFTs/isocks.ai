import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const SANITY_API_TOKEN = "skcQw4HA8dm4lJEEt5TOnKoIfOk8iwNa8MijufVUOKqGy6eAmm8kiLEDJ8RNwpwYzWk3awIfP4wuM4p5LArGea5AlO74Mc4Zg3LsDlP1Rae5Grw4dPKCBRnjsSoaNQPKYwoGTK39mipzAj1DPOmnvx6B4R3orfMROkDCZfwGTsTrTmwvOGiO";

const PROJECT_ID = "mooac5b3";

export const user = createClient({
  projectId: PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-09-22",
  useCdn: true,
  token: SANITY_API_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const build = imageUrlBuilder(user);

export const urlFor = (source) => build.image(source);
