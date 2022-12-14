// const baseUrl = process.env.API || "https://flipkart-rest-server.herokuapp.com";
const baseUrl = "https://flipkart-backend-ft7h.vercel.app";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
