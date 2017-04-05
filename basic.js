var basicLoop = (max, current) => {
  while (max >= current) {
    console.log(current)
    current++
  }
}

var basicRecursion = (max, current) => {
  if (current > max) {
    return;
  }
  else {
    console.log(current)
    basicRecursion(max, current+1);
  };
};
