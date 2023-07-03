import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    async function getArticle() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );

      const response = await request.json();

      setArticles(response);
      setLoading(true);
    }
    getArticle();
  }, []);

  return (
    <>
      <h1>Halaman Blog</h1>
      <p>Ini adalah article saya</p>
      {loading ? (
        articles.map(function (article) {
          return (
            <article key={article.id}>
              <h3>
                <Link to={"/blog/" + article.id}>{article.title}</Link>
              </h3>
              <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
            </article>
          );
        })
      ) : (
        <i>Loading Articles ...</i>
      )}
    </>
  );
}
