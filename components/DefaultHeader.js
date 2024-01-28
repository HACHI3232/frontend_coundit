import Link from "next/link";

export function DefaultHeader() {
  return (
      <nav className="navbar navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            conduit
          </a>
          <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
              <Link href="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="nav-link">Sign in</Link>
            </li>
            <li className="nav-item">
              <Link href="/register" className="nav-link">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}
