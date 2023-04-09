// @ts-check

// ---------------------------------------------------------------------------------------------
// Libraries (ComplexNumber, Vector, RealNumber)

/**
 * ComplexNumber
 * @typedef {[re: number, im: number]} Z
 */
const Z = {
  /**
   *   (a + ib) * (c + id)
   * = ac + iad + ibc - bd
   * = ac - bd + i(ad + bc)
   * 
   * @type {(z1: Z, z2: Z) => Z}
   */
  mul: ([a, b], [c, d]) => 
    [a * c - b * d, a * d + b * c],

  
  /** @type {(z: Z, n: R) => Z} */
  pow: (z, n) =>
    n < 0 ? invariant("NotImplemented") :
    n === 0 ? [1, 0] : Z.mul(z, Z.pow(z, n - 1)),

  
  /** 
   * @type {(t: R) => Z}
   * @see https://en.wikipedia.org/wiki/Cis_(mathematics)
   */
  cis: t =>
    [Math.cos(t), Math.sin(t)],

  
  /**
   *   z^3 = 1
   * ∴ z = w^0, w^1, w^2
   * @type {Z}
   * @see https://en.wikipedia.org/wiki/Root_of_unity
   */
  get W() { return Z.cis(2 * Math.PI / 3) },

  /** @type {(z: Z) => R} */
  mod: ([a, b]) =>
    Math.hypot(a, b)
}

/**
 * Vector
 * @typedef {[x: number, y: number]}
 */
const V = {
  /** @type {(v1: V, v2: V) => R} */
  crossMod: ([a, b], [c, d]) =>
    a*d - b*c
}

/**
 * RealNumber
 * @typedef {number} R
 */
const R = {
  /** @type {(a: R) => -1 | 0 | 1} */ 
  sign: a =>
    a > 0 ? 1 :
    a < 0 ? -1 :
    a === 0 ? 0 :
    invariant()
}

/** @type {(m?: string) => never} */
function invariant(m = "Invariant") { throw new Error(m) }

// ---------------------------------------------------------------------------------------------
// Implementation

const ROCK = Object.assign(Z.pow(Z.W, 0), { toString: () => "ROCK" })
const PAPER = Object.assign(Z.pow(Z.W, 1), { toString: () => "PAPER" })
const SCISSOR = Object.assign(Z.pow(Z.W, 2), { toString: () => "SCISSOR" })

/** @type {(a: Z, b: Z) => R} */
const compare = (a, b) =>
  R.sign(V.crossMod(b, a) / Z.mod(a) * Z.mod(b))

export { ROCK, PAPER, SCISSOR, compare }