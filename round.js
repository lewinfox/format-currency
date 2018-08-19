function round(number, decimals) {

        if (typeof(number) != 'number') {
            number = parseFloat(number);
        }

        if (typeof(decimals) != 'number') {
            decimals = parseInt(decimals);
        }

        // Allow positive and negative values for "decimals"
        if (decimals < 0) {
            decimals = Math.abs(decimals);
            // Decrease the size of the number by (decimals) orders of magnitude,
            // use built-in round function, then increase by (decimals) OOM.
            return Number(Math.round(number + 'e-' + decimals) + 'e' + decimals);
        } else {
            // Increase the size of the number by (decimals) orders of magntude,
            // use the built-in round function to round the result, and then reduce
            // by (decimals) OOM again.
            return Number(Math.round(number + 'e' + decimals) + 'e-' + decimals);
        }
    }
