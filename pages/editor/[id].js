import { CustomHead } from "../../components/CustomHead";
import { Header } from "../../components/Header";
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ArticleEditor({ initialArticle }) {
  // フォームの状態を管理する state 変数を定義
  const [title, setTitle] = useState(initialArticle ? initialArticle.title : "");
  const [description, setDescription] = useState(initialArticle ? initialArticle.description : "");
  const [body, setBody] = useState(initialArticle ? initialArticle.body : "");

  // ルーターを取得
  const router = useRouter();

  // フォームが送信されたときの処理
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // フォームの値をサーバーに送信し、記事を更新する処理を追加
      const response = await axios.put(`http://localhost:3000/articles/${initialArticle.id}`, {
        article: {
          title,
          description,
          body,
        },
      });

      // 更新が成功したら適切なリダイレクト処理を実行
      router.push(`/article/${initialArticle.id}`);
    } catch (error) {
      console.error("記事の更新に失敗しました", error);
    }
  };

  return (
    <div className="editor-page">
      <CustomHead />
      <Header />
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <ul className="error-messages">
              {/* エラーメッセージを表示する場合のコード */}
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
                {/* その他のフォーム要素を追加 */}
                <button
                  className="btn btn-lg pull-xs-right btn-primary"
                  type="submit"
                >
                  Update Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
