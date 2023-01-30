import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {BoldBtn, ItalicBtn, UnderlineBtn, TextArea} from './styledComponent'

import './index.css'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  changeBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  changeItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  changeUnderline = () => {
    this.setState(prevState => ({underline: !prevState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="img-container">
            <h1 className="heading">Text Editor</h1>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="editor-container">
            <ul className="editors">
              <li key="1">
                <BoldBtn
                  type="button"
                  onClick={this.changeBold}
                  data-testid="bold"
                  active={bold}
                >
                  <VscBold className="icon" />
                </BoldBtn>
              </li>
              <li key="2">
                <ItalicBtn
                  type="button"
                  active={italic}
                  onClick={this.changeItalic}
                  data-testid="italic"
                >
                  <GoItalic className="icon" />
                </ItalicBtn>
              </li>
              <li key="3">
                <UnderlineBtn
                  type="button"
                  active={underline}
                  onClick={this.changeUnderline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline className="icon" />
                </UnderlineBtn>
              </li>
            </ul>
            <TextArea
              rows="20"
              cols="100"
              activeBold={bold}
              activeItalic={italic}
              activeUnderline={underline}
              className="text-area"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
