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
    name: "Đèn LED Âm Trần Gắn Nổi 15W",
    price: 364000,
    salePrice: 344000,
    star: 5,
    totalReview: 325,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2023/08/snapedit_1700298411199.png",
  },
  {
    id: 2,
    name: "Đèn LED Âm Trần Siêu Mỏng 18W Vuông Dimmer",
    price: 920000,
    salePrice: 900000,
    star: 5,
    totalReview: 1325,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2019/12/den-led-am-tran-sieu-mong-vuong-9.jpg",
  },
  {
    id: 3,
    name: "Đèn LED Âm Trần Siêu Mỏng 12W Vuông Dimmer",
    price: 435000,
    salePrice: 425000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2019/12/den-led-am-tran-sieu-mong-vuong-8.jpg",
  },
  {
    id: 4,
    name: "Đèn LED Âm Trần Siêu Mỏng 9W Vuông Dimmer",
    price: 545000,
    salePrice: 525000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2019/12/den-led-am-tran-sieu-mong-vuong-7.jpg",
  },
  {
    id: 6,
    name: "Đèn LED Âm Trần Siêu Mỏng 12W Tròn Dimmer",
    price: 660000,
    salePrice: 650000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2019/12/den-led-am-tran-sieu-mong-tron-13.jpg",
  },
  {
    id: 6,
    name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
    price: 545000,
    salePrice: 525000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/01/op-tran-tron-24w.png",
  },
];
const ProductAmTranDowLigh = () => {
  return (
    <Section title="Đèn Led Âm Trần " styles="bg-blue-300 ">
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

export default ProductAmTranDowLigh;

