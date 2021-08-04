class HTMLUI {
  showErrorCompleteFields(message) {
    const error = document.querySelector('#error')
    error.innerText = message
    error.style.opacity = '1'

    setTimeout(() => {
      error.style.opacity = '0'
    }, 3000);
  }

  showResult(news) {
    document.querySelector('.res').style.display = 'block'
    const resContent = document.querySelector('#res-content')
    const articles = news.articles
    let title;

    articles.forEach(article => {
      if(article.title.length >= 400) {title = article.title.slice(0,101)} else {
        title = article.title
      }
      resContent.innerHTML += `
      <div class="card">
        <h4>${title}</h4>
        <div class="some">
          <span>author <span class="span">${article.author}</span></span>
          <span class="secondSpan">source <span class="span">${article.source.name}</span></span>
          <span>publishedAt <p>${article.publishedAt.slice(0, 10)}</p></span>
        </div>
        <p class="description">${article.description}</p>
        <a href="${article.url}" target="_blank" class="btn1">Read More...</a>
      </div>
      `
    });
  }

  changeMain(situation) {
    if(situation == 'top-headlines') {
      document.querySelector('.organiz').style.display = 'none'
      document.querySelector('.top-headlines').style.display = 'flex'
      return 'top-headlines'
    }
    if(situation == 'everything') {
      document.querySelector('.organiz').style.display = 'flex'
      document.querySelector('.top-headlines').style.display = 'none'
      return 'everything'
    }
  }

  deleteResult() {
    document.querySelector('#res-content').innerHTML = ''
  }
}