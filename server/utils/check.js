const checkImg = async (imgUrl) => {
    try {
        const response = await fetch(`https://assets.thetatoken.org/tokens/${imgUrl.toLowerCase()}.png`, { method: 'HEAD' });
        return response.status === 200;
    } catch (error) {
        // console.error('Error checking image:' + imgUrl, error);
        return false
    }
}

module.exports = checkImg