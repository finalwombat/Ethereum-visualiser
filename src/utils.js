export function convertDataForChart(data){
    const result = data.map((item) => {
        return {name: item.name || '', transactions: item.transactions || item}
    })
    return result
}

export function getTransactionsPerBlock(blocks){
  const result = blocks.map((block) => {
    return {transactions: block.transactions.length, name: block.number}
  })
  return result
}

// Select a color based on the number provided
export function getColor(number) {
    const colors = [
      "#808080",
      "#ff00ff",
      "#7f00ff",
      "#0080ff",
      "#00ff80",
      "#00ff00",
      "#80ff00",
      "#ffff00",
      "#ff8000",
      "#ff0000"
    ];
    // Convert to number between 0 - 9
    number = number / 10;
    if (number > 9) number = 9;
    return colors[Math.floor(number)];
  }
  