import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";



const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);
    return (
<div>
    
<Header />
        <Nav />
        <div className="w-11/12 mx-auto">
        
    
          <div className="flex items-center justify-center">
            <div className="card w-[600px] h-auto bg-base-100 shadow-xl">
              <div className="card-body justify-center p-10">
                <figure>
                  <img
                    src={news.image_url}
                    alt="News Image"
                    className="w-full h-64 object-cover"
                  />
                </figure>
                <h2 className="card-title text-3xl font-bold">{news.title}</h2>
                <p className="text-xs">{news.details}</p>
                <Link to={`/category/${news?.category_id}`} className="btn bg-slate-600 btn-wide mr-8 text-white">
                  Back To Category
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
};

export default NewsDetails;

