const path = {
  home: "/",
  login: "/login",
  intro: "/intro",
  logout: "/logout",
  forgotPassword: "/forgotPassword",
  sendCode: "/sendCode",
  register: "/register",
  phone: "/smartphone",
  laptop: "/laptop",
  tablet: "/tablet",
  smartwatch: "/smartwatch",
  maycu: "/maycu",
  accessory: "/accessory",
  cart: "/cart",
  samsung: "/samsung",
  history: "/history",
  lenovo: "/lenovo",
  pc: "/pc",
  dienthoaiDetail: "smartphone/detail/:productSlug",
  laptopDetail: "laptop/detail/:productSlug",
  tabletDetail: "tablet/detail/:productSlug",
  watchDetail: "watch/detail/:productSlug",
  monitor: "man-hinh-may-tinh/detail/:productSlug",
  maytinhdeban: "may-tinh-de-ban/detail/:productSlug",
  phukienDetail: "phukien/detail/:productSlug",
  smartwatchDetail: "smartwatch/detail/:productSlug",
  ////
  user: "/user",
  profile: "/user/profile",
  changePassword: "/user/password",
  historyPurchase: "/user/purchase",
  cartNew: "/user/cartNew",
  sendCodeActive: "/user/sendCodeActive",
  activeAccount: "/user/activeAccount",
  payment: "/user/payment",
  comment: "/user/comment",
  search: "/search",
} as const;

export const pathAdmin = {
  home: "/admin/home",
  products: "/admin/products/led",
  new_products: "/admin/products/led/new",
};

export default path;

