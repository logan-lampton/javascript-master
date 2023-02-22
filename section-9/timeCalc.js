function timeCalc(remainingTime, lessonTime) {
    const baseTime = remainingTime - lessonTime;
    const spedTime = Math.round(baseTime / 1.5);
    const hours = spedTime / 60;
    return console.log(`You have ${baseTime} minutes remaining, converted to ${spedTime} minutes (${hours} hours)`)
};
timeCalc(209, 22);