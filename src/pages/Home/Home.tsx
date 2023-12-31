import { useState, useEffect } from "react";
import styles from "./home.module.scss";
import BigBanner from "./BigBanner";
import PromoFirst from "./PromoFirst";
import DiscountOnline from "./DiscountOnline";
import ProductCategory from "./ProductCategory";
import ProductHistory from "src/components/ProductHistory";
import { Helmet } from "react-helmet-async";
import { useAppDispatch } from "src/hooks/useRedux";
import { getPromo } from "src/store/banner/bannerSlice";
import ProductAmTranDowLigh from "./ProductAmTranDowLigh";
import ProductOpTran from "./PromoDenLedOpTran";
import DenLedPanel from "./DenLedPanel";
import DenLedTuyp from "./DenLedTuyp";
import DenDuongLed from "./DenDuongLed";
import { changePercentLoading } from "src/app.slice";
import { unwrapResult } from "@reduxjs/toolkit";

const Home = ({ title }: { title: string }) => {
  const [displayTicket, setDisplayTicket] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = (event: Event) => {
      setDisplayTicket(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    document.title = title;
  }, []);

  useEffect(() => {
    const getData = async () => {
      dispatch(changePercentLoading(30));
      dispatch(changePercentLoading(70));
      const res = await dispatch(getPromo(""));
      unwrapResult(res);

      setTimeout(() => dispatch(changePercentLoading(100)), 500);
    };
    getData();
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Công Ty Sản Xuất Đèn Led Chiếu Sáng HT Light Level </title>
        <meta
          name="description"
          content="Công Ty Sản Xuất Đèn Led Chiếu Sáng HT Light Level "
        />
      </Helmet>
      <main className={styles.main}>
        <BigBanner />
        <PromoFirst />
        <ProductOpTran />
        <ProductAmTranDowLigh />
        <DenLedPanel />
        <DenLedTuyp />
        <DenDuongLed />
        <DiscountOnline />
        <ProductCategory />

        <ProductHistory styleTitle="uppercase text-textWhiteMain" />
      </main>
    </div>
  );
};
export default Home;

