import { Link, Outlet } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import "./Blog.css";

function Blog() {
  return (
    <>
      <MyNavbar />
      <div className="articl">
        <h1>صفحهء مقالات</h1>
        <hr />
        <div className="btncontainer">
          <Link className="link-btn" to="php">
            php article
          </Link>
          <Link className="link-btn" to="js">
            js article
          </Link>
          <Link className="link-btn" to="react">
            react article
          </Link>
        </div>
        <hr />
        <Outlet />
      </div>
    </>
  );
}

export default Blog;
