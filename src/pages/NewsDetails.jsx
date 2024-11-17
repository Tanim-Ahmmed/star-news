import { Link, useLoaderData } from "react-router-dom";
import RightNav from "../components/layout-component/RightNav";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  return (
    <div>
      <header className="w-11/12 mx-auto">
       <Header></Header>
       <Navbar></Navbar>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-bold mb-3">Star news</h2>

          <div className=" bg-base-100  shadow-xl">
            <figure>
              <img
                src={news?.image_url}
                alt="News"
              />
            </figure>
            <div className="">
              <h2 className="card-title">
             {news.title}
              </h2>
              <p>{news.details}</p>
            </div>
            <Link to={`/category/${news.category_id}`}  className="btn btn-primary">Back to category</Link>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
