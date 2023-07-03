import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function BlogDetail() {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const params = useParams();

  useEffect(
    function () {
      async function getArticle() {
        const request = await fetch(
          "https://api.spaceflightnewsapi.net/v3/articles/" + params.id
        );

        if (!request.ok) {
          return setNotFound(true);
        }

        const response = await request.json();

        setArticle(response);
        setLoading(true);
      }
      getArticle();
    },
    [params]
  );

  if(notFound){
    return <h1>Maaf artikel tidak ditemukan!</h1>
  }

  return (
    <div>
      {loading ? (
        <article>
          <h2>{article.title}</h2>
          <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
          <img src={article.imageUrl} alt={article.title} />
          <p>{article.summary}</p>
          <div>
            Source : <a href={article.url}>{article.newsSite}</a>
          </div>
        </article>
      ) : (
        <i>Loading Data ...</i>
      )}
    </div>
  );
}
