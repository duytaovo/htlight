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
    name: "Đèn LED Âm Trần Gắn Nổi 15W",
    price: 364000,
    salePrice: 344000,
    star: 5,
    totalReview: 325,
    image: "images/uploads/2023/08/snapedit_1700298411199.png",
  },
  {
    id: 2,
    name: "Đèn LED Âm Trần Siêu Mỏng 18W Vuông Dimmer",
    price: 920000,
    salePrice: 900000,
    star: 5,
    totalReview: 1325,
    image: "images/uploads/2019/12/den-led-am-tran-sieu-mong-vuong-9.jpg",
  },
  {
    id: 3,
    name: "Đèn LED Âm Trần Siêu Mỏng 12W Vuông Dimmer",
    price: 435000,
    salePrice: 425000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2019/12/den-led-am-tran-sieu-mong-vuong-8.jpg",
  },
  {
    id: 4,
    name: "Đèn LED Âm Trần Siêu Mỏng 9W Vuông Dimmer",
    price: 545000,
    salePrice: 525000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2019/12/den-led-am-tran-sieu-mong-vuong-7.jpg",
  },
  {
    id: 6,
    name: "Đèn LED Âm Trần Siêu Mỏng 12W Tròn Dimmer",
    price: 660000,
    salePrice: 650000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2019/12/den-led-am-tran-sieu-mong-tron-13.jpg",
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

const ProductAmTranDowLigh = () => {
  const { value } = useAppSelector((state) => state.loading);
  return (
    <Section title="Đèn Led Âm Trần " styles="bg-blue-300 ">
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

export default ProductAmTranDowLigh;

