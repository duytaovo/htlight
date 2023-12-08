import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Col, Row } from "antd";
import Carousel_About from "./Carousel_About";
import { ReactNode } from "react";
import NextArrow from "src/components/Slick/NextArrow";
import PrevArrow from "src/components/Slick/PrevArrow";
interface Props {
  numberItem: number;
  numberItemScroll: number;
  data: any[];
  className?: string;
  classNameContent?: string;
}

export default function Carousel_Review_Comunity({
  numberItem,
  numberItemScroll,
  data,
  className,
  classNameContent,
}: Props) {
  // const breakpoints = getBreakpoint([1, 1, 2, 2, 3, 3]);
  const settings = {
    speed: 500,
    infinite: true,
    autoplay: true,
    slidesToShow: numberItem,
    autoplaySpeed: 3000,
    className: "",
    dots: true,
    dotsClass: `${"custom-dots"}`,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1289,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: numberItem,
          slidesToScroll: numberItemScroll,
        },
      },
    ],
  };

  return (
    <div className="flex justify-between sm:justify-center md1:justify-center">
      <div className="w-full sm:w-[80%] md1:w-[90%]">
        <Slider {...settings}>
          {data?.map((item, index: number) => (
            <div
              key={item.id}
              className="
               
                  "
            >
              {" "}
              <Carousel_About
                item={item}
                classNameContent={classNameContent}
                className={className}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

