import React from "react";
import HeaderSlide from "src/pages/AboutUs/HeaderSlide/HeaderSlide";
import WrapperContent from "src/components/WrapperContent/WrapperContent";
import ConnectedCarSharing from "src/components/ConnectedCarSharing/ConnectedCarSharing";
import JoinTeam from "./JoinTeam/JoinTeam";
import Banner from "./Banner/Banner";
import { Helmet } from "react-helmet-async";
import Blog from "src/components/Blog/Blog";

const ConnectedCarSharingR = [
  {
    id: 1,
    total: 1,
    title: "abc",
  },
  {
    id: 2,
    total: 1,
    title: "abc",
  },
  {
    id: 3,
    total: 1,
    title: "abc",
  },
  {
    id: 4,
    total: 1,
    title: "abc",
  },
];

const AboutUs = () => {
  return (
    <div className="w-full h-auto">
      <Helmet>
        <title>About Us </title>
        <meta name="description" content="Trang về chúng tôi" />
      </Helmet>
      <HeaderSlide />
      <WrapperContent textAlign="center" title="" classname="flex flex-col">
        <Banner />
      </WrapperContent>

      {/* <WrapperContent
        title="WE'RE SCALING OUR OPERATIONS TO SCALE OUR MISSION."
        textAlign="center"
        isBgTransparent={true}
      >
        <ConnectedCarSharing
          DataConnectedCarSharingHome={ConnectedCarSharingR}
          className={"flex-col items-stretch flex py-10 sm:py-3"}
        />
      </WrapperContent> */}

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

      {/* <ExploreHosting
        img={ImgExploreAboutUs.img}
        DataExploreHostingStyle={DataExploreHostingAboutUs}
        DataExploreHostingText={ExploreAboutUs}
        isEx={false}
        className="flex-col items-center flex w-full mb-[66px]"
      /> */}
    </div>
  );
};

export default AboutUs;

