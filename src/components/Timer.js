const Timer = ({seconds}) => (
  <div className="container timer">
    <h1>
      Timer: <span id="timer-value">{seconds}</span>s
    </h1>
  </div>
)

export default Timer
