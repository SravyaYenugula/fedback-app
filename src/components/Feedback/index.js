// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedback: false}

  onclickEmoji = () => this.setState({isFeedback: true})

  renderFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list">
          {emojis.map(emo => (
            <li key={emo.id}>
              <button
                type="button"
                className="emoji-button"
                onClick={this.onclickEmoji}
              >
                <img className="emoji" alt={emo.name} src={emo.imageUrl} />
                <br /> <span className="emoji-name">{emo.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderTankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img className="love-emoji" alt="love emoji" src={loveEmojiUrl} />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedback} = this.state

    return (
      <div className="app-container">
        <div className="emoji-container">
          {isFeedback ? this.renderTankYou() : this.renderFeedback()}
        </div>
      </div>
    )
  }
}

export default Feedback
