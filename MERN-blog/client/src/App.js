import "./App.css";
import Create from "./Create";
import Viewpost from "./Viewpost";
import {
  Switch, // instead of "Switch"
  Route,
  Link,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const [blogPosts, setBlogPosts] = useState([]);

  console.log(title + content + author);

  function sendData() {
    Axios.post("http://localhost:5000/add", {
      title: title,
      content: content,
      author: author,
    }).then(function (response) {
      console.log(response.statusText);
    });
  }

  useEffect(() => {
    Axios.get("http://localhost:5000/getpost").then(function (response) {
      setBlogPosts(response.data);
    });
  }, [setBlogPosts]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/add">
          <div className="nav">
            <div className="left-section">
              <h1>Blog</h1>
            </div>
            <div className="left-section">
              <ul>
                <Link to="/post" className="links">
                  View Post
                </Link>
              </ul>
            </div>
          </div>
          <div className="container">
            <Create
              title={setTitle}
              content={setContent}
              author={setAuthor}
              setdata={sendData}
            />
          </div>
        </Route>

        <Route exact path="/post">
          <div className="nav">
            <div className="left-section">
              <h1>Blog</h1>
            </div>
            <div className="left-section">
              <ul>
                <Link to="/add" className="links">
                  Create Post
                </Link>
              </ul>
            </div>
          </div>
          <div className="postcontainer">
            {blogPosts.map((blog) => (
              <div className="postcard">
                <h1>{blog.title}</h1>
                <p className="author">{blog.author}</p>
                <p className="content">{blog.body}</p>
              </div>
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
