# stock_pannel

黄金外汇（XAUUSD）看板应用 / Gold Forex Dashboard

## 功能特性 Features

- ✅ 实时显示黄金价格（XAUUSD），每3秒自动更新
- ✅ 显示买入价、卖出价和价差
- ✅ 展示全球最新的黄金相关资讯
- ✅ 响应式设计，支持移动端和桌面端
- ✅ 美观的用户界面，实时价格变化动画效果

## 技术栈 Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: HTML + CSS + JavaScript
- **HTTP Client**: Axios

## 安装和运行 Installation & Running

### 1. 安装依赖 Install Dependencies

```bash
npm install
```

### 2. 启动服务器 Start Server

```bash
npm start
```

### 3. 访问应用 Access Application

打开浏览器访问: `http://localhost:3000`

服务器默认运行在端口 3000。可以通过环境变量 `PORT` 修改端口：

```bash
PORT=8080 npm start
```

## API 接口 API Endpoints

- `GET /api/price` - 获取当前金价
- `GET /api/news` - 获取黄金资讯
- `GET /api/data` - 获取所有数据（价格+资讯）

## 项目结构 Project Structure

```
stock_pannel/
├── server.js           # Express 服务器和 API 路由
├── public/
│   └── index.html      # 前端界面
├── package.json        # 项目配置和依赖
├── .gitignore         # Git 忽略文件
└── README.md          # 项目说明
```

## 注意事项 Notes

### API 配置 API Configuration

本应用支持多个金融数据和新闻 API，并具有自动降级功能。建议配置以下 API 密钥以获得最佳体验：

#### 金价数据 API (推荐配置至少一个)

1. **GoldAPI.io** (推荐) - 免费计划：每月 10,000 次请求
   - 注册: https://www.goldapi.io/
   - 设置环境变量: `METALS_API_KEY=your_api_key`

2. **Metals-API.com** - 免费计划：每月 50 次请求
   - 注册: https://metals-api.com/
   - 自动使用 demo key，可通过环境变量配置

3. **MetalPriceAPI.com** - 提供 demo 访问
   - 无需注册即可使用 demo key

#### 新闻数据 API (可选)

1. **GNews API** - 免费计划：每天 100 次请求
   - 注册: https://gnews.io/
   - 设置环境变量: `GNEWS_API_KEY=your_api_key`

2. **NewsAPI.org** - 免费计划：每天 100 次请求
   - 注册: https://newsapi.org/
   - 设置环境变量: `NEWS_API_KEY=your_api_key`

#### 环境变量设置 Environment Variables

```bash
# Linux/Mac
export METALS_API_KEY=your_goldapi_key
export GNEWS_API_KEY=your_gnews_key
export NEWS_API_KEY=your_newsapi_key
npm start

# Windows (PowerShell)
$env:METALS_API_KEY="your_goldapi_key"
$env:GNEWS_API_KEY="your_gnews_key"
npm start

# Or create a .env file (requires dotenv package)
METALS_API_KEY=your_goldapi_key
GNEWS_API_KEY=your_gnews_key
NEWS_API_KEY=your_newsapi_key
```

**注意**: 即使不配置 API 密钥，应用也能运行。系统会自动尝试多个数据源，并在所有 API 失败时使用智能降级数据。

---

### 数据源 Data Sources

应用使用以下策略获取实时数据：

**金价数据获取顺序**:
1. GoldAPI.io (如果配置了 API key)
2. Metals-API.com (demo key)
3. MetalPriceAPI.com (demo key)
4. 智能降级（基于上次缓存价格的小幅波动）

**新闻数据获取顺序**:
1. GNews API (如果配置了 API key)
2. NewsAPI.org (如果配置了 API key)
3. NewsData.io (demo key)
4. 精选降级新闻（来自主流金融媒体）

---

### 推荐的免费 API 组合

对于个人使用和开发测试，推荐以下组合：

1. **GoldAPI.io** (金价) - 每月 10,000 次请求完全够用
2. **GNews API** (新闻) - 每天 100 次请求，每 3 秒更新一次新闻足够使用

这样配置后，应用可以获得真实的金价数据和最新的金融新闻。

---

当前版本已集成真实的金融数据 API。在生产环境中，建议：

- 配置至少一个金价 API 以获取实时数据
- 配置新闻 API 以获取最新资讯
- 设置适当的缓存策略以避免超过 API 限制
- 监控 API 使用量

## License

ISC
