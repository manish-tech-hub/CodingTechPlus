import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../Context/BlogContext";
import "../css/blog.css";

const categories = [
  "All",
  "AI",
  "React",
  "Networking",
  "Python",
  "Career Tips",
  "Web Development",
];

function BlogCard({ blog }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="blog-card">
      <div className="blog-content">
        <span className="blog-date">📅 
          {new Date(blog.date).toLocaleDateString("en-US", { month: "long", day: "numeric" })}
        </span>
        <h3>{blog.title}</h3>
        <span className="blog-author">✍️ By {blog.author}</span>
        <span className="blog-tags">🏷️ {blog.tags.join(", ")}</span>
        <p className={`blog-excerpt ${expanded ? "expanded" : ""}`}>
          {expanded ? blog.excerpt : blog.excerpt.slice(0, 200)}
          {!expanded && blog.excerpt.length > 200 ? "..." : ""}
        </p>
        {blog.excerpt.length > 200 && (
          <button className="see-more-btn" onClick={toggleExpand}>
            {expanded ? "See Less" : "See More..."}
          </button>
        )}
      </div>
    </div>
  );
}

function Blog() {
  const blogData = useContext(BlogContext) || [];
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6); 

  // filter blogs by category
  const filteredBlogs =
    filter === "All"
      ? blogData
      : blogData.filter((blog) => blog.tags.includes(filter));

  // get featured blog (example: first AI blog)
  const featuredBlog = blogData.find((blog) => blog.tags.includes("AI"));

  // slice blogs for pagination
  const displayedBlogs = filteredBlogs.slice(0, visibleCount);

  return (
    <div className="blog-container">
      {/* Hero Section */}
      <section className="blog-hero">
        <h1>Tech Insights & Tutorials</h1>
        <p>Stay updated with our latest articles and coding tips.</p>
        <input
          type="search"
          placeholder="Search blogs..."
          className="blog-search"
        />
      </section>

      {/* Sidebar */}
      <aside className="blog-sidebar">
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            {categories.map((cat) => (
              <li
                key={cat}
                className={filter === cat ? "active" : ""}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="popular-posts">
          <h3>Recent Posts</h3>
          <ul>
            {blogData.slice(0, 7).map((blog) => (
              <li key={blog.id}>{blog.title}</li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <div className="blog-main">
        {/* Featured Blog */}
        {featuredBlog && (
          <div className="featured-blog">
            <div className="featured-content">
              <h2>{featuredBlog.title}</h2>
              <p>{featuredBlog.excerpt}</p>
              <button>Read More</button>
            </div>
          </div>
        )}

        {/* Blog Cards Grid */}
        <div className="blog-grid">
          {displayedBlogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredBlogs.length && (
          <div className="load-more-wrapper">
            <button
              className="load-more-btn"
              onClick={() => setVisibleCount((prev) => prev + 9)}
            >
              Load More
            </button>
          </div>
        )}

        {/* Call to Action */}
        <section className="blog-cta">
          <h2>Enjoyed the blog?</h2>
          <p>Join our hands-on coding programs today and become job ready!</p>
          <Link to="/course">
            <button className="cta-btn">Explore Courses</button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Blog;
