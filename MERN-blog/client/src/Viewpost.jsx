import React from "react";

function Viewpost({ posts }) {
  posts.forEach(function (post) {
    console.log(post.title);
  });

  return posts.map((post) => {
    <div className="postcard">
      <h1>{"" + post.title}</h1>
      <p className="author">Karthik sb</p>
      <p>
        lorem ipsum dolor sit amet, consectetur adip lolorem ipsum dolor sit
        amet, consectetur adip lolorem ipsum dolor sit amet, consectetur adip
        lolorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor
        sit amet, consectetur adip lolorem ipsum dolor sit amet, consectetur
        adip lolorem ipsum dolor sit amet, consectetur adip lolorem ipsum dolor
        sit amet, consectetur adip lorem lorem ipsum dolor sit amet, consectetur
        adip lolorem ipsum dolor sit amet, consectetur adip lolorem ipsum dolor
        sit amet, consectetur adip lolorem ipsum dolor sit amet, consectetur
        adip lorem lorem ipsum dolor sit amet, consectetur adip lolorem ipsum
        dolor sit amet, consectetur adip lolorem ipsum dolor sit amet,
        consectetur adip lolorem ipsum dolor sit amet, consectetur adip lorem
        lorem ipsum dolor sit amet, consectetur adip lolorem ipsum dolor sit
        amet, consectetur adip lolorem ipsum dolor sit amet, consectetur adip
        lolorem ipsum dolor sit amet, consectetur adip lorem
      </p>
    </div>;
  });
}

export default Viewpost;
