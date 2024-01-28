import Link from 'next/link';

export default function EditButton({ articleId }) {
  return (
    (<Link
      href={`/editor/${articleId}`}
      className="btn btn-sm btn-outline-secondary">

      <i className="ion-edit" />Edit Article
    </Link>)
  );
}
