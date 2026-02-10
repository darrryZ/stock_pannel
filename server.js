const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// In-memory cache for gold price and news
let cachedData = {
    price: null,
    news: [],
    lastUpdate: null
};

// Function to fetch gold price from a free API
async function fetchGoldPrice() {
    try {
        // Using metals-api.com free tier or alternative free API
        // For demo purposes, we'll use a simulated price with small variations
        // In production, you would use a real API like Alpha Vantage, Twelve Data, etc.
        
        // Simulating gold price around $2000-2100 with small fluctuations
        const basePrice = 2050;
        const variation = (Math.random() - 0.5) * 10; // ±5 variation (range: -5 to +5)
        const currentPrice = (basePrice + variation).toFixed(2);
        
        return {
            symbol: 'XAUUSD',
            price: currentPrice,
            timestamp: new Date().toISOString(),
            bid: (parseFloat(currentPrice) - 0.5).toFixed(2),
            ask: (parseFloat(currentPrice) + 0.5).toFixed(2)
        };
    } catch (error) {
        console.error('Error fetching gold price:', error.message);
        return null;
    }
}

// Function to fetch gold-related news
async function fetchGoldNews() {
    try {
        // Using a news aggregator API
        // For demo purposes, returning mock news
        // In production, use NewsAPI.org, GNews API, etc.
        
        const mockNews = [
            {
                title: 'Gold Prices Rise Amid Economic Uncertainty',
                source: 'Financial Times',
                publishedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
                url: '#',
                description: 'Gold prices continue to climb as investors seek safe-haven assets.'
            },
            {
                title: 'Central Banks Increase Gold Reserves',
                source: 'Bloomberg',
                publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
                url: '#',
                description: 'Major central banks are adding to their gold reserves at the fastest pace in decades.'
            },
            {
                title: 'XAUUSD Technical Analysis: Key Support Levels',
                source: 'Reuters',
                publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
                url: '#',
                description: 'Technical analysts identify crucial support and resistance levels for gold trading.'
            },
            {
                title: 'Gold Mining Stocks Rally on Price Surge',
                source: 'CNBC',
                publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
                url: '#',
                description: 'Gold mining companies see stock prices rise following the precious metal\'s rally.'
            },
            {
                title: 'Fed Policy Impact on Gold Market',
                source: 'Wall Street Journal',
                publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
                url: '#',
                description: 'Federal Reserve policy decisions continue to influence gold price movements.'
            }
        ];
        
        return mockNews;
    } catch (error) {
        console.error('Error fetching news:', error.message);
        return [];
    }
}

// Update data every 3 seconds
async function updateData() {
    const price = await fetchGoldPrice();
    const news = await fetchGoldNews();
    
    if (price) {
        cachedData.price = price;
    }
    
    if (news && news.length > 0) {
        cachedData.news = news;
    }
    
    cachedData.lastUpdate = new Date().toISOString();
}

// API endpoint to get current gold price
app.get('/api/price', (req, res) => {
    res.json(cachedData.price || { error: 'Price data not available' });
});

// API endpoint to get gold news
app.get('/api/news', (req, res) => {
    res.json(cachedData.news || []);
});

// API endpoint to get all data at once
app.get('/api/data', (req, res) => {
    res.json(cachedData);
});

// Start the server
app.listen(PORT, async () => {
    console.log(`XAUUSD Dashboard server running on http://localhost:${PORT}`);
    
    // Initial data fetch
    await updateData();
    
    // Update data every 3 seconds
    setInterval(updateData, 3000);
});
