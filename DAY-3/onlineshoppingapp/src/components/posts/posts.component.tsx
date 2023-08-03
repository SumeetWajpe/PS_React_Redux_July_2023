import React, { useEffect, useState } from "react";
import { PostModel } from "../../models/post.model";

const Posts: React.FC = () => {
  let [posts, setPosts] = useState<PostModel[]>([]);
  useEffect(() => {
    (async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let responseposts = await res.json();
      setPosts(responseposts);
    })();
  }, []);
  return (
    <div>
      <header>
        <h1>List Of Posts</h1>
      </header>
      <main>
        {posts?.length ? (
          <ul className="list-group">
            {posts?.map(post => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </ul>
        ) : (
          "Loading.."
        )}
      </main>
    </div>
  );
};

export default Posts;
