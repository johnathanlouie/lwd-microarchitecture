/**
 * FIFO collection for an arbitrary number of bits.
 */
class BitBuffer {
    /** @var {number[]} */
    #bits = [];

    /**
     * Removes the next number of bits and returns it from the start of the buffer.
     * @param {number} count Number of bits to remove.
     * @returns {number[]} If there are 
     */
    nextBits(count) {
        return this.#bits.splice(0, count);
    }

    /**
     * Adds bits to the end of the buffer.
     * @param {number[]} bits Ones and zeroes.
     * @returns {void}
     */
    append(bits) {
        for (let bit of bits) {
            this.#bits.push(bit);
        }
    }
}

export default BitBuffer;
