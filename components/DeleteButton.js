import axios from "axios";


export default function DeleteButton({ articleId, onDeleteSuccess }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/articles/${articleId}`);
      onDeleteSuccess(); // 削除成功時の処理
      alert('記事が削除されました。'); // アラートを表示
    } catch (error) {
      console.error('記事の削除に失敗しました', error);
    }
  };

  return (
    <button className="btn btn-sm btn-outline-danger" onClick={handleDelete}>
      <i className="ion-trash-a" /> Delete Article
    </button>
  );
}
