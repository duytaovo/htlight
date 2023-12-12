import React from "react";
import HeaderSlide from "src/pages/AboutUs/HeaderSlide/HeaderSlide";
import WrapperContent from "src/components/WrapperContent/WrapperContent";
import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet-async";
import ConnectedCarSharing from "src/components/ConnectedCarSharing/ConnectedCarSharing";
import Banner2 from "./Banner2/Banner2";

const ConnectedCarSharingR = [
  {
    id: 1,
    total: 1,
    title: "Sáng Tạo",
  },
  {
    id: 2,
    total: 2,
    title: "Hiệu Quả",
  },
  {
    id: 3,
    total: 3,
    title: "Thông Minh",
  },
  {
    id: 4,
    total: 4,
    title: "Sang Trọng",
  },
];

const AboutUs = () => {
  return (
    <div className="w-full h-auto">
      <Helmet>
        <title>Giới thiệu </title>
        <meta name="description" content="Trang về chúng tôi" />
      </Helmet>
      <HeaderSlide />
      <WrapperContent textAlign="center" title="" classname="flex flex-col">
        <Banner />
      </WrapperContent>

      <WrapperContent
        title="Tiêu chí của chúng tôi mang đến"
        textAlign="center"
        isBgTransparent={true}
      >
        <ConnectedCarSharing
          DataConnectedCarSharingHome={ConnectedCarSharingR}
          className={"flex-col items-stretch flex py-10 sm:py-3"}
        />
      </WrapperContent>
      <WrapperContent textAlign="center" title="" classname="flex flex-col">
        <Banner2 />
      </WrapperContent>
      {/* <div className="mb-[60px] sm:mb-[30px]">
        <div>
          <span className="text-mainColor font-medium text-center uppercase leading-3 flex justify-center mb-2">
            OUR LATEST UPDATES
          </span>

          <h2 className=" flex text-[32px] text-center  justify-center mb-2">
            News room: Press releases
          </h2>
        </div>
        <Carousel_Review_Comunity
          className="m-4"
          data={CarouselNewsRoom}
          numberItem={2}
          numberItemScroll={1}
          classNameContent="text-[#727171]"
        />
      </div> */}

      {/* <Blog />

      <JoinTeam /> */}
    </div>
  );
};

export default AboutUs;

