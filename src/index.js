module.exports = function toReadable (number) {
    let result = "", digit = 0, decimalDigit = 0, hundredthDigit = 0;
    let value20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let value99 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundred = 'hundred'

    if (number < 20) {
        for (let i = 0; i < 20; i++) {
            if (number === i) {
                return value20[i];
            }
        }
    }
    if (number >= 20 && number < 100) {
        digit = number / 10 | 0;
        decimalDigit = number % 10;
        if (decimalDigit === 0) {
            for (let i = 0; i < 10; i++) {
                if (digit === i) {
                    result += value99[i - 2];
                }
            }
        } else {
            for (let i = 0; i < 10; i++) {
                if (digit === i) {
                    result += value99[i - 2] + " ";
                }
            }
            for (let i = 0; i < 10; i++) {
                if (decimalDigit === i) {
                    result += value20[i];
                }
            }
        }
        return result;
    }
    if (number >= 100 && number < 1000) {
        hundredthDigit = number / 100 | 0;
        decimalDigit = (number - hundredthDigit * 100) / 10 | 0;
        digit = number - hundredthDigit * 100 - decimalDigit * 10;
        let digit20 = number - hundredthDigit * 100;

        if (digit20 > 0 && digit20 < 20) {
            for (let i = 0; i < 10; i++) {
                if (hundredthDigit === i) {
                    result += value20[i] + " " + hundred;
                }
            }
            for (let i = 0; i < 20; i++) {
                if (digit20 === i) {
                    result += " " + value20[i];
                }
            }
        } else {
            if (digit === 0 && decimalDigit !== 0) {
                for (let i = 0; i < 10; i++) {
                    if (hundredthDigit === i) {
                        result += value20[i] + " " + hundred;
                    }
                }
                for (let i = 0; i < 10; i++) {
                    if (decimalDigit === i) {
                        result += " " + value99[i - 2];
                    }
                }
            }
            if (digit === 0 && decimalDigit === 0) {
                for (let i = 0; i < 10; i++) {
                    if (hundredthDigit === i) {
                        result += value20[i] + " " + hundred;
                    }
                }
            } if(digit !== 0 && decimalDigit !== 0) {
                for (let i = 0; i < 10; i++) {
                    if (hundredthDigit === i) {
                        result += value20[i] + " " + hundred;
                    }
                }
                for (let i = 0; i < 10; i++) {
                    if (decimalDigit === i) {
                        result += " " + value99[i - 2];
                    }
                }
                for (let i = 0; i < 10; i++) {
                    if (digit === i) {
                        result += " " + value20[i];
                    }
                }
            }
        }
        return result;
    }
}
