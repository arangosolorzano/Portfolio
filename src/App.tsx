import React, { useState, useEffect } from 'react'
import './App.css'

// Figma-exported landing image (requires Figma plugin asset server running)
const imgMain21 = "http://localhost:3845/assets/7dc4846a19095baf20789597813382c8246a756c.png";

interface ShelfItem {
  id: string;
  type: 'book' | 'frame' | 'decorative';
  color?: string;
  content?: string;
  image?: string;
}

const shelfItems: ShelfItem[] = [
  { id: '1', type: 'book', color: 'red', content: 'HTML' },
  { id: '2', type: 'book', color: 'blue', content: 'CSS' },
  { id: '3', type: 'book', color: 'green', content: 'JS' },
  { id: '4', type: 'frame', image: 'data:image/svg+xml,%3Csvg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="60" height="80" fill="%23ddd"/%3E%3Ccircle cx="30" cy="25" r="12" fill="%23666"/%3E%3Cpath d="M18 55 Q30 45 42 55 L42 70 L18 70 Z" fill="%23666"/%3E%3C/svg%3E' },
  { id: '5', type: 'book', color: 'orange', content: 'React' },
  { id: '6', type: 'book', color: 'purple', content: 'TS' },
  { id: '7', type: 'decorative', content: '🏆' },
  { id: '8', type: 'book', color: 'brown', content: 'Node' },
  { id: '9', type: 'frame', image: 'data:image/svg+xml,%3Csvg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="60" height="80" fill="%23e8e8e8"/%3E%3Ctext x="30" y="40" text-anchor="middle" fill="%23333" font-size="8"%3EProject%3C/text%3E%3C/svg%3E' },
  { id: '10', type: 'book', color: 'blue', content: 'SQL' },
  { id: '11', type: 'decorative', content: '🌱' },
  { id: '12', type: 'book', color: 'green', content: 'Vue' },
  { id: '13', type: 'book', color: 'red', content: 'Angular' },
  { id: '14', type: 'decorative', content: '⚡' },
  { id: '15', type: 'frame', image: 'data:image/svg+xml,%3Csvg width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="60" height="80" fill="%23f5f5f5"/%3E%3Ctext x="30" y="40" text-anchor="middle" fill="%23555" font-size="6"%3ECertificate%3C/text%3E%3C/svg%3E' },
];

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderShelfItem = (item: ShelfItem) => {
    switch (item.type) {
      case 'book':
        return (
          <div className={`book book-${item.color}`}>
            {item.content}
          </div>
        );
      case 'frame':
        return (
          <div className="picture-frame">
            <img src={item.image} alt="Frame content" />
          </div>
        );
      case 'decorative':
        return (
          <div className="decorative-item">
            {item.content}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="portfolio-container">
      {/* Full-page landing background from Figma */}
      <div
        className="landing-bg"
        style={{ backgroundImage: `url(${imgMain21})` }}
      />

      <div className="content-layer">
        {/* Background Elements */}
        <div className={`latest-works ${isLoaded ? 'slide-in-left' : ''}`}>
        Latest works
        </div>
        
        <div className={`clients-opinions ${isLoaded ? 'slide-in-right' : ''}`}>
          CLIENTS' OPINIONS
        </div>
        
        <div className={`rebranded-tag ${isLoaded ? 'slide-in-right' : ''}`}>
          Rebranded!
        </div>

        {/* Main Bookshelf */}
        <div className="bookshelf-container">
          <div className={`bookshelf ${isLoaded ? 'fade-in-up' : ''}`}>
            {shelfItems.map((item) => (
              <div key={item.id} className="shelf-item">
                {renderShelfItem(item)}
              </div>
            ))}
            
            {/* Main Display Frame */}
            <div className="main-display">
              <img 
                src={imgMain21} 
                alt="Portfolio Main Display" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className={`navigation ${isLoaded ? 'fade-in-up' : ''}`}>
          <div className="nav-item" onClick={() => setCurrentPage(1)}>Page</div>
          <div className="nav-item" onClick={() => setCurrentPage(2)}>Page</div>
          <div className="nav-item" onClick={() => setCurrentPage(3)}>Page</div>
          <button className="nav-button">Button</button>
        </div>

        {/* Site Name */}
        <div className={`site-name ${isLoaded ? 'slide-in-left' : ''}`}>
          Site name
        </div>

        {/* Page Numbers */}
        <div className="page-numbers">
          {[1, 2, 3].map((num) => (
            <div 
              key={num} 
              className={`page-number ${currentPage === num ? 'active' : ''}`}
              onClick={() => setCurrentPage(num)}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
