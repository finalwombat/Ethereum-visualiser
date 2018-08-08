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