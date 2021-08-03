class News {
  constructor() {
    this.API = 'df048b509f3143c1bab0389b4fdbac4a'
  }

  async makeAndGetFromAPI(endPoints ,nTQ, nT, d, eD, dF, dT, l, sB) {
    if(endPoints === 'everything') {
      let apiURL = 'https://newsapi.org/v2/everything?'

      if(nTQ !== '') {
        apiURL += `${nT}=${nTQ}`
      }

      if(d !== '') {
        apiURL += `&domains=${d}`
      }

      if(eD !== '') {
        apiURL += `&excludeDomains=${eD}`
      }

      if(dF !== '') {
        apiURL += `&from=${dF}`
      }

      if(dT !== '') {
        apiURL += `&to=${dT}`
      }

      if(l !== '') {
        apiURL += `&language=${l}`
      }

      if(sB !== '') {
        apiURL += `&sortBy=${sB}`
      }

      apiURL += `&apiKey=${this.API}`

      const newsResponse = await fetch(apiURL)
      const news = await newsResponse.json()
      return news
    }
    if(endPoints === 'top-headlines') {
      let apiURL = 'https://newsapi.org/v2/top-headlines?'
      console.log(...arguments);
      console.log(nTQ, nT, d);
      if(nTQ !== '') {
        apiURL += `q=${nTQ}`
      }

      if(nT !== '') {
        apiURL += `&country=${nT}`
      }

      if(d !== '') {
        apiURL += `&category=${d}`
      }

      apiURL += `&apiKey=${this.API}`

      console.log(apiURL);
      const newsResponse = await fetch(apiURL)
      const news = await newsResponse.json()
      return news
    }
  }
}
