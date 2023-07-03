import { useState, useEffect } from "react";

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
      {loading ?
        <article>
            {articles.map(function (article) {
            return (
                <li>Title : {article.title}</li>
            );
            })}
        </article>
    
      : <i>Loading Articles ...</i>}
    </>
  );
}
