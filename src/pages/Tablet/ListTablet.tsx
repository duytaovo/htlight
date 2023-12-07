import "./tablet.scss";
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
}

const ListTablet = ({
  choose,
  isOpen,
  handlePageChange,
  currentPage,
  chooseBox,
  setChooseBox,
  handleSetChooseBox,
}: Props) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [chooseBoxSort, setChooseBoxSort] = useState<number>(0);
  const [checked, setChecked] = useState<any[]>([]);
  const { smartPhone, filter } = useAppSelector<any>(
    (state) => state.smartphone,
  );
  let dataAfter = smartPhone?.data;
  // if (filter?.data?.length !== 0) {
  //   dataAfter = handleData(smartPhone, filter?.data);
  // }

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
        category="smartphone"
        countProduct={smartPhone?.data.totalElements}
      />
      <div className="phone__content">
        <div className="">
          {isOpen === false ? (
            <ListProduct
              products={smartPhone?.data}
              isSlide={false}
              category={"smartphone"}
              handlePageChange={handlePageChange}
              currentPage={currentPage}
            />
          ) : (
            <ListProduct
              products={dataAfter}
              category={"smartphone"}
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
export default ListTablet;

