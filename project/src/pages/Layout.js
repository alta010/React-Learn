import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/windows">Windows</Link>
          </li>
          <li>
            <Link to="/Linux">Linux</Link>
          </li>
          <li>
            <Link to="/Mac">Mac</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;