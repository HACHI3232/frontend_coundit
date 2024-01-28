import axios from 'axios';
import Editor from '../../components/Editor';

export async function getServerSideProps(context) {
  const { id } = context.params;
  try {
    const res = await axios.get(`http://localhost:3000/articles/${id}`);
    return {
      props: { initialArticle: res.data.article },
    };
  } catch (error) {
    console.error('記事の取得に失敗しました', error);
    return {
      props: { error: '記事の取得に失敗しました。' },
    };
  }
}

export default function ArticleEditor({ initialArticle }) {
  return (
    <Editor initialArticle={initialArticle} />
  );
}
