const checkImg = async (imgUrl) => {
    try {
        const response = await fetch(imgUrl, { method: 'HEAD' });
        return response.status === 200;
    } catch (error) {
        // console.error('Error checking image:' + imgUrl, error);
        return false
    }
}

function formatNumber(number) {
    if (Math.abs(number) >= 1.0e+9) {
        return (number / 1.0e+9).toFixed(2) + "B";
    } else if (Math.abs(number) >= 1.0e+6) {
        return (number / 1.0e+6).toFixed(2) + "M";
    } else if (Math.abs(number) >= 1.0e+3) {
        return (number / 1.0e+3).toFixed(2) + "K";
    } else {
        return number.toFixed(2);
    }
}

function formatTimeDifference(timestamp) {
    const now = new Date();
    var diff = Math.abs(Number(now) - timestamp * 1000) / 1000; // difference in seconds

    const intervals = {
        year: 31536000,
        mon: 2592000,
        we: 604800,
        day: 86400,
        hr: 3600,
        min: 60,
        sec: 1
    };

    let result = '';

    for (let [unit, seconds] of Object.entries(intervals)) {
        const value = Math.floor(diff / seconds);

        if (value >= 1) {
            result += `${value} ${unit} `;
            diff -= value * seconds;
            break;
        }
    }

    // Convert "ys ms ws ds hs ms ss" to "yr"
    result = result.replace(/(\d+y)\s.*$/, '$1').trim();

    return result;
}

const checkTokenSymbol = (tokenName) => {
    return tokenName[0].toLowerCase() === "w" ? tokenName.slice(1) : tokenName
}

function removeW(word) {
  if (word.startsWith('w') || word.startsWith('W')) {
    return word.slice(1); // Remove the first character
  } else {
    return word; // Return the original string
  }
}

export {
    checkImg,
    formatNumber,
    formatTimeDifference,
    checkTokenSymbol,
    removeW
}