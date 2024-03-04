const { list } = require("postcss");

const baseURL = "http://127.0.0.1:8080"

const RouteGenerator = {
  makeListingPost: () => encodeURI(`${baseURL}/make_listing_post`),
  getListingPosts: () => encodeURI(`${baseURL}/view_listing_posts`),
  filterListingPosts: () => encodeURI(`${baseURL}/view_filtered_listing_posts`),
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

const filterListingPosts = async (filterRequest) => {
  return await POST(RouteGenerator.filterListingPosts(), JSON.stringify(filterRequest));
}


module.exports = {
  makeListingPost, getListingPosts, filterListingPosts
}