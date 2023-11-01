import { ApiService } from "../utilities/Api.service";

const categoriesServicesUrls = {
    getCategoriesUrl: "/categories",
};

const getCategories = () => {
    const response = ApiService.get(categoriesServicesUrls.getCategoriesUrl);
    return response;
};

const getCategoryById = (categoryId) => {
    const response = ApiService.get(`${categoriesServicesUrls.getCategoriesUrl}/${categoryId}`);
    return response;
};

const deleteCategoryById = (categoryId) => {
    const response = ApiService.delete(`${categoriesServicesUrls.getCategoriesUrl}/${categoryId}`);
    return response;
};

const addCategory = (payload) => {
// console.log(payload,'payload');
const response = ApiService.post(categoriesServicesUrls,payload);
return response;
}

export const CategoryServices = {
    getCategories,
    getCategoryById,
    deleteCategoryById,
    addCategory
};