// useEffect for connecting to external source

import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); //store an error in state to output in in the browser

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        // 2 error in case that connected to server but response is not ok, or endpoint is wrong
        if (!res.ok) {
          throw new Error("connected to server but could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
        // set error to null if we have data
        setError(null);
      })
      // 1 error if couldn't even connect to the server
      .catch((err) => {
        // so that loading message dissapear
        setIsLoading(false);
        setError(err.message);
        // console.log(err.message);
      });
  }, []);

  return (
    <div className="home">
      {/* output if have a value for error, conditional rendering (when we set an error) */}
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
