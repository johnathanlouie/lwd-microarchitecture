import Byte from 'byte';

/**
 * Byte-accessible random access memory.
 */
class Ram {
    /** @var {Byte[]} */
    #bytes = [];

    /** @var {number} */
    #byteSize;

    /** @var {number} */
    #size;

    /**
     * Constructs the RAM.
     * @param {number} totalSize 
     * @param {number} byteSize 
     */
    constructor(totalSize, byteSize) {
        this.#size = totalSize;
        this.#byteSize = byteSize;
        for (let address = 0; address < totalSize; address++) {
            this.#bytes[address] = new Byte(byteSize, true);
        }
    }

    /**
     * Sets the value at the address.
     * @param {number} address Between 0 and size - 1.
     * @param {number[]} value Bit array.
     * @returns {void}
     */
    setByBitArray(address, value) {
        if (address < 0 || address >= size) {
            throw new Error(`Invalid address: ${address} of ${this.#size - 1}`);
        }
        this.#bytes[address].setValueByBitArray(value);
    }

    /**
     * Gets the value at the address.
     * @param {number} address Between 0 and size - 1.
     * @returns {number[]} Bit array.
     */
    getAsBitArray(address) {
        if (address < 0 || address >= size) {
            throw new Error(`Invalid address: ${address} of ${this.#size - 1}`);
        }
        return this.#bytes[address].getValueAsBitArray();
    }
}

export default Ram;
