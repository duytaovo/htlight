import "./bigbanner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../Slick/NextArrow";
import PrevArrow from "../Slick/PrevArrow";

const images: string[] = [
  "https://rangdongs.com.vn/wp-content/uploads/2021/10/slide-so1-VN-18-6.jpg",
  "https://rangdongs.com.vn/wp-content/uploads/2021/10/2021.06.16-slide-2.jpg",
  "https://rangdongs.com.vn/wp-content/uploads/2021/10/RL-68.jpg",
  // "https://htlightlevel.vn/wp-content/uploads/2023/11/snapedit_1700294979124.png",
  "https://htlightlevel.vn/wp-content/uploads/2023/11/snapedit_1700294979124.png",
];
const BigBanner = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="flex max-w-[1200px] h-[450px] w-full ">
        <div className="w-full">
          <Slider
            // dots={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={false}
            autoplaySpeed={2000}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {images.map((src: string, index: number) => (
              <div key={index} className="owl-item" style={{ width: 800 }}>
                <div className="item">
                  <a href="">
                    <img
                      src={src}
                      alt=""
                      className="rounded-xl h-[450px] w-full"
                    />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* <div className="pl-[10px] flex flex-col">
          <div className="pt-1">
            <a href="">
              <img
                src="//cdn.tgdd.vn/2022/05/banner/sticky-intel-390-97-390x97.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="">
              <img
                src="//cdn.tgdd.vn/2022/06/banner/Xa-hang-Laptop-2-390x97-1.png"
                alt=""
              />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BigBanner;

