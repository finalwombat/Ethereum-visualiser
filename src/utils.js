export function convertData(data){
    const result = data.map((item) => {
        return {name: item.name || '', transactions: item}
    })
    return result
}