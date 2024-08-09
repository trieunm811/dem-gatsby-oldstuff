import { graphql } from "gatsby";
import * as React from "react";
function HomePage(data) {
  console.log(data);

  return <div className="text-4xl">Hello guys</div>;
}

export default HomePage;

export const query = graphql`
  query Myquery {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    file {
      internal {
        content
      }
    }
  }
`;
