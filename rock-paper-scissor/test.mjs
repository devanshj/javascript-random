let { ROCK, PAPER, SCISSOR, compare } = await import(process.argv[2])
let tests = [
  [ROCK, ROCK, 0],
  [ROCK, PAPER, -1],
  [ROCK, SCISSOR, 1],
  [PAPER, ROCK, 1],
  [PAPER, PAPER, 0],
  [PAPER, SCISSOR, -1],
  [SCISSOR, ROCK, -1],
  [SCISSOR, PAPER, 1],
  [SCISSOR, SCISSOR, 0]
]

let passes = 0
for (let [p1, p2, e] of tests) {
  let a = compare(p1, p2)
  if (a === e) { passes++; continue }
  console.log(`${p1} x ${p2} = ${e}, but got ${a}.`)
}
console.log(`${passes}/${tests.length} tests passed.`)
