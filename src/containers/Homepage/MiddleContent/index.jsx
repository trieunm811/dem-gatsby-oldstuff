import React from "react";
import Carousel from "react-grid-carousel";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link, useStaticQuery } from "gatsby";

function MiddleContent() {
  const data = useStaticQuery(graphql`
    query {
      allPrismicProduct {
        nodes {
          uid
          data {
            anh_san_pham {
              url
              alt
            }
            gia_tien
            mo_ta {
              text
            }
            ten_san_pham {
              text
            }
            category {
              document {
                ... on PrismicCategory {
                  data {
                    ten_danh_muc {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);

  return (
    <>
      <div className=" lg:px-40 py-8">
        <h2 className="text-center text-6xl font-black text-black mb-4 w-full">
          OLD BUT GOOD
        </h2>
        <h3 className="text-center text-xl font-normal text-black mb-8 w-full">
          Tự tin đem đến những món đồ second hand mang nhiều giá trị thương
          hiệu, tinh thần và nghệ thuật
        </h3>
      </div>
      <div className="">
        <h2 className="px-10 mb-4 text-2xl font-medium">Sản Phẩm Nổi Bật</h2>
        <div className="px-5">
          <Carousel cols={3} rows={1} gap={10}>
            {data.allPrismicProduct.nodes?.map((item, index) => {
              return (
                <Carousel.Item>
                  <Link to={'/product/' + item.uid}>
                    <img
                      key={index}
                      src={item.data.anh_san_pham.url}
                      alt={item.data.anh_san_pham.alt}
                      className="object-cover w-full h-[500px] "
                    />
                  </Link>
                  <p className="text-xl mt-2">{item.data.ten_san_pham.text}</p>
                  <p className="text-xl">
                    {item.data.gia_tien
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "}
                    VND
                  </p>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default MiddleContent;
