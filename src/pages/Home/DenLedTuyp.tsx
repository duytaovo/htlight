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
    name: "Đèn LED Thủy Sinh 18W",
    price: 95000,
    salePrice: 90000,
    star: 5,
    totalReview: 325,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/04/den-led-thuy-sinh.jpg",
  },
  {
    id: 2,
    name: "Đèn LED Thủy Sinh 14W",
    price: 90000,
    salePrice: 85000,
    star: 5,
    totalReview: 1325,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/04/den-led-thuy-sinh.jpg",
  },
  {
    id: 3,
    name: "Đèn LED Thủy Sinh 9W",
    price: 85000,
    salePrice: 80000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/04/den-led-thuy-sinh.jpg",
  },
  {
    id: 4,
    name: "Bộ đèn tuyp led t8-09",
    price: 150000,
    salePrice: 140000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/04/bo-bong-tuyp-led-t8-200x240.jpg",
  },
  {
    id: 5,
    name: "Bóng Đèn Tuýp LED T8 1m2 Hồng",
    price: 195000,
    salePrice: 190000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/04/bong-tuyp-led-t8-xanh-duong-xanh-la-do-hong-200x240.jpg",
  },
  {
    id: 6,
    name: "Bộ Đèn Tuýp LED T8 1m2",
    price: 190000,
    salePrice: 180000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/01/op-tran-tron-24w.png",
  },
];
const DenLedTuyp = () => {
  return (
    <Section title="Đèn Led Tuyp" styles="bg-green-300 ">
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

export default DenLedTuyp;

