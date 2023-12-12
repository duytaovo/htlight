import BigBannerPhuKien from "./BigBannerPhuKien";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import FilterPhuKien from "./FilterPhuKien";
import QuickLinkPhuKien from "./QuickLinkPhuKien";
import ListLed from "./ListLed";
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import { useLocation, useParams } from "react-router-dom";

const PhuKien = () => {
  const [choose, setChoose] = useState<any>();
  const location = useLocation();
  const [chooseCharac, setChooseCharac] = useState<any>();
  const [chooseBox, setChooseBox] = useState<any>();
  const [isOpen, setisOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(0); // Trang hiện tại
  // const filter = useAppSelector((state) => state.smartphone.filter.data); // Lấy tất cả
  const { sort } = useAppSelector<any>((state) => state.filter);
  const { brand } = useAppSelector<any>((state) => state.brand);

  const handle = (boolean: boolean) => {
    setisOpen(boolean);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleSetChoose = (choose: any) => {
    setChoose(choose);
  };

  const handleSetChooseCharac = (choose: any) => {
    setChooseCharac(choose);
  };

  const handleSetChooseBox = (choose: any) => {
    setChooseBox(choose);
  };
  return (
    <div className="text-textWhiteMain">
      <Helmet>
        <title>Trang Danh Sách Sản Phẩm</title>
        <meta name="description" content="Trang Danh Sách Sản Phẩm" />
      </Helmet>
      <BigBannerPhuKien />

      <ListLed
        category={location.pathname.substring(11)}
        handleSetChooseBox={handleSetChooseBox}
        choose={choose}
        setChooseBox={setChooseBox}
        isOpen={isOpen}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};
export default PhuKien;

