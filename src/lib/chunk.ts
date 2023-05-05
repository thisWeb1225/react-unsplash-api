function chunk(array: any[], chunkNumber: number = 1): [any[]] {
  if (array.length === 0) return [[]]
  
  // initial the result of array
  const initVal: any[] = Array.from({ length: chunkNumber }, () => []);

  const res = array.reduce((total, val, index) => {
    const groupIndex = index % chunkNumber;
    total[groupIndex].push(val);
    return total;
  }, initVal)

  return res
}

export default chunk