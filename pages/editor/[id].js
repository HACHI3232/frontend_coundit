// 必要なモジュールをインポート
import { CustomHead } from "../../components/CustomHead";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// 記事編集用のコンポーネント
export default function ArticleEditor() {
  // 状態変数を定義
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [initialArticle, setInitialArticle] = useState(null);

  // useRouterフックを使用してルーターインスタンスを取得
  const router = useRouter();
  const { id } = router.query; // パスパラメータから記事IDを取得

  // コンポーネントがマウントされたら記事データを取得
  useEffect(() => {
    // 記事データを取得する非同期関数
    const fetchArticle = async () => {
      if (id) {
        try {
          const { data } = await axios.get(`http://localhost:3000/articles/${id}`);
          setTitle(data.title);
          setDescription(data.description);
          setBody(data.body);
          setInitialArticle(data);
        } catch (error) {
          console.error("記事の取得に失敗しました", error);
        }
      }
    };

    fetchArticle();
  }, [id]); // idの値が変わるたびに効果を再実行

  // フォーム送信時のイベントハンドラー
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // PUTリクエストを使用して記事データを更新
      const response = await axios.put(
        `http://localhost:3000/articles/${id}`,
        {
          article: {
            title,
            description,
            body,
          },
        }
      );

      // 更新成功後、記事ページにリダイレクト
      router.push(`/article/${id}`);
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
              {/* エラーメッセージを表示 */}
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
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                </fieldset>
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
