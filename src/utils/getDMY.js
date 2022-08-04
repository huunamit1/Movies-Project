const getDMY = (date) => {
    const [, month, day, year] = date.toString().split(' ');

    return `${day} ${month} ${year}`;
};

export default getDMY;
