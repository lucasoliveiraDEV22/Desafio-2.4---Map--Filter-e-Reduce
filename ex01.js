// EX01: Adicionar 10% de valor de mercado. Depois, filtrar somente as empresas antes dos anos 2000 e, depois, somar
// todos os novos valores de mercado!!
const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Marck Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
]

const sum10Percent = companies.map (newValue => {
    // const newCompany = {
    //     name: newValue.name,
    //     marketValue: newValue.marketValue + newValue.marketValue*0.1,
    //     CEO: newValue.CEO,
    //     foundedOn: newValue.foundedOn
    // }
    // return newCompany
    newValue.marketValue = newValue.marketValue + 0.1*newValue.marketValue
    return newValue
})

//console.log (sum10Percent)
const oldYearOfFoundation = sum10Percent.filter (oldValue => {
    if (oldValue.foundedOn < 2000) return true
})

console.log (oldYearOfFoundation)

const sumNewMarketValue = oldYearOfFoundation.reduce ((acc, currentValue) => acc + currentValue.marketValue, 0)
console.log (sumNewMarketValue.toFixed(0))


