import React from "react";
import Layout from "../components/layout/layout";
import Title from "../components/title/title";
import Description from "../components/description/description";
import Features from "../components/features/features";
import Price from "../components/price/price";

export default () =>  {
  return (
    <Layout>
      <Title />
      <Description />
      <Features />
      <Price />
    </Layout>
  )
}
