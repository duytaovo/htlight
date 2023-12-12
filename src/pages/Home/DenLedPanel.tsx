import Section from "src/components/Section/Section";
import Skeleton from "src/components/Skeleton";
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
    name: "Đèn Led Panel 600×1200",
    price: 2950000,
    salePrice: 2850000,
    star: 5,
    totalReview: 325,
    image: "images/uploads/2020/04/den-led-panel-600x1200-ht-light-level.jpg",
  },
  {
    id: 2,
    name: "Đèn Led Panel 300×1200",
    price: 1600000,
    salePrice: 1500000,
    star: 5,
    totalReview: 1325,
    image: "images/uploads/2020/04/den-led-panel-300x1200-ht-light-level.jpg",
  },
  {
    id: 3,
    name: "Đèn LED Panel 300×600",
    price: 810000,
    salePrice: 800000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/03/den-led-panel-300x600-ht-light-level.jpg",
  },
  {
    id: 4,
    name: "Đèn LED Panel 300×300",
    price: 525000,
    salePrice: 515000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/02/den-led-panel-300x300-ht-light-level.jpg",
  },
  {
    id: 5,
    name: "Đèn LED Panel 600×600",
    price: 660000,
    salePrice: 650000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/03/den-led-panel-600x600-ht-light-level.jpg",
  },
  {
    id: 5,
    name: "Đèn LED Panel 600×600",
    price: 660000,
    salePrice: 650000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/03/den-led-panel-600x600-ht-light-level.jpg",
  },
];

const DenLedPanel = () => {
  const { value } = useAppSelector((state) => state.loading);
  return (
    <Section title="Đèn Led Panel" styles="bg-yellow-300 ">
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

export default DenLedPanel;

