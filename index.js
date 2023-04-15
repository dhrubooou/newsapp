console.log("HIII");
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
        articles.forEach(function(element) {
            let news = `<div class="card">
                            <div class="card-header" id="News1">
                                <h2 class="mb-0">
                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        ${element.title}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                data-parent="#accordionExample">
                                <div class="card-body">${element.content}. <a href="${element.url}">Read more here </a></div>
                        </div>`
            newsHtml += news;
                    
        });
        News1.innerHTML=newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr.send()
