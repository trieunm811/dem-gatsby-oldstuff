/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  Affix,
  Badge,
  Drawer,
  Input,
  Dropdown,
  Menu,
  ConfigProvider,
} from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { graphql, Link, useStaticQuery } from "gatsby";

function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const data = useStaticQuery(graphql`
    query {
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
    }
  `);
  console.log(data);
  return (
    <>
      <div className="bg-white">
        <div className="flex lg:items-center lg:justify-center py-4 font-bold">
          <div className="flex lg:flex-1">
            <h1 className="text-2xl font-black text-black ml-8 lg:ml-10">
              <Link to="/"> OLDSTUFF</Link>
            </h1>
          </div>
          <div className="flex flex-1 justify-end items-center lg:hidden pr-8">
            <MenuOutlined
              style={{ fontSize: "1.5rem" }}
              onClick={showDrawer}
              aria-hidden="true"
            />
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-8 text-black">
            {data.allPrismicCategory.nodes?.map((item, index) => {
              return (
                <Link
                  to={"/category/" + item.uid}
                  className="text-lg font-semibold leading-6 "
                >
                  {item.data.ten_danh_muc.text}
                </Link>
              );
            })}
            <Link to="#" className="text-lg font-semibold leading-6 ">
              Men
            </Link>
            {/* <a href="#" className="text-lg font-semibold leading-6 ">
              Women
            </a>
            <a href="#" className="text-lg font-semibold leading-6 ">
              Kid
            </a>
            <a href="#" className="text-lg font-semibold leading-6 ">
              Sale
            </a>
            <a href="#" className="text-lg font-semibold leading-6 ">
              New & Features
            </a> */}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4 mr-2">
            <ConfigProvider
              theme={{
                components: {
                  Input: {
                    activeBg: "#f5f5f5",
                    activeShadow: "#f5f5f5",
                  },
                },
              }}
            >
              <Input
                className="w-44 h-10 border-none rounded-[30px] bg-[#f5f5f5] hover:bg-[#f5f5f5]"
                placeholder="Search"
              />
            </ConfigProvider>
            <Badge count={0} overflowCount={10} size="small">
              <ShoppingCartOutlined style={{ fontSize: "1rem" }} />
            </Badge>
            <a href="#" className="text-lg font-light leading-6 text-black">
              Log in
            </a>
            <SearchOutlined
              className="relative right-[8.5rem] "
              style={{ fontSize: "1rem" }}
            />
          </div>
        </div>
      </div>
      <Drawer
        title={<h1 className="text-lg font-black text-black">OLDSTUFF</h1>}
        onClose={onClose}
        open={open}
        width="50%"
      >
        <div className="text-black lg:hidden">
          <a href="#" className="text-lg font-semibold leading-6 ">
            Men
          </a>
        </div>
        <div className="text-black lg:hidden mt-4">
          <a href="#" className="text-lg font-semibold leading-6 ">
            Women
          </a>
        </div>
        <div className="text-black lg:hidden mt-4">
          <a href="#" className="text-lg font-semibold leading-6 ">
            Kid
          </a>
        </div>
        <div className="text-black lg:hidden mt-4">
          <a href="#" className="text-lg font-semibold leading-6 ">
            Sale
          </a>
        </div>
        <div className="text-black lg:hidden mt-4">
          <a href="#" className="text-lg font-semibold leading-6 ">
            New & Features
          </a>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
