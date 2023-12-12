import { lazy } from "react";
import Search from "src/pages/Search";
import path, { pathAdmin } from "src/constants/path";
import KhongTimThay from "src/pages/KhongTimThay/NotFound";
import PhuKien from "src/pages/PhuKien";
import AboutUs from "src/pages/AboutUs";
import HomeAdmin from "src/pages/Admin/home/Home";

const CodeValidator = lazy(
  () => import("src/pages/Auth/ForgotPasword/ValidatorCode"),
);
const Home = lazy(() => import("src/pages/Home/Home"));
const Payment = lazy(() => import("src/pages/Payment/Payment"));
const CodeValidatorActiveAccount = lazy(
  () => import("src/pages/Auth/AcctiveAccount/ValidatorCode"),
);
const ActiveAccount = lazy(() => import("src/pages/Auth/AcctiveAccount"));
const ForgotPassword = lazy(() => import("src/pages/Auth/ForgotPasword"));
const ProductDetail = lazy(() => import("src/pages/ProductDetail/LedDetail"));

const Login = lazy(() => import("src/pages/Auth/Login"));
const Register = lazy(() => import("src/pages/Auth/Register"));

const Profile = lazy(() => import("src/pages/User/pages/Profile"));
const CartNew = lazy(() => import("src/pages/CartNew"));
// const ChangePassword = lazy(
//   () => import("src/pages/User/pages/ChangePassword")
// );

export const routeMain = [
  {
    path: path.home,
    Component: Home,
  },
  {
    path: path.intro,
    Component: AboutUs,
  },

  {
    path: path.search,
    Component: Search,
  },
  {
    path: path.cartNew,
    Component: CartNew,
  },
  {
    path: "*",
    Component: KhongTimThay,
  },
];

const urls: string[] = [
  "smartphone/detail/:productSlug",
  "laptop/detail/:productSlug",
  "tablet/detail/:productSlug",
  "watch/detail/:productSlug",
  "man-hinh-may-tinh/detail/:productSlug",
  "may-tinh-de-ban/detail/:productSlug",
  "accessory/detail/:productSlug",
  "smartwatch/detail/:productSlug",
  "ram/detail/:productSlug",
  "rom/detail/:productSlug",
  "processor/detail/:productSlug",
  "graphics-card/detail/:productSlug",
  "mouse/detail/:productSlug",
  "loudspeaker/detail/:productSlug",
  "adapter/detail/:productSlug",
  "microphone/detail/:productSlug",
  "keyboard/detail/:productSlug",
  "radiator/detail/:productSlug",
  "computer-case/detail/:productSlug",
  "mainboard/detail/:productSlug",
  "monitor/detail/:productSlug",
  "computer-power/detail/:productSlug",
];

const urlsAccess: string[] = [
  "/accessory/ledBuld",
  "/accessory/ledOpTran",
  "/accessory/processor",
  "/accessory/graphics-card",
  "/accessory/mouse",
  "/accessory/loudspeaker",
  "/accessory/adapter",
  "/accessory/backup-charger",
  "/accessory/microphone",
  "/accessory/radiator",
  "/accessory/keyboard",
  "/accessory/earphone",
  "/accessory/mainboard",
  "/accessory/computer-case",
  "/accessory/monitor",
  "/accessory/computer-power",
];

export const productDetailRoutes = urls.map((url) => ({
  path: url,
  Component: ProductDetail,
}));

export const accessRoutes = urlsAccess.map((url) => ({
  path: url,
  Component: PhuKien,
}));

export const routeAuth = [
  {
    path: path.login,
    Component: Login,
  },
  {
    path: path.register,
    Component: Register,
  },

  {
    path: path.forgotPassword,
    Component: ForgotPassword,
  },
  {
    path: path.sendCode,
    Component: CodeValidator,
  },
];

export const routeUser = [
  {
    path: path.profile,
    Component: Profile,
  },
  {
    path: path.payment,
    Component: Payment,
  },

  {
    path: path.activeAccount,
    Component: ActiveAccount,
  },
  {
    path: path.sendCodeActive,
    Component: CodeValidatorActiveAccount,
  },

  {
    path: path.historyPurchase,
    Component: History,
  },
];

export const routeMainAdmin = [
  {
    path: pathAdmin.home,
    Component: HomeAdmin,
  },

  {
    path: pathAdmin.products,
    // Component: TableProduct,
  },
];

