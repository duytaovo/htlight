import { Helmet } from "react-helmet-async";
import TablePhone from "./TablesPhone";

export default function ListPhone() {
  return (
    <div>
      <Helmet>
        <title>{"Trang quản lý sản phẩm"}</title>
        <meta name="description" />
      </Helmet>
      <TablePhone />
    </div>
  );
}

