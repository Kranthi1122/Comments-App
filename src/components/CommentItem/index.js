import {formatDistanceToNow as toDate} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {name, colors, isLikedOrNot, deleteItem} = props
  console.log(name)
  const {input, comment, id, isLiked, date} = name
  const lengthColor = colors.length
  const randomColor = Math.floor(Math.random() * lengthColor)
  const color = colors[randomColor]
  const firstLetter = input[0]

  const likedButton = () => {
    isLikedOrNot(id)
  }
  const deleteButton = () => {
    deleteItem(id)
  }
  return (
    <div className="main">
      <li>
        <div className="top-box">
          <p className={color}>{firstLetter}</p>
          <h1>{input}</h1>
          <p className="para">{toDate(new Date(date), new Date())}</p>
        </div>
        <p>{comment}</p>
        <div className="bottom-box">
          <button type="button" onClick={likedButton}>
            {isLiked ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                alt="liked"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                alt="like"
              />
            )}
          </button>
          <button type="button" data-testid="delete" onClick={deleteButton}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
        <hr className="horizontal" />
      </li>
    </div>
  )
}

export default CommentItem
