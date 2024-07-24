export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "http://localhost:8888/product";
export const apiEndpoint = "http://localhost:8888";
export const dbAPI = {
  getdataList: (type) => `${apiEndpoint}/${type}`,
  getProductDetails: (productId) =>
    `http://localhost:8888/product/id/${productId}`,
  getPostDetails: (postId) => `http://localhost:8888/post/${postId}`,
  getImage: (url) => `${apiEndpoint}/image/${url}`,
};
