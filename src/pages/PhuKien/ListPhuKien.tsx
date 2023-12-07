import "./phone.scss";
import { useEffect, useState } from "react";
import BoxSort from "src/components/BoxSort/BoxSort";
import handleData from "src/components/Filter/handleData";
import ListProduct from "src/components/ListProduct/ListProduct";
import { useAppSelector } from "src/hooks/useRedux";
import { SmartPhone } from "src/store/product/smartPhoneSlice";
export interface DataListPhone {
  id: number;
  title: string;
  link: string;
  type?: string;
}
const dataFake: DataListPhone[] = [
  {
    id: 2,
    title: "Giảm giá",
    link: "",
    type: "% Giảm",
  },

  {
    id: 3,
    title: "Mới",
    link: "",
    type: "Mới nhất",
  },
];
const dataSelected: { id: number; type: string }[] = [
  { id: 1, type: "Giá cao đến thấp" },
  { id: 2, type: "Giá thấp đến cao" },
  {
    id: 3,
    type: "Mới nhất",
  },
  {
    id: 4,
    type: "Bán chạy",
  },
  {
    id: 5,
    type: "% Giảm",
  },
];

interface Props {
  choose?: ConcatArray<never> | string | any;
  isOpen: boolean;
  handlePageChange: any;
  currentPage: number;
  chooseBox?: any;
  setChooseBox?: any;
  handleSetChooseBox: any;
  category: string;
}
const fakeData = [
  {
    id: 1,
    name: "Đèn LED Ốp Trần 24W Vuông Viền Đen Dimmer HT Light Level",
    price: 945000,
    salePrice: 925000,
    star: 5,
    totalReview: 325,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/01/den-led-op-tran-24W-vuong-vien-den.jpg",
  },
  {
    id: 2,
    name: "Đèn LED Ốp Trần 24W Tròn Viền Đen Dimmer",
    price: 920000,
    salePrice: 900000,
    star: 5,
    totalReview: 1325,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/01/op-tran-tron-24w.png",
  },
  {
    id: 3,
    name: "Đèn LED Ốp Trần 6W Vuông Viền Đen Dimmer",
    price: 435000,
    salePrice: 425000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/01/den-led-op-tran-24W-vuong-vien-den.jpg",
  },
  {
    id: 4,
    name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
    price: 545000,
    salePrice: 525000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/01/op-tran-tron-24w.png",
  },
  {
    id: 5,
    name: "Đèn LED Ốp Trần 24W Vuông Viền Đen",
    price: 660000,
    salePrice: 650000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/01/den-led-op-tran-24W-vuong-vien-den.jpg",
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
  {
    id: 7,
    name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
    price: 545000,
    salePrice: 525000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/01/op-tran-tron-24w.png",
  },
  {
    id: 8,
    name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
    price: 545000,
    salePrice: 525000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/01/op-tran-tron-24w.png",
  },
  {
    id: 9,
    name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
    price: 545000,
    salePrice: 525000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/01/op-tran-tron-24w.png",
  },
  {
    id: 9,
    name: "Đèn LED Ốp Trần 12W Tròn Viền Đen Dimmer",
    price: 545000,
    salePrice: 525000,
    star: 5,
    totalReview: 355,
    image:
      "https://htlightlevel.vn/wp-content/uploads/2020/01/op-tran-tron-24w.png",
  },
];
const ListPhuKien = ({
  choose,
  isOpen,
  handlePageChange,
  currentPage,
  chooseBox,
  setChooseBox,
  handleSetChooseBox,
  category,
}: Props) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [chooseBoxSort, setChooseBoxSort] = useState<number>(0);
  const [checked, setChecked] = useState<any[]>([]);
  const { smartPhone, filter } = useAppSelector<any>(
    (state) => state.smartphone,
  );
  // const { productBySlug } = useAppSelector<any>((state) => state.cartItems);
  // let dataAfter = smartPhone?.data;
  // // if (filter?.data?.length !== 0) {
  // //   dataAfter = handleData(smartPhone, filter?.data);
  // // }

  const handleClick = (index: number) => {
    setChooseBoxSort(index);
    handleSetChooseBox(index);
  };

  return (
    <>
      <BoxSort
        chooseBoxSort={chooseBoxSort}
        data={dataFake}
        onclick={handleClick}
        dataSelected={dataSelected}
        selected={selected}
        setSelected={setSelected}
        choose={choose}
        checked={checked}
        setChecked={setChecked}
        category={category}
        // countProduct={productBySlug?.data.totalElements}
      />
      <div className="phone__content">
        <div className="">
          {isOpen === false ? (
            <ListProduct
              products={fakeData}
              isSlide={false}
              category={category}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            />
          ) : (
            <ListProduct
              products={fakeData}
              category={category}
              isSlide={false}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            ></ListProduct>
          )}
        </div>
      </div>
    </>
  );
};
export default ListPhuKien;

