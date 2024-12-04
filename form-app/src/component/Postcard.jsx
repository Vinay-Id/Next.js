"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Postcard.module.css";

const Postcard = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get("https://dummyjson.com/carts");
        setPost(response.data.carts[0].products);
      } catch (error) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.cardContainer}>
      {post.map((item) => (
        <div key={item.id} className={styles.card}>
          <img
            src={item.thumbnail}
            alt={item.title}
            width={300}
            height={300}
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardPrice}>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Postcard;
