// class
const html = new HTMLUI()
const newsAPI = new News()


// variable
const form = document.querySelector('#form')
let articles;


// eventlisteners
eventlisteners()
function eventlisteners() {
  form.addEventListener('submit', submitForm)
  document.querySelector('#From').addEventListener('change', () => {
    let today = new Date().toLocaleDateString('en-CA')
    document.querySelector('#To').value = today
  })
}


// funcations
function submitForm(e) {
  e.preventDefault()
  const newsTopicQuery = document.querySelector('#name').value
  const newsTopic = document.querySelector('#query-type').value
  const domain = document.querySelector('#domain').value
  const excludeDomain = document.querySelector('#excludeDomain').value
  const dateFrom = document.querySelector('#From').value
  const dateTo = document.querySelector('#To').value
  const language = document.querySelector('#language').value
  const sortBy = document.querySelector('#Sort').value

  if(newsTopicQuery === '') {
    html.showErrorCompleteFields('You Shoud Enter a Topic')
  } else {
    newsAPI.makeAndGetFromAPI(newsTopicQuery, newsTopic, domain, excludeDomain, dateFrom, dateTo, language, sortBy)
    .then((news) => {
      return news
    }).then((newsArticles) => {
      console.log(newsArticles);
    })
  }
}