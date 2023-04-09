export {
  ROCK, PAPER, SCISSOR,
  compare
}

const ROCK = "ROCK"
const PAPER = "PAPER"
const SCISSOR = "SCISSOR"

const WIN = 1
const LOSE = -1
const TIE = 0

const compare = (a, b) =>
  a === ROCK
    ? b === ROCK ? TIE :
      b === PAPER ? LOSE :
      b === SCISSOR ? WIN :
      invariant() :
  a === PAPER
    ? b === ROCK ? WIN :
      b === PAPER ? TIE :
      b === SCISSOR ? LOSE :
      invariant() :
  a === SCISSOR
    ? b === ROCK ? LOSE :
      b === PAPER ? WIN :
      b === SCISSOR ? TIE :
      invariant() :
  invariant()
  
function invariant() { throw new Error("Invariant") }
    