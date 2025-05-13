import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

const BlogPost = () => {
   const router = useRouter();
   const { slug } = router.query;

   // You can replace this with a real fetch from a CMS or database
   const blogPost = {
      title: "How to Build a Full-Stack App with MERN",
      content: "This is a detailed guide to building full-stack apps with MERN...",
      date: "May 1, 2025",
   };

   if (!slug) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         <Navbar />
         <section className="max-w-7xl mx-auto p-8">
            
            <h1 className="text-4xl font-bold">{blogPost.title}</h1>
            <p className="mt-4 text-sm text-secondary">Published on {blogPost.date}</p>
            <div className="mt-8">{blogPost.content}</div>
         </section>
         <Footer />
      </div>
   );
};

export default BlogPost;
