import {useEffect, useState} from 'react'
import randomWords from 'random-words'

import TypingBox from './components/TypingBox'
import TypingStats from './components/TypingStats'
import WordsBox from './components/WordsBox'
import Timer from './components/Timer'

const NO_OF_WORDS = 30
const NO_OF_SECONDS = 20

const generateWords = () => {
  return new Array(NO_OF_WORDS).fill(null).map(() => randomWords())
}

function App() {
  const [words, setWords] = useState([])
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [seconds, setSeconds] = useState(NO_OF_SECONDS)
  const [correctWords, setCorrectWords] = useState(0)
  const [incorrectWords, setIncorrectWords] = useState(0)
  const [status, setStatus] = useState('waiting')

  useEffect(() => {
    setWords(generateWords())
  }, [])

  const checkMatchingHandler = currentInput => {
    const correctWord = words[activeWordIndex]
    setActiveWordIndex(prev => prev + 1)
    const isMatched = correctWord === currentInput.trim()
    console.log(isMatched, currentInput, correctWord)
    if (isMatched) {
      setCorrectWords(correctWords + 1)
    } else {
      setIncorrectWords(incorrectWords + 1)
    }
  }

  const startCountdownHandler = () => {
    let interval = setInterval(() => {
      setSeconds(prevSec => {
        if (prevSec === 0) {
          setStatus('finished')
          clearInterval(interval)
          return 0
        } else {
          return prevSec - 1
        }
      })
    }, 1000)
  }

  const statusChangeHandler = state => {
    setStatus(state)
  }

  return (
    <>
      <Timer seconds={seconds} />
      <WordsBox words={words} />
      <TypingBox
        words={words}
        checkingMatching={checkMatchingHandler}
        startTimer={startCountdownHandler}
        changeStatus={statusChangeHandler}
      />
      <TypingStats correct={correctWords} incorrect={incorrectWords} />
    </>
  )
}

export default App
