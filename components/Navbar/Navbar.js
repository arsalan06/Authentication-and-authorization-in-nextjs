import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
// className={`main-nav ${!session && loading ? "loading" : "loaded"}`}
function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className="main-nav ">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        {!session && (
          <li>
            <Link
              href="/api/auth/signin"
              onClick={(e) => {
                e.defaultPrevented();
                signIn();
                // if don't went to go github the pass a string to signin function
                //   signIn("github");
              }}
            >
              Sign In
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link
              href="/api/auth/signout"
              onClick={(e) => {
                e.defaultPrevented();
                signOut();
              }}
            >
              Sign Out
            </Link>
          </li>
        )}
        {/* {!loading && !session && (
          <li>
            <Link href="/api/auth/signin">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href="/api/auth/signout">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )} */}
      </ul>
    </nav>
  );
}

export default Navbar;
