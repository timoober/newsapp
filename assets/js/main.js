


    const apiKey = '8371e78a5cde4dcfb36f2767c4e599e6';
    const apiUrl = `https://newsapi.org/v2/everything?q=Apple&from=2023-05-30&sortBy=popularity&apiKey=${'8371e78a5cde4dcfb36f2767c4e599e6'}`;
    const newsContainer = document.querySelector('.news-container');

    //abrufe der nachrichten von der API
    function getNews() {
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const articles = data.articles;
          articles.forEach(article => {
            const newsCard = createNewsCard(article);
            newsContainer.appendChild(newsCard);
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    // erstellen einer Karte für eine einzelne Nachricht
    function createNewsCard(article) {
      const { title, description } = article;
      const newsCard = document.createElement('div');
      newsCard.classList.add('news-card');
      newsCard.innerHTML = `
        <h2>${title}</h2>
        <p>${description}</p>
      `;
      return newsCard;
    }

    // Nachrichten beim Laden der Seite abrufen
    getNews();
