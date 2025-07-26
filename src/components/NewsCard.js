import React from 'react';
import { Link } from 'react-router-dom';

function NewsCard() {
  const sampleNews = {
    id: 1,
    title: "AI Will Transform the Future of Work",
    imageUrl: "https://showme.missouri.edu/wp-content/uploads/2023/05/shutterstock_2253228203-scaled.jpg",
    summary: "Artificial intelligence is reshaping industries by automating tasks and enhancing productivity..."
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Top News</h1>
      <Link to={`/news/${sampleNews.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{
          border: "1px solid #ccc", borderRadius: "8px", padding: "16px", maxWidth: "600px", margin: "auto", cursor: "pointer"
        }}>
          <img src={sampleNews.imageUrl} alt="news" style={{ width: "100%", borderRadius: "8px" }} />
          <h2>{sampleNews.title}</h2>
          <p>{sampleNews.summary}</p>
        </div>
      </Link>
    </div>
  );
}

export default NewsCard;
