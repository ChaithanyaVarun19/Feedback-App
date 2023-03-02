import './index.css'

const Emoji = props => {
  const {emojis, feedbackButton} = props
  const {name, imageUrl} = emojis

  const clickButton = () => {
    feedbackButton()
  }

  return (
    <li className="feedback-question-container">
      <div>
        <img
          src={imageUrl}
          alt={name}
          onClick={clickButton}
          className="emoji"
        />
        <p className="emoji-name">{name}</p>
      </div>
    </li>
  )
}

export default Emoji
