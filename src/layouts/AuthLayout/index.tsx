import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/components/Footer/Footer";
import FooterNew from "src/components/Footer/FooterNew";
import Header from "src/components/Header/Header";
import Loading from "src/components/Loading";
function AuthLayout({ children }: any) {
  return (
    <div className="bg  w-[100vw]">
      <Loading />
      <main role="main" className="wrapper h-full">
        <div className="content bg ">
          <Outlet />
        </div>
      </main>
      <FooterNew />
    </div>
  );
}

export default React.memo(AuthLayout);

