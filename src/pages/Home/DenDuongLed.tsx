import Slider from "react-slick";
import ProductCard from "src/components/ProductCard";
import Section from "src/components/Section/Section";
import NextArrow from "src/components/Slick/NextArrow";
import PrevArrow from "src/components/Slick/PrevArrow";
interface Product {
  name: string;
  content: string;
  image: string;
}

const fakeData = [
  {
    id: 1,
    name: "Đèn Đường LED 4141 Super 250W",
    price: 16350000,
    salePrice: 16250000,
    star: 5,
    totalReview: 325,
    image: "https://htlightlevel.vn/wp-content/uploads/2020/06/250-200x240.jpg",
  },
  {
    id: 2,
    name: "Đèn Đường LED 4141 Super 200W",
    price: 12600000,
    salePrice: 12500000,
    star: 5,
    totalReview: 1325,
    image: "https://htlightlevel.vn/wp-content/uploads/2020/06/200-200x240.jpg",
  },
  {
    id: 3,
    name: "Đèn Đường LED 4141 Super 150W",
    price: 10500000,
    salePrice: 10000000,
    star: 5,
    totalReview: 355,
    image: "https://htlightlevel.vn/wp-content/uploads/2020/06/150-200x240.jpg",
  },
  {
    id: 4,
    name: "Đèn Đường LED 4141 Super 100W",
    price: 545000,
    salePrice: 525000,
    star: 5,
    totalReview: 355,
    image: "https://htlightlevel.vn/wp-content/uploads/2020/06/100-200x240.jpg",
  },
  {
    id: 5,
    name: "Đèn Đường LED 4141 Super 50W",
    price: 5600000,
    salePrice: 5500000,
    star: 5,
    totalReview: 355,
    image: "https://htlightlevel.vn/wp-content/uploads/2020/06/50w-200x240.jpg",
  },
  {
    id: 6,
    name: "Đèn Đường LED 3737 Super 200W",
    price: 9475000,
    salePrice: 9375000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/06/den-duong-led-50w-3737-200W-200x240.jpg",
  },
];
const DenDuongLed = () => {
  return (
    <Section title="Đèn Đường Led" styles="bg-orange-300 ">
      <>
        <div className="w-full  ">
          <Slider
            slidesToShow={5}
            slidesToScroll={1}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {fakeData?.map((product: any) => (
              <div className="w-full" key={""}>
                <div className="mx-4">
                  <ProductCard
                    docquyen
                    key={product.id}
                    category="ledAmTranDownLigh"
                    product={product}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </>
    </Section>
  );
};

export default DenDuongLed;

