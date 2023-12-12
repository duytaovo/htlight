import { SuccessResponse } from "src/types/utils.type";
import http, { httpNew } from "src/utils/http";

const categoryService = {
  getcategorys(params: any) {
    return httpNew.get<SuccessResponse<any>>("/admin/category", { params });
  },

  getDetailcategory(params: any) {
    return httpNew.get<SuccessResponse<any[]>>(`/admin/category/${params}`);
  },
  addCategory(data: any) {
    return httpNew.post("/admin/category", data);
  },
  getCategorys(params: any) {
    return httpNew.get<SuccessResponse<any>>("/admin/category", { params });
  },
  getDetailCategory(params: any) {
    return httpNew.get<SuccessResponse<any[]>>(`/admin/category/${params}`, {
      params,
    });
  },
  updateCategory({ _id, body }: any) {
    return httpNew.post<SuccessResponse<any>>(
      `/admin/category/update/${_id}`,
      body,
    );
  },
  deleteCategory(idcategory: string[]) {
    return httpNew.post<SuccessResponse<any>>(
      `/admin/category/delete/${idcategory}`,
    );
  },
};

export default categoryService;

