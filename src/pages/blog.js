import React from "react"
import { Link } from "gatsby"
import useBlogData from "../hooks/useBlogData"

const Blog = () => {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <div>
        {blogData.map(blog => {
          return (
            <li>
              <Link>
                <h2>{blog.node.frontmatter.title}</h2>
              </Link>
              <p>{blog.node.excerpt}</p>
            </li>
          )
        })}
      </div>
    )
  }
  return (
    <section>
      <ul>{renderBlogData()}</ul>
    </section>
  )
}

export default Blog