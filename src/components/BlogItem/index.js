import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, topic, imageUrl, avatarUrl, author} = blogDetails
  return (
    <li className="list-item-container">
      <Link to={`/blogs/${id}`}>
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} className="image" />
          <div className="item-info-container">
            <p className="item-topic">{topic}</p>
            <h1 className="item-title">{title}</h1>
            <div className="avatar-info-container">
              <img
                src={avatarUrl}
                alt={`avatar${id}`}
                className="avatar-image"
              />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BlogItem
