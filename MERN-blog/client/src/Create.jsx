import React from "react";

function create(props) {
  function btnClick() {
    props.setdata();
  }
  return (
    <div>
      <div className="create">
        <h1>Add your Blog</h1>

        <form>
          <label for="title">Title</label>
          <br></br>

          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => props.title(e.target.value)}
          />
          <br></br>
          <label for="content">content</label>
          <br></br>
          <textarea
            id="content"
            name="content"
            onChange={(e) => props.content(e.target.value)}
          ></textarea>
          <br></br>
          <label for="title">Author</label>
          <br></br>

          <input
            type="text"
            name="author"
            id="author"
            onChange={(e) => props.author(e.target.value)}
          />

          <br></br>
          <button onClick={btnClick} type="submit">
            Add post
          </button>
        </form>
      </div>
    </div>
  );
}

export default create;
