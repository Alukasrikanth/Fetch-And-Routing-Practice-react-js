// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogItemDetails: {},
    isSpinnerLoading: true,
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const responseData = await response.json()
    console.log(responseData)
    const updatedBlogItemDetails = {
      author: responseData.author,
      avatarUrl: responseData.avatar_url,
      id: responseData.id,
      title: responseData.title,
      content: responseData.content,
      imageUrl: responseData.image_url,
    }
    console.log(updatedBlogItemDetails)
    this.setState({
      blogItemDetails: updatedBlogItemDetails,
      isSpinnerLoading: false,
    })
  }

  render() {
    const {blogItemDetails, isSpinnerLoading} = this.state
    const {title, avatarUrl, imageUrl, author, content} = blogItemDetails
    return (
      <div className="blog-details-container">
        {isSpinnerLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-info-container">
            <h1 className="blog-details-title">{title}</h1>
            <div className="avatar-details-info">
              <img
                src={avatarUrl}
                alt={author}
                className="avatar-details-image"
              />
              <p className="author-details">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="image-details" />
            <p className="content-details">{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
