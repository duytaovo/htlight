import Section from "src/components/Section/Section";
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import Skeleton from "src/components/Skeleton";
import ListProduct from "./components/ListProduct";
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
    price: 180000,
    salePrice: 170000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/04/den-led-bulb-ht-light-level-200x240.jpg",
  },
  {
    id: 4,
    name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
    price: 1250000,
    salePrice: 1200000,
    star: 5,
    totalReview: 355,
    image:
      "images/uploads/2020/10/den-led-spotlight-am-tran-8091-21W-ht-200x240.jpg",
  },
  {
    id: 5,
    name: "Đèn Pha LED 5059 400W",
    price: 6850000,
    salePrice: 6750000,
    star: 5,
    totalReview: 365,
    image: "images/uploads/2020/04/den-pha-led-5059-400W-ht-01-200x240.jpg",
  },
  {
    id: 6,
    name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
    price: 710000,
    salePrice: 700000,
    star: 5,
    totalReview: 355,
    image: "images/uploads/2020/10/den-roi-ray-8017-vo-trang-ht.jpg",
  },
];
const PromoFirst = () => {
  const { banner } = useAppSelector((state) => state.banner.promo.firstpromo);

  const handlePageChange = (page: number) => {
    // setCurrentPage(page - 1);
  };

  const { value } = useAppSelector((state) => state.loading);

  return (
    <Section styles={`bg-yellow-300 rounded overflow-hidden`} title="Phổ biến">
      <>
        <div>
          {/* <img
            src={
              "https://cdn.tgdd.vn/2022/08/banner/TGDD---Tagline-hotsale-1200x95-1200x95.png"
            }
            className="w-full object-cover"
          /> */}
        </div>
        <div className="w-full ">
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

export default PromoFirst;

