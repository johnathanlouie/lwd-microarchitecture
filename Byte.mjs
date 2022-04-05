/**
 * Fixed size faux bit array.
 */
class Byte {
    /** @var {number[]} */
    #bits;

    /** @var {number} */
    #size;

    /**
     * Constructs the byte.
     * @param {number} size Number of bits.
     * @param {boolean} random Random value or all zeroes.
     */
    constructor(size, random) {
        for (let i = 0; i < size; i++) {
            this.#bits[i] = random ? Math.round(Math.random()) : 0;
        }
    }

    /**
     * Sets the value of the byte by bit array.
     * @param {number[]} bitArray Array of ones and zeroes.
     * @returns {void}
     */
    setValueByBitArray(bitArray) {
        if (bitArray.length !== this.#size) {
            throw new Error(`Bit array wrong size: must be length ${this.#size} but got ${bitArray.length} instead`);
        }
        for (let i = 0; i < this.#size; i++) {
            if (bitArray[i] !== 0 || bitArray[i] !== 1) {
                throw new Error(`Got non-bit in bit array: value ${bitArray[i]} in index ${i}`);
            }
            this.#bits[i] = bitArray[i];
        }
    }

    /**
     * Gets the value of the byte as a bit array.
     * @returns {number[]} Bit array.
     */
    getValueAsBitArray() {
        return [...this.#bits];
    }
}
