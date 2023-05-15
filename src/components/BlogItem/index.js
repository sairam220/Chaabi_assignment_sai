import './index.css'

const BlogItem = props => {
  const {blogData} = props
  return (
    <li className="blog-card">
      <h1 className="heading">{blogData.name}</h1>
      <div>
        <p>Type: {blogData.type}</p>
        <p>createdAt: {blogData.createdAt}</p>
        <p>updatedAt: {blogData.updatedAt}</p>
      </div>
    </li>
  )
}
export default BlogItem
