// Write your React code here.
import {Component} from 'react'
import Emoji from '../Emoji/index'
import './index.css'

class Feedback extends Component {
  state = {emojiButton: true}

  feedbackButton = () => {
    this.setState(prevState => ({emojiButton: !prevState.emojiButton}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {emojiButton} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {emojiButton === true ? (
            <div className="feedback-question-container">
              <h1 className="feedback-question">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-list">
                {emojis.map(each => (
                  <Emoji
                    emojis={each}
                    key={each.id}
                    feedbackButton={this.feedbackButton}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div className="thank-you-container">
              <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
              <h1 className="thank-you-text"> Thank you</h1>
              <p className="description">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
