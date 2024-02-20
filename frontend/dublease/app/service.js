
const baseURL = "<base url here>"

const RouteGenerator = {
  makeListingPost: (listingPost) => encodeURI(`${baseURL}/<endpoint>?listingPost=${listingPost}`),
  getListingPosts: () => encodeURI(`${baseURL}/<endpoint>`),
  searchListingPosts: (filters) => encodeURI(`${baseURL}/<endpoint>?filters=${filters}`),

  makeTenantPost: (tenantPost) => encodeURI(`${baseURL}/<endpoint>`),
  getTenantPosts: () => encodeURI(`${baseURL}/<endpoint>`),
  searchTenantPosts: (filters) => encodeURI(`${baseURL}/<endpoint>?filters=${filters}`)
}

const GET = async (route) => {
  console.log("DOING GET REQUEST WITH ROUTE", route)
  try {
      const response = await fetch(route, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },
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
              "Content-Type": "application/json",
          },
          body: body ? body : ""
      });
      return await response.json();
  } catch (error) {
      console.error(error);
      return false;
  }
}

/* example call to enpoints using below functions:
import makeListingPost, getListingPosts from '../services';
let listingPostsCall = await getListingPosts();
if (listingPostsCall.success) {
  listingPostJSON = listingPost.data
}

listingPost = {"<JSON or some map object with listing info>"}
const response = await makeListingPost(listingPost);
if (response && response.success) {} 
*/

const makeListingPost = async (...args) => {
  return await POST(RouteGenerator.makeListingPost(...args.map(arg => arg.trim())));
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

