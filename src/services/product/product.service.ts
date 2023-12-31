import http, { httpNew } from "src/utils/http";

export const productService = {
  getAllProducts({ body, params }: any) {
    return httpNew.post(`/admin/products`, body, { params: params });
  },
  getProduct(id: string) {
    return httpNew.get(`/products/${id}`);
  },

  getProductByName(name: string) {
    return http.get(`/products/${name}`);
  },
  getProductByBrand(category: string, brand: string) {
    return http.get(`/products/?category=${category}&brand=${brand}`);
  },
  getProductByCategoryBrandSex(category: string, brand: string, sex: string) {
    return http.get(
      `/products/?category=${category}&brand=${brand}&sex=${sex}`,
    );
  },
  getProductByCategorySex(category: string, sex: string) {
    return http.get(`/products/?category=${category}&sex=${sex}`);
  },

  getProductByPolicy(category: string, brand: string) {
    return http.get(`/products/?category=${category}${brand}`);
  },
  getProductBySlug(slug: string) {
    return http.get(`/products/?slug=${slug}`);
  },
  getProductByLocation(location: string) {
    return http.get(`/products/?location=${location}`);
  },
  queryProduct(a: string[], b: string[], c: string[], d: string[]) {
    const query = Array.from(arguments)
      .map((param) => {
        return `${param[0]}=${param[1]}`;
      })
      .join("&");
    return http.get(`/products/?${query}`);
  },
  queryProductWatch(string: []) {
    const query = string
      .map((e: any) => {
        const key = Object.keys(e);
        const value = Object.values(e);
        return `${key[0]}=${value[0]}`;
      })
      .join("&");
    return http.get(`/products/?category=watch&${query}`);
  },
  // queryProduct(["brand", "nokia"], ["title", "Nokia 500"])
  getArticle(id: string) {
    return http.get(`/productarticle/?productId=${id}`);
  },
};

