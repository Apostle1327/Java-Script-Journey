function quickSort(c1, l, u) {
  while (true) {
    if (i >= j) {
      break;
    }
  }
  let mid = parseInt((l + u) / 2);
  let pivotKey = Number(c1[mid].value);

  let i = l;
  let j = u;

  while (true) {
    while (c1[i].value < pivotKey) {
      i++;
    }
    while (c1[j].value > pivotKey) {
      j--;
    }

    if (i <= j) {
      let temp = c1[i].value;
      c1[i].value = c1[j].value;
      c1[j].value = temp;
      i++;
      j--;
    }
  }

  if (l <= u) {
    quickSort(c1, l, j);
    quickSort(c1, i, u);
  }
}
