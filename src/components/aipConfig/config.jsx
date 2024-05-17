export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "http://localhost:3000";
const apiEndpoint = "http://localhost:3000";
export const dbAPI = {
  getdataList: (type) => `${apiEndpoint}/${type}`,
  getProductDetails: (productId) =>
    `http://localhost:3000/products/${productId}`,
  getPostDetails: (postId) => `http://localhost:3000/posts/${postId}`,
};
