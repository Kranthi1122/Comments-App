import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const detailsList = []

class Comments extends Component {
  state = {input: '', comment: '', detailsPerson: detailsList}

  inputBox = event => {
    this.setState({input: event.target.value})
  }

  commentsBox = event => {
    this.setState({comment: event.target.value})
  }

  submitOf = event => {
    event.preventDefault()
    const {input, comment} = this.state
    const person = {
      id: uuidv4(),
      input,
      comment,
      isLiked: false,
      date: new Date(),
    }
    this.setState(prevState => ({
      detailsPerson: [...prevState.detailsPerson, person],
      input: '',
      comment: '',
    }))
  }

  isLikedOrNot = id => {
    this.setState(prevState => ({
      detailsPerson: prevState.detailsPerson.map(eachName => {
        if (eachName.id === id) {
          return {...eachName, isLiked: !eachName.isLiked}
        }
        return eachName
      }),
    }))
  }

  deleteItem = id => {
    this.setState(eachPrev => ({
      detailsPerson: eachPrev.detailsPerson.filter(
        eachName => eachName.id !== id,
      ),
    }))
  }

  render() {
    const {detailsPerson, input, comment} = this.state
    const lengthArray = detailsPerson.length
    return (
      <>
        <div className="top-container">
          <div className="top-small1">
            <h1>Comments</h1>
            <p>Say Something about 4.0 Technologies</p>
            <form onSubmit={this.submitOf}>
              <input
                className="nameInput"
                type="text"
                placeholder="Your name"
                onChange={this.inputBox}
                value={input}
              />
              <br />
              <textarea
                placeholder="Your Comment"
                onChange={this.commentsBox}
                value={comment}
              >
                {}
              </textarea>
              <br />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              className="image"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="bottom-small">
            {lengthArray > 0 ? (
              <p className="count">{lengthArray}</p>
            ) : (
              <p className="count">0</p>
            )}

            <p>Comments</p>
          </div>
          <ul>
            {detailsPerson.map(eachPerson => (
              <CommentItem
                name={eachPerson}
                key={eachPerson.id}
                colors={initialContainerBackgroundClassNames}
                isLikedOrNot={this.isLikedOrNot}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default Comments
