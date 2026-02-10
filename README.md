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

当前版本使用模拟数据进行演示。在生产环境中，建议集成真实的金融数据 API，例如：

- Alpha Vantage
- Twelve Data
- Finnhub
- IEX Cloud

同样，资讯功能可以集成真实的新闻 API，例如：

- NewsAPI.org
- GNews API
- Bing News API

## License

ISC
