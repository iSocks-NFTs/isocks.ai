const baseURL =
  process.env === "production"
    ? "http://localhost:1337"
    : "http://localhost:1337";

export const endpoints = {
  signup: `${baseURL}/api/v1/auth/signup`,
  login: `${baseURL}/api/v1/auth/login`,
  getUser: `${baseURL}/api/v1/profile`,
  verifyEmail: `${baseURL}/api/v1/verification/email/`,
  newPassword: `${baseURL}/api/v1/profile/password`,
  getOrders: `${baseURL}/api/v1/order`,
  createOrder: `${baseURL}/api/v1/product/checkout`,
  getOrderById: `${baseURL}/api/v1/order/`,
  createNewBillingAddress: `${baseURL}/api/v1/billing/address`,
  getAllBillingAddress: `${baseURL}/api/v1/billing/address`,
  getBillingAddressById: `${baseURL}/api/v1/billing/address/`,
  updateBillingAddressById: `${baseURL}/api/v1/billing/address/`,
};

export const adminEndpoints = {
  login: `${baseURL}/api/v1/admin/auth/login`,
  getAdminProfile: `${baseURL}/api/v1/admin/profile`,
  getGallery: `${baseURL}/api/v1/gallery`,
  uploadImageToGallery: `${baseURL}/api/v1/gallery/image`,
  addProduct: `${baseURL}/api/v1/product`,
  updateProduct:`${baseURL}/api/v1/product/`,
  getProducts: `${baseURL}/api/v1/product`,
  getProductById: `${baseURL}/api/v1/product/`,
  uploadProductImages: `${baseURL}/api/v1/product/image/`,
  setProductImage: `${baseURL}/api/v1/product/image/`,
  deleteProduct: `${baseURL}/api/v1/product/`,
  dashboardStats: `${baseURL}/api/v1/admin/dashboard`,
};
