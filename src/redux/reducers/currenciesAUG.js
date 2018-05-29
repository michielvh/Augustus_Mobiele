const rates={'EUR':1,'AUD':1.5543,"BGN":1.9558,"BRL":4.317,"CAD":1.5066,"CHF":1.1738,"CNY":7.5112,"CZK":25.702,"DKK":7.4478,"GBP":0.87688,"HKD":9.2565,"HRK":7.3868,"HUF":317.45,"IDR":16674.0,"ILS":4.2061,"INR":80.21,"ISK":123.6,"JPY":130.7,"KRW":1267.9,"MXN":23.284,"MYR":4.679,"NOK":9.49,"NZD":1.6991,"PHP":61.645,"PLN":4.2862,"RON":4.6265,"RUB":72.349,"SEK":10.216,"SGD":1.5772,"THB":37.758,"TRY":5.4704,"USD":1.1794,"ZAR":14.801}

  const rates1=[{'EUR':1},{'AUD':1.5543},{"BGN":1.9558},{"BRL":4.317},{"CAD":1.5066},{"CHF":1.1738},{"CNY":7.5112},{"CZK":25.702},{"DKK":7.4478},{"GBP":0.87688},{"HKD":9.2565},{"HRK":7.3868},{"HUF":317.45},{"IDR":16674.0},{"ILS":4.2061},{"INR":80.21},{"ISK":123.6},{"JPY":130.7},{"KRW":1267.9},{"MXN":23.284},{"MYR":4.679},{"NOK":9.49},{"NZD":1.6991},{"PHP":61.645},{"PLN":4.2862},{"RON":4.6265},{"RUB":72.349},{"SEK":10.216},{"SGD":1.5772},{"THB":37.758},{"TRY":5.4704},{"USD":1.1794},{"ZAR":14.801}]

  export function getCurrencyLijst(){
      return Object.keys(rates);
  }

  export function getCurrencyLijstEntries(){
   return Object.entries(rates);
}

export function getCurrencyLijstToMap(){
  return new Map(Object.entries(rates));
}

  export function convert(currency){
    let ratio=0;
      Object.entries(rates).forEach(([key,value]) => {
        if(`${key}`===currency){
          ratio=`${value}`;
        }
      });
      console.log(ratio);
      return ratio;
  }

  export function convertMetBedrag(currency,bedrag){
    let ratio=0;
      Object.entries(rates).forEach(([key,value]) => {
        if(`${key}`===currency){
          ratio=`${value}`;
        }
      });
      console.log(ratio);
      let convertBedrag=bedrag/ratio;
      return convertBedrag;
  }
 
