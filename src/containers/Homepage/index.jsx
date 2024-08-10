import React, { useRef, useState } from "react";
import BannerHomepage from "./Banner";
import MiddleContent from "./MiddleContent";
import { graphql } from "gatsby";

function Home() {

  return (
    <div>
      <BannerHomepage />
      <MiddleContent />
    </div>
  );
}

export default Home;


