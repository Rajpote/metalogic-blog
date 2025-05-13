import Link from "next/link";
import Image from "next/image";
import { BlogCardProps } from "./type";

const BlogCard = ({ title, description, date, slug, image }: BlogCardProps) => {
   return (
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
         {image && <Image src={image} alt="Blog" width={600} height={300} className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105" />}

         <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <p className="text-xs text-gray-400 mb-4">📅 {date}</p>
            <Link href={`/blog/${slug}`} className="inline-block text-black bg-primary px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition">
               Read More →
            </Link>
         </div>
      </div>
   );
};

export default BlogCard;
