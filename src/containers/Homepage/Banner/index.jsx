import React from "react";
import { motion } from "framer-motion";
import Banner from "../../../assets/banner.jpg";
import Banner1 from "../../../assets/oldstuff-jacket.jpg";
import Banner2 from "../../../assets/oldstuff-kakipain.jpg";
import Banner3 from "../../../assets/oldstuff-jeanjacket.jpg";
import {
  FacebookFilled,
  FacebookOutlined,
  InstagramFilled,
  InstagramOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Carousel } from "antd";
import { StaticImage } from "gatsby-plugin-image";
function BannerHomepage() {
  return (
    <div className="mx-10">
      <StaticImage
        src="../../../assets/banner.jpg"
        alt="banner"
        className="w-full lg:h-[550px] h-[150px] object-cover"
      />
    </div>
  );
}

export default BannerHomepage;
