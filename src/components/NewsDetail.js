// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import NewsCard from './NewsCard';


// const NewsDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [article, setArticle] = useState(null);
//   const [relatedArticles, setRelatedArticles] = useState([]);

//   // Fetch full article using ID from backend
//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/news/${id}`); // actual backend URL
//         const data = await res.json();
//         setArticle(data);
//       } catch (err) {
//         console.error("Error fetching news:", err);
//       }
//     };

//     const fetchRelated = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/news?exclude=${id}`); // fetch other news
//         const data = await res.json();
//         setRelatedArticles(data);
//       } catch (err) {
//         console.error("Error fetching related news:", err);
//       }
//     };

//     fetchArticle();
//     fetchRelated();
//   }, [id]);

//   if (!article) return <p>Loading article...</p>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       {/* Header + Navbar */}

//       {/* Full News Article */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
//         <img src={article.imageUrl} alt={article.title} className="w-full rounded-md mb-4" />
//         <p className="text-gray-700 leading-relaxed mb-4">{article.content}</p>

//         <button className="bg-blue-600 text-white px-4 py-2 rounded mr-4">
//           Continue Reading
//         </button>

//         <button onClick={() => navigate('/')} className="bg-gray-300 px-4 py-2 rounded">
//           Back to Home
//         </button>
//       </div>

//       {/* News Card Component*/}
//       <div className="mt-10">
//         <h2 className="text-2xl font-semibold mb-4">Related News</h2>
//         <NewsCard />
//       </div>
      

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {relatedArticles.map((item) => (
//           <div key={item.id} className="border p-4 rounded shadow-sm">
//             <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
//             <p className="text-gray-600 text-sm mb-2">{item.description}</p>
//             <button
//               className="text-blue-500 underline"
//               onClick={() => navigate(`/news/${item.id}`)}
//             >
//               Read More
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsDetail;


import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const mainArticle = {
    id: 1,
    title: "AI Will Transform the Future of Work",
    imageUrl: "https://showme.missouri.edu/wp-content/uploads/2023/05/shutterstock_2253228203-scaled.jpg",
    summary: "Artificial intelligence is reshaping industries by automating tasks and enhancing productivity...",
    fullContent: `Artificial intelligence is reshaping industries by automating tasks, enhancing productivity, and enabling innovative solutions.
    Companies worldwide are investing heavily in AI technologies to gain competitive advantages. 
    However, concerns about job displacement, bias in algorithms, and ethical challenges remain at the forefront. 
    Experts emphasize the need for responsible AI development to ensure long-term benefits for all sectors of society. 
    The future workforce will require new skills, adaptability, and a collaborative approach to work with intelligent machines.
    The AI market’s rapid growth is significantly impacting HR roles and responsibilities, with new tools and systems being developed to enhance workplace efficiency.
    Key Points:
    AI-driven analytics for talent acquisition and retention.
    Automation of routine HR tasks to focus on strategic planning.
    Why It Matters: The integration of AI in HR practices is revolutionizing the way organizations manage their workforce, leading to more data-driven and efficient human resource management.`
  };

  const [showFull, setShowFull] = useState(false);

  const handleContinueReading = () => {
    setShowFull(true);
  };

  const handleBack = () => {
    navigate('/');
  };

  // 📰 Dummy multiple news list
  const moreNews = [
    {
      id: 2,
      title: "Climate Change Impact Increasing Globally",
      imageUrl: "https://zhl.org.in/blog/wp-content/uploads/2017/02/Climate-changes.jpg",
      content: "Rising sea levels and extreme weather events highlight the urgent need for global climate action..."
    },
    {
      id: 3,
      title: "New Tech Gadgets Released in 2025",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/gLMurobBesk6rS9oyCUZn4-1280-80.jpg.webp",
      content: "From foldable laptops to AI-powered personal assistants, 2025 brings innovative gadgets to life..."
    },
    {
      id: 4,
      title: "Healthcare Innovation with AI",
      imageUrl: "https://www.datocms-assets.com/16499/1707000491-screenshot-2024-02-03-234759.png?auto=format&dpr=0.93&w=1738",
      content: "AI diagnostics and robotic surgeries are shaping the future of medicine and patient care..."
    }
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <button onClick={handleBack} style={{ marginBottom: "20px" }}>← Back to Home</button>
      <h1>{mainArticle.title}</h1>
      <img src={mainArticle.imageUrl} alt="article" style={{ width: "100%", borderRadius: "8px" }} />
      <p style={{ marginTop: "20px" }}>
        {showFull ? mainArticle.fullContent : mainArticle.summary}
      </p>
      {!showFull && (
        <button onClick={handleContinueReading} style={{ marginTop: "10px" }}>
          Continue Reading
        </button>
      )}

      {/* 🔽 More news after full article */}
      <hr style={{ margin: "40px 0" }} />
      <h2>More News</h2>
      {moreNews.map(news => (
        <div key={news.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "20px", paddingBottom: "20px" }}>
          <h3>{news.title}</h3>
          <img src={news.imageUrl} alt={news.title} style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }} />
          <p style={{ marginTop: "10px" }}>{news.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsDetail;
