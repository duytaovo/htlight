import { Link } from "react-router-dom";
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
    name: "Đèn LED Ốp Trần 24W Vuông Viền Đen Dimmer HT Light Level",
    price: 945000,
    salePrice: 925000,
    star: 5,
    totalReview: 325,
    image: "images/uploads/2020/01/den-led-op-tran-24W-vuong-vien-den.jpg",
  },
  {
    id: 2,
    name: "Đèn LED Ốp Trần 24W Tròn Viền Đen Dimmer",
    price: 920000,
    salePrice: 900000,
    star: 5,
    totalReview: 1325,
    image: "images/uploads/2020/01/op-tran-tron-24w.png",
  },
  {
    id: 3,
    name: "Đèn LED Ốp Trần 6W Vuông Viền Đen Dimmer",
    price: 435000,
    salePrice: 425000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/01/den-led-op-tran-24W-vuong-vien-den.jpg",
  },
  {
    id: 4,
    name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
    price: 545000,
    salePrice: 525000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/01/op-tran-tron-24w.png",
  },
  {
    id: 5,
    name: "Đèn LED Ốp Trần 24W Vuông Viền Đen",
    price: 660000,
    salePrice: 650000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/01/den-led-op-tran-24W-vuong-vien-den.jpg",
  },
  {
    id: 6,
    name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
    price: 545000,
    salePrice: 525000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/01/op-tran-tron-24w.png",
  },
];
const ProductTrend = () => {
  return (
    <Section title="XU HƯỚNG MUA SẮM" styles="bg-red-300">
      <>
        <div className="w-full  ">
          {/* <ListProduct
            products={smartPhone?.data}
            isSlide={false}
            category={"smartphone"}
          /> */}
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
                    category="ledOpTran"
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

export default ProductTrend;

