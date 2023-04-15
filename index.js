//6cfe3ffa84a84af3b8f63697a893b038 ----> api key
// grab the news container
let source = 'bbc-news';
let apikey = '6cfe3ffa84a84af3b8f63697a893b038';
let News1 = document.getElementById('News1');
// create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        // console.log(articles);
        articles.forEach(function (element, index) {
            console.log(index);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Beaking News ${index + 1}.      </b>${element.title}
                                    </button>
                                </h2>
                            </div>
            
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#News1">
                                <div class="card-body">${element.content}. <a href="${element.url}" target = "_blank">Read more here </a>
                                </div>
                            </div>
                        </div>`
            newsHtml += news;

        });
        News1.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()
