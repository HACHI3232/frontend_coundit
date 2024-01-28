import React, { useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import { CustomHead } from "../../components/CustomHead";
import { Navbar } from "../../components/Navbar";


export default function Editor() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const articleData = {
        title,
        description,
        body,
      };
  
      if (initialArticle) {
        // 編集の場合の処理
        await axios.put(`http://localhost:3000/articles/${initialArticle.id}`, { article: articleData });
      } else {
        // 新規作成の場合の処理
        await axios.post("http://localhost:3000/articles", { article: articleData });
      }
  
      router.push("/");
    } catch (error) {
      console.error("Article operation failed", error);
    }
  };

  return (
    <div className="editor-page">
      <CustomHead />
      <Navbar/>
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ul className="error-messages">
              {/* <li>That title is required</li> */}
            </ul>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Article Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What's this article about?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Write your article (in markdown)"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </fieldset>
                {/* <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter tags"
                  />
                  <div className="tag-list">
                    <span className="tag-default tag-pill">
                      {" "}
                      <i className="ion-close-round" /> tag{" "}
                    </span>
                  </div>
                </fieldset> */}
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="submit"
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
