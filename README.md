# FootMart - Football Player Database

A modern, mobile-first football player information website built with Next.js, TypeScript, and Tailwind CSS. Search for any football player and get comprehensive information including stats, career history, market value, and personal details.

## 🚀 Features

- **🔍 Smart Search**: Real-time search with autocomplete suggestions
- **📱 Mobile-First Design**: Optimized for mobile devices with responsive UI
- **🎨 Modern UI**: Professional glass-morphism design with smooth animations
- **📊 Comprehensive Stats**: Complete player statistics, career history, and achievements
- **💰 Market Values**: Real-time market value information
- **🌍 Multi-Player Support**: Search and view any football player
- **⚡ Fast Performance**: Built with Next.js for optimal speed
- **🎯 SEO Optimized**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Deployment**: Vercel (ready)

## 📱 Mobile-First Design

The website is specifically designed for mobile use with:
- Responsive search interface
- Touch-friendly navigation
- Optimized card layouts
- Fast loading times
- Smooth animations

## 🎨 Design Features

- **Glass-morphism Effects**: Modern translucent cards with backdrop blur
- **Gradient Backgrounds**: Beautiful gradient backgrounds
- **Hover Animations**: Smooth hover effects and transitions
- **Professional Typography**: Clean, readable fonts
- **Color-coded Information**: Different colors for different types of data

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd foot-mart-knowledge
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
foot-mart-knowledge/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── player/
│   │       └── [id]/
│   │           └── page.tsx    # Player detail page
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── SearchBar.tsx       # Search component
│   │   └── TrendingPlayers.tsx # Trending players
│   └── lib/
│       └── api.ts              # API service layer
├── public/                     # Static assets
└── package.json
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for API keys (when integrating real APIs):

```env
NEXT_PUBLIC_FOOTBALL_API_KEY=your_api_key_here
```

### API Integration

The project is ready for real football APIs. Currently using mock data, but you can easily integrate:

- **API-Football**: Comprehensive football data
- **Football-Data.org**: Free tier available
- **Transfermarkt**: Unofficial APIs available

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Deploy with one click

3. **Environment Variables** (if using real APIs)
   - Add your API keys in Vercel dashboard
   - Under Settings → Environment Variables

### Alternative Deployment

You can also deploy to:
- **Netlify**: Similar to Vercel
- **Railway**: Good for full-stack apps
- **AWS Amplify**: Enterprise-grade hosting

## 📊 Current Features

### Homepage
- Modern hero section with search
- Feature highlights
- Trending players showcase
- Mobile-responsive design

### Search Functionality
- Real-time search suggestions
- Player autocomplete
- Quick navigation to player pages

### Player Detail Pages
- Complete player information
- Career statistics
- Personal details
- Achievements and awards
- Career history
- Market value information

## 🔮 Future Enhancements

- [ ] Real API integration
- [ ] Player comparison feature
- [ ] Club pages
- [ ] League standings
- [ ] Transfer news
- [ ] Player ratings
- [ ] Social sharing
- [ ] PWA support
- [ ] Dark/Light theme toggle

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from Lucide React
- Design inspiration from modern web apps

---

**Ready to deploy?** The project is fully configured for Vercel deployment. Just push to GitHub and connect to Vercel for instant deployment!

## ⚡️ Data Source

This project uses a static, high-quality dataset of top football players from major European leagues. No external API keys or paid services are required. All data is included in the repository, making it fully open-source and deployable anywhere (including Vercel) with zero configuration.
