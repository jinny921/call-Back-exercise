function findWaldo(arr, found) {
  arr.forEach(function(item, i) {
    if (item === "Waldo") {
      found(i);
    }
  })
}

function actionWhenFound(idx) {
  console.log("Found Waldo at index: " + idx + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

