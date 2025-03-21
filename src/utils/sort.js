/**
 * Sort array of objects
 *
 * @param {object} arr - The array to sort
 * @returns {object} - Sorted array
 */

const sortArr = (arr, flag) => {
    if (flag) {
        return arr.sort((a, b) => new Date(a.departureDate) - new Date(b.departureDate));
    }
    return arr.sort((a, b) => new Date(b.departureDate) - new Date(a.departureDate));
}
export default sortArr;


