import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer/Footer";
import FooterNew from "src/components/Footer/FooterNew";
import Header from "src/components/Header/Header";
import Loading from "src/components/Loading";
function CommonLayout({ children }: any) {
  return (
    <div className="bg pt-[110px] w-full">
      <Loading />
      <Header />
      <main role="main" className="wrapper h-full">
        <div className="content bg ">
          <Outlet />
          <FooterNew />
        </div>
      </main>
    </div>
  );
}

export default React.memo(CommonLayout);

