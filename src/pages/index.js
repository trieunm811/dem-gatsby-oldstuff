import { graphql, Link } from "gatsby";
import * as React from "react";
import Header from "../components/Header";
import Homepage from "../containers/Homepage";
import Seo from "../components/Seo";
function HomePage() {
  return (
    <>
      <Header />
      <Homepage />
    </>
  );
}

export const Head = () => <Seo title="Home Page" />;

export default HomePage;
