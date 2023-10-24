import { ApiService } from "../utilities/Api.service";

const categoriesServicesUrls = {
    getCategoriesUrl : "/categories",
};

const getCategories = () => {
    const response = ApiService.get(categoriesServicesUrls.getCategoriesUrl);
    return response;
};

const getCategoryById = (categoryId) => {
    const response =ApiService.get(`${categoriesServicesUrls.getCategoriesUrl}/${categoryId}`)
    return response;
}

export const CategoryServices = {
    getCategories,
    getCategoryById
};