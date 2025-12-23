"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { posts } from "@/src/data/posts";

export default function TopCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  // derive carousel items from posts WITH images
  const imagePosts = posts.filter((post) => post.image);
  const carouselPosts = [...imagePosts, ...imagePosts, ...imagePosts];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const scrollAmount = 250;
    const intervalTime = 4000;

    const interval = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }

      el.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track" ref={ref}>
        {carouselPosts.map((post, index) => (
          <Link
            key={`${post.id}-${index}`}
            href={`/post/${post.id}`}
            style={{ textDecoration: "none" }}
          >
            <motion.div
              className="carousel-card"
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={post.image!}
                alt={post.title}
                fill
                className="carousel-image"
              />
              <div className="carousel-title">{post.title}</div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
