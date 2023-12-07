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
    name: "Đèn Led Panel 600×1200",
    price: 2950000,
    salePrice: 2850000,
    star: 5,
    totalReview: 325,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/04/den-led-panel-600x1200-ht-light-level.jpg",
  },
  {
    id: 2,
    name: "Đèn Led Panel 300×1200",
    price: 1600000,
    salePrice: 1500000,
    star: 5,
    totalReview: 1325,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/04/den-led-panel-300x1200-ht-light-level.jpg",
  },
  {
    id: 3,
    name: "Đèn LED Panel 300×600",
    price: 810000,
    salePrice: 800000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/03/den-led-panel-300x600-ht-light-level.jpg",
  },
  {
    id: 4,
    name: "Đèn LED Panel 300×300",
    price: 525000,
    salePrice: 515000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/02/den-led-panel-300x300-ht-light-level.jpg",
  },
  {
    id: 5,
    name: "Đèn LED Panel 600×600",
    price: 660000,
    salePrice: 650000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/03/den-led-panel-600x600-ht-light-level.jpg",
  },
  {
    id: 5,
    name: "Đèn LED Panel 600×600",
    price: 660000,
    salePrice: 650000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/03/den-led-panel-600x600-ht-light-level.jpg",
  },
];
const DenLedPanel = () => {
  return (
    <Section title="Đèn Led Panel" styles="bg-yellow-300 ">
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

export default DenLedPanel;

