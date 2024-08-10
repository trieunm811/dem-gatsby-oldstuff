import React from "react";
import Header from "../../components/Header";
import { graphql } from "gatsby";

function Product({ data }) {
  console.log(data);

  return (
    <>
      <Header />
      <div className="bg-[#f7f7f7] py-20">
        <div className="flex px-20 py-10 bg-white">
          <div className="flex flex-1 justify-center">
            <img
              src={data.prismicProduct.data.anh_san_pham.url}
              alt={data.prismicProduct.data.anh_san_pham.alt}
              className=" w-96 h-96 ml-40"
            />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-2xl">
              {data.prismicProduct.data.ten_san_pham.text}
            </p>
            <p className="font-semibold text-2xl">
              {data.prismicProduct.data.gia_tien
                .toFixed(0)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
              VND
            </p>
            <button className="bg-black py-3 text-white font-bold rounded-3xl mt-4 w-1/2">
                Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

export const query = graphql`
  query productDetail($uid: String) {
    prismicProduct(uid: { eq: $uid }) {
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
      }
    }
  }
`;
