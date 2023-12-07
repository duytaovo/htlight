import "./listproduct.scss";
import ProductCard from "../ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideProduct from "../SlideProduct/SlideProduct";
import { Pagination } from "antd";
import { useAppDispatch, useAppSelector } from "src/hooks/useRedux";
import {
  getProductByProductSlug,
  getProductByProductSlugId,
} from "src/store/shopping-cart/cartItemsSlide";

type Props = {
  isSlide: boolean;
  products: any;
  category?: string;
  handlePageChange?: any;
  currentPage?: number;
};
const ListProduct = ({
  isSlide,
  products,
  category,
  handlePageChange,
  currentPage = 0,
}: Props) => {
  const pageSize = 10; // Số phần tử trên mỗi trang
  // useEffect(() => {
  //   dispatch(
  //     getProductByProductSlug({ slug: category, pageNumber: currentPage })
  //   );
  // }, [currentPage]);
  const handlePageChangeLocal = (page: number) => {
    handlePageChange && handlePageChange(page - 1);
  };
  return (
    <>
      {isSlide ? (
        <div className="">
          <SlideProduct products={products} />
        </div>
      ) : (
        <div className="">
          <div className="mt-6 grid grid-cols-5 gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {/* {products?.data &&
              products?.data?.map((product: any, index: number) => (
                <div className="col-span-1" key={product.id}>
                  <ProductCard product={product} category={category} docquyen />
                </div>
              ))} */}
            {products?.map((product: any) => (
              <div className="w-full" key={""}>
                <div className="">
                  <ProductCard
                    docquyen
                    key={product.id}
                    category="ledOpTran"
                    product={product}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="my-8  m-auto bg-white/40 w-fit text-white flex justify-center">
            <Pagination
              current={currentPage + 1}
              pageSize={pageSize}
              total={products?.totalElements}
              onChange={handlePageChangeLocal}
            />
          </div>
        </div>
      )}

      {/* <a className="listcontent__btn">Xem tất cả sản phẩm</a> */}
    </>
  );
};
export default ListProduct;

