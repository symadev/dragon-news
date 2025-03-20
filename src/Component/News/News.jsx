import React from "react";
import { FaRegEye, FaStar, FaShareAlt, FaBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl border ">
      {/* Header Section */}
      <div className="flex justify-between p-4 bg-gray-100">
        <span className="text-blue-600 font-bold">{news.category}</span>
        <div className="flex space-x-2">
          <FaBookmark className="text-gray-500 hover:text-blue-600 cursor-pointer" />
          <FaShareAlt className="text-gray-500 hover:text-blue-600 cursor-pointer" />
        </div>
      </div>

      {/* Image */}
      <figure>
        <img src={news.image_url} alt="News" className="w-full h-48 object-cover" />
      </figure>

      {/* Content */}
      <div className="card-body">
        <div className="flex items-center space-x-3">
          <img src={news.author.img} alt="Author" className="w-8 h-8 rounded-full" />
          <div>
            <h2 className="text-sm font-semibold">{news.author.name}</h2>
            <p className="text-xs text-gray-500">{news.author.published_date}</p>
          </div>
        </div>

        <h2 className="card-title text-lg">{news.title}</h2>
        <p className="text-sm text-gray-600">{news.details.slice(0, 100)}...</p>
        
        {/* Footer */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center space-x-1 text-yellow-500">
            <FaStar />
            <span className="text-sm font-semibold">{news.rating.number}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <FaRegEye />
            <span className="text-sm">{news.total_view}</span>
          </div>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
