import {useRef, useState} from 'react'

const TypingBox = ({checkingMatching, startTimer, changeStatus}) => {
  const [currentInput, setCurrentInput] = useState('')

  const inputRef = useRef(null)

  const keyDownHandler = e => {
    if (e.key === ' ') {
      checkingMatching(currentInput)
      setCurrentInput('')
    }
  }

  const inputChangeHandler = e => {
    setCurrentInput(e.target.value)
  }

  const startTestHandler = () => {
    startTimer()
    changeStatus('started')
  }

  return (
    <div className="container flex-container">
      <input
        type="text"
        ref={inputRef}
        name="typing-input"
        autoCorrect="off"
        autoCapitalize="none"
        placeholder="Type here"
        value={currentInput}
        onKeyDown={keyDownHandler}
        onChange={inputChangeHandler}
        onFocus={startTestHandler}
      />
    </div>
  )
}

export default TypingBox
