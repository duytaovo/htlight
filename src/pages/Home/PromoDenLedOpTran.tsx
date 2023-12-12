import { Button } from "antd";
import Slider from "react-slick";
import ProductCard from "src/components/ProductCard";
import Section from "src/components/Section/Section";
import NextArrow from "src/components/Slick/NextArrow";
import PrevArrow from "src/components/Slick/PrevArrow";
import ListProduct from "./components/ListProduct";
import { useAppSelector } from "src/hooks/useRedux";
import Skeleton from "src/components/Skeleton";
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

const ProductOpTran = () => {
  const { value } = useAppSelector((state) => state.loading);
  return (
    <Section
      title="Đèn Led Ốp Trần"
      styles="bg-red-300 rounded"
      styleTitle="bg-mainColor rounded mb-4"
    >
      <>
        <div className="w-full  ">
          {value < 100 ? (
            <div style={{ display: "flex", gap: 20, paddingTop: 32 }}>
              <Skeleton
                styles={{ height: "35vh" }}
                children={undefined}
                className={undefined}
              />
              <Skeleton
                styles={{ height: "35vh" }}
                children={undefined}
                className={undefined}
              />
              <Skeleton
                styles={{ height: "35vh" }}
                children={undefined}
                className={undefined}
              />
              <Skeleton
                styles={{ height: "35vh" }}
                children={undefined}
                className={undefined}
              />
              <Skeleton
                styles={{ height: "35vh" }}
                children={undefined}
                className={undefined}
              />
            </div>
          ) : (
            <ListProduct fakeData={fakeData} />
          )}
        </div>
      </>
    </Section>
  );
};

export default ProductOpTran;

