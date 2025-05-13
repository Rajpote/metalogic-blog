import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { featuredBlog, blogPosts } from "./data/data";

const Home = () => {
   return (
      <div>
         <Navbar />
         <Hero title={featuredBlog.title} description={featuredBlog.description} date={featuredBlog.date} slug={featuredBlog.slug} image={featuredBlog.image} />
         <section className="max-w-7xl mx-auto p-8">
            <h2 className="text-2xl font-semibold mb-8">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
               {blogPosts.map((post) => (
                  <BlogCard key={post.slug} title={post.title} description={post.description} date={post.date} slug={post.slug} image={post.image} />
               ))}
            </div>
         </section>
         <Newsletter />
         <Footer />
      </div>
   );
};

export default Home;
