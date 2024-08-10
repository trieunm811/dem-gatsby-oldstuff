import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Header from "../../components/Header";

function Category({ data }) {
  return (
    <>
      <Header />
      <div className="bg-[#f7f7f7] py-20">
        <div className="flex px-20 py-10 bg-white">
          <div className="mr-10 basis-[15%] border-r-2">
            {data.allPrismicCategory.nodes?.map((item, index) => {
              return (
                <div className="mb-2 ">
                  <Link
                    to={"/category/" + item.uid}
                    className="text-lg font-semibold leading-6 "
                  >
                    {item.data.ten_danh_muc.text}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex basis-[85%] justify-center gap-4">
            {data.allPrismicProduct.nodes?.map((item, index) => {
              return (
                <div>
                  <Link to={"/product/" + item.uid}>
                    <img
                      key={index}
                      src={item.data.anh_san_pham.url}
                      alt={item.data.anh_san_pham.alt}
                      className="object-cover w-96 h-96 "
                    />
                  </Link>
                  <p className="text-xl mt-2">{item.data.ten_san_pham.text}</p>
                  <p className="text-xl">
                    {item.data.gia_tien
                      .toFixed(0)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}{" "}
                    VND
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;

export const query = graphql`
  query categoryDetail($uid: String) {
    prismicCategory(uid: { eq: $uid }) {
      uid
      data {
        ten_danh_muc {
          text
        }
      }
    }
    allPrismicCategory {
      nodes {
        uid
        data {
          ten_danh_muc {
            text
          }
        }
      }
    }
    allPrismicProduct(filter: { data: { category: { uid: { eq: $uid } } } }) {
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
`;
