// class
const html = new HTMLUI();
const newsAPI = new News();

// variable
const form = document.querySelector("#form");
const endPointsSelect = document.querySelector("#EndPoints");
let articles;

// eventlisteners
eventlisteners();
function eventlisteners() {
  form.addEventListener("submit", submitForm);
  document.querySelector("#From").addEventListener("change", () => {
    let today = new Date().toLocaleDateString("en-CA");
    document.querySelector("#To").value = today;
  });

  endPointsSelect.addEventListener("change", () => {
    html.changeMain(endPointsSelect.value);
  });
}

// funcations
function submitForm(e) {
  e.preventDefault();
  const newsTopicQuery = document.querySelector("#name").value;
  const newsTopic = document.querySelector("#query-type").value;
  const domain = document.querySelector("#domain").value;
  const excludeDomain = document.querySelector("#excludeDomain").value;
  const dateFrom = document.querySelector("#From").value;
  const dateTo = document.querySelector("#To").value;
  const language = document.querySelector("#language").value;
  const sortBy = document.querySelector("#Sort").value;

  if (document.querySelector("#EndPoints").value == "everything") {
    if (newsTopicQuery === "") {
      html.showErrorCompleteFields("You Shoud Enter a Topic");
    } else {
      newsAPI
        .makeAndGetFromAPI(
          "everything",
          newsTopicQuery,
          newsTopic,
          domain,
          excludeDomain,
          dateFrom,
          dateTo,
          language,
          sortBy
        )
        .then((news) => {
          return news;
        })
        .then((newsArticles) => {
          if (
            newsArticles.articles === undefined ||
            newsArticles.articles.length == 0
          ) {
            html.showErrorCompleteFields("Nothing Found");
          } else {
            html.deleteResult()
            html.showResult(newsArticles);
          }
        });
    }
  } else {
    const query = document.querySelector("#nameT").value;
    const country = document.querySelector("#country-list").value;
    const category = document.querySelector("#category-list").value;
    console.log(query, country, category);
    if (country !== '' || category !== '') {

      newsAPI
        .makeAndGetFromAPI("top-headlines", query, country, category)
        .then((news) => {
          return news;
        })
        .then((newsArticles) => {
          if (
            newsArticles.articles === undefined ||
            newsArticles.articles.length == 0
          ) {
            html.showErrorCompleteFields("Nothing Found");
          } else {
            html.deleteResult()
            html.showResult(newsArticles);
          }
        });
    } else {
      html.showErrorCompleteFields("You Shoud Enter a Country or Category");
    }
  }
}
