import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {BlogListData: []}

  componentDidMount() {
    this.getFetchedData()
  }

  getFetchedData = async () => {
    const url = 'https://xcool.in/api/test5m23'
    const jwtToken = '1|FWItRXH5DCAN9rjBjIhfH9KMnprvKZweoK2Jfi5T'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    const updatedData = fetchedData.data.map(eachItem => ({
      categoryId: eachItem.category_id,
      createdAt: eachItem.created_at,
      description: eachItem.description,
      id: eachItem.id,
      name: eachItem.name,
      parentId: eachItem.parentId,
      prerequisites: eachItem.prerequisites,
      teacher: eachItem.teacher,
      type: eachItem.type,
      updatedAt: eachItem.updated_at,
    }))
    this.setState({BlogListData: updatedData})
  }

  getFilteredItems = () => {
    const {BlogListData} = this.state
    const filteredList = BlogListData.filter(
      eachOne => eachOne.type === 'Category',
    )
    const filteredList1 = BlogListData.filter(
      eachBlog => eachBlog.type !== 'Category',
    )
    const resArray = filteredList.concat(filteredList1)
    return resArray
  }

  render() {
    const filteredList = this.getFilteredItems()
    console.log(filteredList)
    return (
      <ul className="blog-container">
        {filteredList.map(eachBlog => (
          <BlogItem blogData={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    )
  }
}
export default BlogList
