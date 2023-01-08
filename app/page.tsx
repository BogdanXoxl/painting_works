import type { NextPage } from "next";

import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <Services />
      <WhyUs />
      <Form />
    </>
  );
};

export default Home;
