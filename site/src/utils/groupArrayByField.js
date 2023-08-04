export const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    // eslint-disable-next-line no-param-reassign
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};
