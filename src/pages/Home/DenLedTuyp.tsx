import Slider from "react-slick";
import ProductCard from "src/components/ProductCard";
import Section from "src/components/Section/Section";
import Skeleton from "src/components/Skeleton";
import NextArrow from "src/components/Slick/NextArrow";
import PrevArrow from "src/components/Slick/PrevArrow";
import { useAppSelector } from "src/hooks/useRedux";
import ListProduct from "./components/ListProduct";
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
    image: "images/uploads/2020/04/den-led-thuy-sinh.jpg",
  },
  {
    id: 2,
    name: "Đèn LED Thủy Sinh 14W",
    price: 90000,
    salePrice: 85000,
    star: 5,
    totalReview: 1325,
    image: "images/uploads/2020/04/den-led-thuy-sinh.jpg",
  },
  {
    id: 3,
    name: "Đèn LED Thủy Sinh 9W",
    price: 85000,
    salePrice: 80000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/04/den-led-thuy-sinh.jpg",
  },
  {
    id: 4,
    name: "Bộ đèn tuyp led t8-09",
    price: 150000,
    salePrice: 140000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/04/bo-bong-tuyp-led-t8-200x240.jpg",
  },
  {
    id: 5,
    name: "Bóng Đèn Tuýp LED T8 1m2 Hồng",
    price: 195000,
    salePrice: 190000,
    star: 5,
    totalReview: 355,
    image:
      "images/uploads/2020/04/bong-tuyp-led-t8-xanh-duong-xanh-la-do-hong-200x240.jpg",
  },
  {
    id: 6,
    name: "Bộ Đèn Tuýp LED T8 1m2",
    price: 190000,
    salePrice: 180000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/01/op-tran-tron-24w.png",
  },
];

const DenLedTuyp = () => {
  const { value } = useAppSelector((state) => state.loading);
  return (
    <Section title="Đèn Led Tuyp" styles="bg-green-300 ">
      <>
        <div className="w-full  ">
          <div className="mx-4">
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
        </div>
      </>
    </Section>
  );
};

export default DenLedTuyp;

