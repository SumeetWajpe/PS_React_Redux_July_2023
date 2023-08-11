import axios from "axios";

async function LoadPosts() {
  let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  console.log(response.data);
}

LoadPosts();
