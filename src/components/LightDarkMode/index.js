// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {
    ifIsDark: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({ifIsDark: !prevState.ifIsDark}))
  }

  render() {
    const {ifIsDark} = this.state
    const ModenameofClass = ifIsDark ? 'dark-mode' : 'light-mode'
    const ButtonText = ifIsDark ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="my-container">
        <div className={`container ${ModenameofClass}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.onClickButton}>
            {ButtonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
