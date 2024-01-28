import Link from 'next/link';

export default function EditButton({ articleId }) {
  return (
    <Link href={`/editor/${articleId}`}>
      <a className="btn btn-sm btn-outline-secondary">
        <i className="ion-edit" /> Edit Article
      </a>
    </Link>
  );
}
