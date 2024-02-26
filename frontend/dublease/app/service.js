const { list } = require("postcss");

const baseURL = "http://127.0.0.1:5000"

const RouteGenerator = {
  makeListingPost: () => encodeURI(`${baseURL}/make_listing_post`),
  getListingPosts: () => encodeURI(`${baseURL}/view_listing_posts`),
  searchListingPosts: (filters) => encodeURI(`${baseURL}/<endpoint>`),

  makeTenantPost: (tenantPost) => encodeURI(`${baseURL}/<endpoint>`),
  getTenantPosts: () => encodeURI(`${baseURL}/<endpoint>`),
  searchTenantPosts: (filters) => encodeURI(`${baseURL}/<endpoint>`)
}

const GET = async (route) => {
  console.log("DOING GET REQUEST WITH ROUTE", route)
  try {
      const response = await fetch(route, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          }
      });
      return await response.json();
  } catch (error) {
      console.error(error);
      return false;
  }
};

async function POST (route, body) {
  console.log("DOING POST REQUEST WITH ROUTE", route)
  try {
      const response = await fetch(route, {
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body: body ? body : "",
      });
      return await response.json();
  } catch (error) {
      console.error(error);
      return false;
  }
}


const makeListingPost = async (listingPost) => {
  return await POST(RouteGenerator.makeListingPost(), JSON.stringify(listingPost));
}

const getListingPosts = async (...args) => {
  return await GET(RouteGenerator.getListingPosts(...args.map(arg => arg.trim())));
}

const searchListingPosts = async (...args) => {
  return await GET(RouteGenerator.searchListingPosts(...args.map(arg => arg.trim())));
}

const makeTenantPost = async (...args) => {
  return await POST(RouteGenerator.makeTenantPost(...args.map(arg => arg.trim())));
}

const getTenantPosts = async (...args) => {
  return await GET(RouteGenerator.getTenantPosts(...args.map(arg => arg.trim())));
}

const searchTenantPosts = async (...args) => {
  return await GET(RouteGenerator.searchTenantPosts(...args.map(arg => arg.trim())));
}

module.exports = {
  makeListingPost, getListingPosts, searchListingPosts,
  makeTenantPost, getTenantPosts, searchListingPosts
}