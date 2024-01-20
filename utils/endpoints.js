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
};

export const adminEndpoints = {
  login: `${baseURL}/api/v1/admin/auth/login`,
  getAdminProfile: `${baseURL}/api/v1/admin/profile`,
};
