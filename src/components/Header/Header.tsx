import { Link, useNavigate } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import CartButton from "./CartButton";
import FilterButton from "./FilterButton";
import styles from "./header.module.scss";
import "./header.module.scss";
import { Avatar, MenuProps } from "antd";
import { useContext, useEffect, useState } from "react";
import path from "src/constants/path";
import { useTranslation } from "react-i18next";
import CustomDropDown from "../Dropdown/Dropdown";
import { AppContext } from "src/contexts/app.context";
import logo from "src/assets/images/htlight.png";
import { clearLS } from "src/utils/auth";
import { logoutUser } from "src/store/user/userSlice";
import { useAppDispatch } from "src/hooks/useRedux";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { UserOutlined } from "@ant-design/icons";
import PopoverSearch from "../Popover";
import { Box } from "@mui/material";
import Search from "../Search";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "usehooks-ts";
import { searchService } from "src/services";
import ItemSearch from "../Search/ItemSearch";
import { getResultSearch } from "src/store/search/searchSlice";

const customDropdownStyle = {
  arrow: false,
  isOnClick: false,
  className: "px-1 mx-3 xl:p-0 xl:mr-0 hover:",
};

const menuStyle = {
  padding: "20px 20px",
  borderRadius: "16px",
};
const Header = () => {
  const { t } = useTranslation("home");
  const {} = useContext(AppContext);
  const { isAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleOrderClick = () => {};
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleOpenModal = () => {};
  const itemAcount: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Link to={path.register}>
          <div className={""}>
            <span className={""}>{t("header.register")}</span>
          </div>
        </Link>
      ),
    },
    {
      key: "1",
      label: (
        <Link to={path.login}>
          <div className={""}>
            <span className={""}>{t("header.login")}</span>
          </div>
        </Link>
      ),
    },
  ];

  const itemLogout: MenuProps["items"] = [
    {
      key: "3",
      label: (
        <div
          onClick={async () => {
            await navigate(path.profile);
          }}
        >
          <span className={""}>{t("header.profile")}</span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          onClick={async () => {
            await clearLS();
            await dispatch(logoutUser("")).then(unwrapResult);
            await toast.success("Đăng xuất thành công");

            setTimeout(async () => {
              await location.reload();
              await navigate("/");
            }, 1000);
          }}
        >
          <span className={""}>{t("header.logout")}</span>
        </div>
      ),
    },
  ];
  const [valueSearch, setValueSearch] = useState("");
  const debouncedValue = useDebounce<string>(valueSearch, 500);
  const onChange = (value: string) => {
    setValueSearch(value);
    if (value == "") {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 700);
  }, [isLoading]);
  const { data: dataSearch } = useQuery({
    queryKey: ["dataSearch", debouncedValue],
    queryFn: () => {
      setIsLoading(false);
      return searchService.getResultSearchApi({ keyword: debouncedValue });
    },

    enabled: debouncedValue !== "",
    // keepPreviousData: true,
    staleTime: 3 * 60 * 1000,
  });
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const handle = (boolean: boolean) => {
    setIsOpenPopup(false);
  };

  useEffect(() => {
    dispatch(getResultSearch(dataSearch));
  }, [dataSearch]);

  return (
    <header
      className={`${
        styles.heading
      } fixed top-0 z-[100] box-border text-textWhiteMain  w-full items-center justify-between ${
        isScrolled ? "bg-mainColor " : ""
      }`}
    >
      <div className={styles.top}>
        <div className={styles.wrap}>
          <Link to="/">
            <div className="translate-x-2">
              <img
                src={logo}
                alt="logo"
                className="w-[130px] h-[65px] rounded-md"
              />
            </div>
          </Link>
          {/* <FilterButton /> */}
          {/* <SearchInput /> */}

          <PopoverSearch
            className="z-[10000]"
            isOpenPopup={isOpenPopup}
            setIsOpenPopup={setIsOpenPopup}
            handePopup={handle}
            renderPopover={
              <Box
                sx={{
                  width: 400,
                  // height: "50vh",
                  backgroundColor: "white",
                  borderRadius: "1px",
                  overflow: "auto",
                  scrollBehavior: "smooth",
                  scrollbarColor: "revert",
                  zIndex: 10000,
                }}
                className="h-auto max-h-[50vh] min-h-auto"
              >
                <div className="ml-3 text-black">
                  {dataSearch?.data?.data.length > 0 ? (
                    <div>
                      <h6 className=" mt-2 p2">Kết quả tìm kiếm</h6>
                      {dataSearch?.data?.data?.map(
                        (item: any, index: number) => (
                          <div key={index} className="m-2 ml-0">
                            <ItemSearch item={item} handePopup={handle} />
                          </div>
                        ),
                      )}
                    </div>
                  ) : (
                    <div className="h-10 bg-white">
                      {dataSearch?.data?.data.length === 0 && (
                        <h2>Không có sản phẩm trong hệ thống chúng tôi</h2>
                      )}
                    </div>
                  )}
                </div>
              </Box>
            }
          >
            <div>
              <Search
                width="400px"
                placeholder="Tìm kiếm"
                onChange={onChange}
                loading={isLoading}
                handePopup={handle}
              />
            </div>
          </PopoverSearch>

          <Link
            to={path.historyPurchase}
            onClick={handleOrderClick}
            className=" text-center "
          >
            Lịch sử đơn hàng
          </Link>
          <Link to={path.cartNew}>
            <CartButton />
          </Link>
          <CustomDropDown
            {...customDropdownStyle}
            menuStyle={menuStyle}
            items={isAuthenticated ? itemLogout : itemAcount}
            children={
              <div className="flex items-center justify-around cursor-pointer ">
                {true ? (
                  // <SentimentSatisfiedAltRoundedIcon />
                  <Avatar
                    className="leading-[28px]"
                    size="large"
                    icon={<UserOutlined />}
                  />
                ) : (
                  <div onClick={handleOpenModal}>Tài khoản</div>
                  // <AccountCircleIcon
                  //   className="text-lg"
                  //   onClick={handleOpenModal}
                  // />
                )}

                {/* <ArrowDropDownIcon className='group-hover:text-mainColor'/> */}
              </div>
            }
          />
        </div>
      </div>
      <div className={styles.bottom}>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;

