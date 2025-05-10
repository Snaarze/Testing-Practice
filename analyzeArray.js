function analyzeArray(array) {
  const getAverage = () => {
    return array.reduce((curr, prev) => curr + prev, 0) / array.length;
  };

  const getMin = () => {
    return Math.min(...array);
  };

  const getMax = () => {
    return Math.max(...array);
  };

  const getLength = () => {
    return array.length;
  };

  return {
    average: getAverage(),
    min: getMin(),
    max: getMax(),
    length: getLength(),
  };
}

module.exports = analyzeArray;
