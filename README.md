# 🚌 TransitSave — Smart Transit Fare Comparison

> A web-based Progressive Web App (PWA) for unified public transit fare comparison and route planning across **Chennai** and **Trichy**, Tamil Nadu.

🌐 **Live Demo:** [transitsave.netlify.app](https://transitsave.netlify.app)

---

## 📌 What is TransitSave?

Commuters in Tamil Nadu have to check **3 different apps** just to compare fares between MTC Bus, Metro Rail, and Suburban Train. There is no single platform that shows all fares together — and government welfare schemes like the **free Pink Bus for women** and **Student Pass** are never shown in any navigation tool.

**TransitSave solves all of this in one place.**

---

## ✨ Features

| Feature | Description |
|---|---|
| 🚌 **Fare Comparison** | Compare MTC Ordinary, MTC Express, MTC Deluxe, Metro Rail, Suburban Train, Private Bus, TNSTC — side by side |
| 🩷 **Pink Bus Scheme** | 100% free MTC Ordinary + TNSTC for women — auto applied |
| 🎓 **Student Pass** | 100% free MTC Ordinary for students — toggle to apply |
| 📅 **Monthly Calculator** | Estimate monthly travel cost by distance + trips/day + working days |
| 🌏 **Tamil & English** | Full UI language switch without page reload |
| 🌙 **Dark / Light Mode** | Theme toggle for visual comfort |
| 📶 **Offline PWA** | Works without internet after first load via service worker |
| 🗺️ **Transit Map** | Offline CMRL metro network map modal |
| 🔍 **Smart Search** | Enhanced route search with recent routes history |
| 🏙️ **City Comparison** | Compare routes across Chennai and Trichy |
| ⚡ **Proximity Alert** | Nearby transit alerts based on location |
| ☁️ **Weather Comfort** | Weather comfort pill for travel planning |

---

## 🗂️ Routes Covered

- ✅ **55 Chennai routes** — CMRL Blue Line, Green Line, MTC corridors, Suburban Rail
- ✅ **45 Trichy routes** — TNSTC intercity and intracity services
- ✅ **100 total routes** with real distance measurements
- ✅ **Intercity routes** — via `intercityRoutes.ts`
- ✅ **Metro routes** — via `metroRoutes.ts` + `metroData.ts`

---

## 💰 Fare Data (2026 Updated)

| Mode | Fare Range | Women Scheme | Student Pass |
|---|---|---|---|
| MTC Ordinary Bus | ₹5 – ₹24 | ✅ 100% Free | ✅ 100% Free |
| MTC Express Bus | ₹10 – ₹48 | ❌ | 50% off |
| MTC Deluxe (SETC) | ₹15 – ₹60 | ❌ | ❌ |
| Chennai Metro (CMRL) | ₹10 – ₹50 | ❌ | ❌ |
| Suburban Train | ₹5 – ₹35 | ❌ | Season pass |
| Private Bus | ₹10 – ₹60 | ❌ | ❌ |
| TNSTC (Trichy) | ₹5 – ₹30 | ✅ 100% Free | 50% off |

> All fare data sourced from official Tamil Nadu Government notifications and CMRL/Southern Railway published tariffs.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React.js 18** | Component-based frontend |
| **TypeScript** | Type-safe development |
| **TailwindCSS 3** | Responsive utility-first styling |
| **Vite** | Lightning-fast build tool |
| **vite-plugin-pwa** | Service worker + PWA manifest generation |
| **React Context API** | Language + Theme state management |
| **shadcn/ui** | Accessible UI component library |
| **Netlify CDN** | Static deployment + continuous delivery |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Subash-Nagaraj-V/transitsave.git

# Navigate to project folder
cd transitsave/transitsave-main

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will run at `http://localhost:8080`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui base components
│   ├── FareComparison.tsx     # Main fare results + welfare logic
│   ├── RouteSearch.tsx        # Route search input
│   ├── RouteSelector.tsx      # Origin/destination selector
│   ├── SearchEnhanced.tsx     # Enhanced search with filters
│   ├── CustomCalculator.tsx   # Monthly cost calculator
│   ├── CityComparison.tsx     # Chennai vs Trichy comparison
│   ├── TransitMap.tsx         # Transit map component
│   ├── TransitMapModal.tsx    # Offline CMRL metro map modal
│   ├── ConductorCard.tsx      # Conductor info card
│   ├── ProximityAlert.tsx     # Nearby transit alerts
│   ├── WeatherComfortPill.tsx # Weather comfort indicator
│   ├── Header.tsx             # App header + nav
│   ├── HeroSection.tsx        # Landing hero section
│   ├── ShareButton.tsx        # Share route feature
│   ├── TransitAlerts.tsx      # Live transit alerts
│   └── NavLink.tsx            # Navigation link component
│
├── contexts/
│   └── LanguageContext.tsx    # Tamil/English translations
│
├── data/
│   ├── routes.ts              # 100 routes + stage-based fare data
│   ├── metroData.ts           # CMRL station list + fare matrix
│   ├── metroRoutes.ts         # Metro-specific route definitions
│   ├── intercityRoutes.ts     # Intercity route data
│   ├── transportImages.ts     # Transport mode image mappings
│   └── imageQualityGuide.ts   # Image quality configurations
│
├── hooks/
│   ├── use-mobile.tsx         # Mobile viewport detection
│   ├── use-toast.ts           # Toast notification hook
│   └── useRecentRoutes.ts     # Recent routes history hook
│
├── lib/
│   └── utils.ts               # Utility functions
│
├── pages/
│   ├── Index.tsx              # Main page
│   ├── Install.tsx            # PWA install guide page
│   └── NotFound.tsx           # 404 page
│
└── test/
    ├── example.test.ts        # Example test cases
    └── setup.ts               # Test setup configuration

public/
├── images/                    # Transit mode images (webp, avif)
│   ├── Deluxe Bus (SETC).webp
│   ├── Express Bus (Green).webp
│   ├── Government Bus (PINK).webp
│   ├── Metro Rail.avif
│   ├── Private Bus.webp
│   ├── SubUrban Train.webp
│   ├── metro-map.jpg
│   └── transit-map.png
├── transport/                 # Transport category icons
├── pwa-192x192.png            # PWA icon (192px)
└── pwa-512x512.png            # PWA icon (512px)
```

---

## 📱 PWA Installation

TransitSave can be installed on your phone like a native app:

1. Open [transitsave.netlify.app](https://transitsave.netlify.app) in Chrome or Edge
2. Tap the **"Install"** button in the browser address bar
3. Or go to the **Install page** inside the app
4. Once installed, the app works **fully offline** for all 100 routes

---

## 🏛️ Official Data Sources

| Data | Source |
|---|---|
| MTC Ordinary & Express Fares | G.O. (Ms.) No. 48, TN Transport Dept, Jan 2018 |
| Women Free Bus Scheme | G.O. (Ms.) No. 117, TN Transport Dept, Sep 2021 |
| CMRL Metro Fares | CMRL Official Fare Chart, Feb 2021 |
| TNSTC Trichy Fares | TNSTC Tiruchirappalli Division Tariff, 2022 |
| Suburban Rail Fares | Southern Railway Tariff Circular, 2023 |

---

## 🧪 Running Tests

```bash
# Run test suite
npm run test

# Run tests with coverage
npm run test -- --coverage
```

---

## 🌐 Deployment

The app is deployed on **Netlify** with automatic builds triggered on every push to the `main` branch.

```bash
# Build output goes to /dist folder
npm run build
```

Netlify configuration is auto-detected from `vite.config.ts`.

---

## 🔮 Roadmap

- [ ] 📍 Live GPS bus tracking integration
- [ ] 🎟️ Direct ticket purchasing + QR code generation
- [ ] 🏙️ Expand to Coimbatore, Madurai, Salem
- [ ] 📊 GTFS-Fares v2 integration for automated fare updates
- [ ] 🔔 Push notifications for route alerts

---

## 👨‍💻 Author

**Subash Nagaraj.V**
3rd Year — Artificial Intelligence and Machine Learning
Dhanalakshmi Srinivasan University, Tiruchirappalli
📧 subashnagaraj796@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/subashnagaraj)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

MIT License — free to use and modify with attribution.

---

<p align="center">Made with ❤️ for commuters of Tamil Nadu</p>
