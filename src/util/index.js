export const toDuration = (fromDate, to) => {
    return (Math.round(10 * ((to.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24 * 365))) / 10) + ' years';
}