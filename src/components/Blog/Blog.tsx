import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "src/hooks/useRedux";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store/store";
export const DataBlogNewsRoom = {
  id: "Blog_AboutUS_NewsRoom",
  img: "https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc05d87b4b95cb44c4ef9f_getaroundblog%20Grande.jpeg",
  headerTitle: "THE GETAROUND BLOG",
  mainTitle: "Discover the Getaround blog",
  content:
    " Explore the collection of stories, news, and other resources for hosts, guests, and partners throughout the  Getaround carsharing community.",
  linkTo: "/",
};
export const DataBlogAboutUs = {
  id: "Blog_AboutUS_AboutUs",
  img: "https://assets-global.website-files.com/5c16e90c8f6920b098f834e5/63dc05d87b4b95cb44c4ef9f_getaroundblog%20Grande.jpeg",
  headerTitle: "THE GETAROUND BLOG",
  mainTitle: "Discover the Getaround blog",
  content:
    " Explore the collection of stories, news, and other resources for hosts, guests, and partners throughout the  Getaround carsharing community.",
  linkTo: "/",
};
const Blog = () => {
  return (
    <div className="flex p-40 justify-center h-auto w-full mb-16 md:mb-24 sm:flex-col sm:mb-20">
      <img
        className="object-contain rounded-2xl w-1/2 flex justify-center mr-5 md:rounded-2xl sm:w-full"
        src="https://htlightlevel.vn/wp-content/uploads/2023/11/den-led-san-vuon.jpg"
        alt="ss"
      />

      <div className="w-1/2  flex justify-center items-center sm:w-full sm:mt-6 md1:ml-10 md1:items-start">
        <div className="block h-[50%]">
          <p className="uppercase text-green-500 font-semibold mb-8 text-[30px]">
            SẢN PHẨM HT LIGHT
          </p>

          <p className="text-white font-normal my-6 sm:text-[15px]">
            HT LIGHT LEVEL luôn Lấy khách hàng làm trọng tâm, Công Ty TNHH Sản
            Xuất CCG cam kết tối đa làm thỏa mãn nhu cầu khách hàng. Chúng tôi
            lấy tín nhiệm của khách hàng làm mục đích hoạt động. HT MAX LIGHT
            cam kết giao sản phẩm đúng với chất lượng, đủ số lượng và đúng thời
            gian. Chúng tôi luôn mong muốn đem lại nhiều hiệu quả tối ưu theo
            nhu cầu sử dụng của khách hàng với phương châm phục vụ: ” Uy tín –
            Chất lượng – Nhanh chóng – Giá cả hợp lý“.
          </p>

          <Link
            to="/"
            className="text-green-500 underline hover:text-black hover:no-underline cursor-pointer duration-[0.5s]"
          >
            Mua Ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;

