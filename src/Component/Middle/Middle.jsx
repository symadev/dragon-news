import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News from "../News/News";

const Middle = () => {
    const { id } = useParams();
    const [newsList, setNewsList] = useState([]);
    
   

    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
            .then(res => res.json())
            .then(data => setNewsList(data.data))
            
    }, [id]);

    return (
        <div>
            <h2>Dragon News Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 p-4">
                {newsList.map((news,index) => (
                <News key={news._id} news={news} ></News>
                ))}
           </div>
        </div>
    );
};

export default Middle;
// আমরা useParams ব্যবহার করি কারণ এটি React Router থেকে URL-এর ডাইনামিক পার্ট (যেমন :id) অ্যাক্সেস করতে সাহায্য করে।
// এবং কেউ category/03 পেজে গেলে, 03 হল ডাইনামিক আইডি।