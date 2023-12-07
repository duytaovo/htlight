import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector } from "src/hooks/useRedux";
import NextArrow from "src/components/Slick/NextArrow";
import PrevArrow from "src/components/Slick/PrevArrow";
import Slider from "react-slick";

const BigBanner = () => {
  const { bigImage } = useAppSelector((state) => state.banner.promo.bigbanner);
  const images: string[] = [
    "https://rangdongs.com.vn/wp-content/uploads/2021/10/slide-so1-VN-18-6.jpg",
    "https://rangdongs.com.vn/wp-content/uploads/2021/10/2021.06.16-slide-2.jpg",
    "https://rangdongs.com.vn/wp-content/uploads/2021/10/RL-68.jpg",
    // "https://htlightlevel.vn/wp-content/uploads/2023/11/snapedit_1700294979124.png",
    "https://htlightlevel.vn/wp-content/uploads/2023/11/snapedit_1700294979124.png",
  ];
  return (
    <div className={"h-[450px] object-cover bg-transparent  rounded-2xl "}>
      <Slider
        // dots={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
      >
        {images.map((src: string, index: number) => (
          <div key={index} className="owl-item" style={{ width: 1800 }}>
            <div className="item">
              <a href="">
                <img src={src} alt="" className="rounded-xl h-[450px] w-full" />
              </a>
            </div>
          </div>
        ))}
      </Slider>
      {/* <Link to="/">
        <img src={banner} className="rounded-xl h-[500px] w-full" />
      </Link> */}
    </div>
  );
};

export default BigBanner;

