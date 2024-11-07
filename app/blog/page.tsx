import React from 'react'
import SampleBlogs from '@/config/sampleblogs'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import fs from "fs";
import matter from 'gray-matter';

interface BlogType{
    slug:string
    title:string
    description:string
    imageUrl?:string
};

const dirContents = fs.readdirSync("content","utf8");
console.log(dirContents);

const blogs:BlogType[] = dirContents.map((file)=>{
  const fileContent = fs.readFileSync(`content/${file}`,"utf8");
  const {data} = matter(fileContent); 
  const value: BlogType= { // this is the type of the object that we are going to return
    slug: data.slug,
    title: data.title,
    description: data.description,
  }
  return value;
})

console.log(blogs);

const BlogList = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center my-2">Our Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog: BlogType, index: number) =>  (
          <div
            key={index}
            className= "shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-64 object-cover object-top"
              src={blog.imageUrl?blog.imageUrl: ""}
              alt={blog.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant:"default" })}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList
