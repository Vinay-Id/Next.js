"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";


const Postcard = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        async function fetchPost() {
            const data = await axios.get("https://dummyjson.com/carts");
            console.log(data.data);
            setPost(data.data.carts[0].products)
        }
        fetchPost();
    }, []);
    return <div>
        {post.map((item) => {
            return <div key={item.id}>
                <img
                src={item.thumbnail}
                width={500}
                height={500}
                alt="Picture of the author"
            />
                <p>{item.title}</p><br /></div>
        })}
        {/* <Image src={}/> */}
    </div>;
};

export default Postcard;
