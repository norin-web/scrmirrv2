// Every fact on the site lives here. Pages only read from this file.
// Facts follow the App Store listing (id 6449234890), the app itself and its legal documents.

export const site = {
  brand: "Screen Mirroring",
  fullName: "Screen Mirroring・Air Cast TV",
  operator: "Tech Goats DOO",
  address: "Vitezova Karađorđeve Zvezde 50, 11050 Belgrade (Zvezdara), Serbia",
  email: "uros1ceo@techgoats.store",
  supportEmail: "support@screenmirroring.mobile",
  year: 2026,
  // from Terms of Use §9 and §13
  disclaimer: "Apple and the names of third-party brands remain the property of their respective owners.",
};

export const app = {
  id: "6449234890",
  url: "https://apps.apple.com/app/id6449234890",
  minIOS: "17.0",
  category: "Utilities",
  icon: "/images/app-icon.png",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/app", label: "The App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Short iPhone Duo notice in the bar above the header.
export const duoNotice = {
  text: "Screen Mirroring now supports iPhone Duo.",
  link: "/about#duo",
  cta: "See how it looks",
};

export const hero = {
  title: ["Mirror your iPhone", "to your smart TV"],
  lead: "Share videos, photos, games and apps on the big screen with smooth, reliable wireless casting. No cables, just the same Wi-Fi network.",
  note: `Free download with in-app purchases. Requires iOS ${app.minIOS} or later.`,
  phone: "/images/m-connected.webp",
};

// Four headline features, titled as on the App Store screenshots.
export const features = [
  {
    title: "Mirror Screen to Your TV",
    text: "Everything on your iPhone, live on the TV, with Auto-Rotate and Sound.",
    img: "/images/m-screen.webp",
    pos: "top",
  },
  {
    title: "Cast Any Media to Your TV",
    text: "Photo, Video, Slides and Music, one tap from the big screen.",
    img: "/images/m-home.webp",
    pos: "middle",
  },
  {
    title: "Cast from Browsers",
    text: "Open a website in Cast Browser and show it on the TV.",
    img: "/images/m-browser.webp",
    pos: "top",
  },
  {
    title: "Quick TV Connection",
    text: "Pick your TV from the list and the app connects over Wi-Fi.",
    img: "/images/m-devices.webp",
    pos: "top",
  },
];

// Sources from the app's sidebar. Subtitles are the app's own captions.
export const sources = [
  {
    name: "iPhone Screen",
    sub: "Mirror your screen",
    icon: "screen",
    tint: "#6376DB",
    text: "Mirror the whole iPhone in real time: apps, games, presentations, anything on screen. Turn on Do Not Disturb first so notifications stay private.",
  },
  {
    name: "Photo",
    sub: "Cast from Library",
    icon: "photo",
    tint: "#34C759",
    text: "Pick pictures from your library and flip through them on the TV.",
  },
  {
    name: "Video",
    sub: "Cast from Library",
    icon: "video",
    tint: "#5E5CE6",
    text: "Play clips from your camera roll on the big screen with sound, without cables.",
  },
  {
    name: "Slideshow",
    sub: "Cast from Library",
    icon: "slides",
    tint: "#E84FD3",
    text: "Turn an album into a slideshow for the living room: trips, family evenings, a birthday on the wall-sized screen.",
  },
  {
    name: "Music",
    sub: "Cast Apple Music",
    icon: "music",
    tint: "#2EC4C9",
    text: "Send songs to the TV speakers.",
  },
  {
    name: "Browser",
    sub: "Cast Browser",
    icon: "browser",
    tint: "#FF9F0A",
    text: "Search or enter a website name and the page opens on your TV, with back, forward and bookmarks at hand.",
  },
];

// iPhone Duo: two postures.
export const duo = {
  title: "Made for iPhone Duo",
  lead: "When iPhone Duo arrived, we rebuilt Screen Mirroring for it. The layout changes the moment you fold or unfold.",
  modes: [
    {
      key: "folded",
      label: "Folded",
      big: "One hand",
      small: "on the cover screen",
      text: "The full home screen fits the outer display, with navigation on the side.",
      points: [
        "Smart TV card, iPhone Screen and media tiles on one screen",
        "Side bar with Home, Cast and Settings",
        "Photo, Video, Slideshow and Music one tap away",
        "Stop Casting right where you started",
      ],
      shot: "/images/duo-fold-home.webp",
    },
    {
      key: "unfolded",
      label: "Unfolded",
      big: "Side by side",
      small: "on the inner screen",
      text: "Open it up and the app shows every source and the content next to each other.",
      points: [
        "Sidebar with every source, from iPhone Screen to Drawing",
        "Content and controls next to each other",
        "Larger photo preview with the picture row below",
        "Home, Cast and Settings stay on the right edge",
      ],
      shot: "/images/duo-open-home.webp",
    },
  ],
};

export const faq = [
  {
    q: "How do I connect to my TV?",
    a: "Put your iPhone and TV on the same Wi-Fi network, open Screen Mirroring, tap Connect on the Smart TV card and pick your TV from the list.",
  },
  {
    q: "Which TVs does it work with?",
    a: "Screen Mirroring works with major smart TV brands that are on the same Wi-Fi network as your iPhone. If your TV doesn’t show up, check that both devices use the same network.",
  },
  {
    q: "Does it work on iPhone Duo?",
    a: "Yes. The app adapts to both displays: the cover screen when the phone is folded and the inner screen when it’s open.",
  },
  {
    q: "How do I stop mirroring my screen?",
    a: "Tap Stop in Cast iPhone Screen, then tap Stop Broadcast. The app shows the same two steps under “How to Stop”.",
  },
  {
    q: "Is it free?",
    a: "The app is free to download. Some features need a subscription or a one-time purchase; the price and billing period are shown in the app before you pay.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Subscriptions are managed by Apple. Open Settings on your iPhone, tap your name, then Subscriptions, choose Screen Mirroring and tap Cancel Subscription. Cancel at least 24 hours before the period ends to avoid renewal.",
  },
  {
    q: "How do I restore a purchase?",
    a: "Open the subscription screen in the app and tap Restore. Use the same Apple ID you bought with.",
  },
  {
    q: "Are my notifications shown on the TV?",
    a: "When you mirror the whole screen, everything on it is recorded, including notifications. Turn on Do Not Disturb before you start to keep them private.",
  },
];

export const steps = [
  { title: "Get the app", text: "Download Screen Mirroring from the App Store and open it." },
  { title: "Join one Wi-Fi", text: "Connect your iPhone and TV to the same Wi-Fi network, then tap Connect." },
  { title: "Pick and cast", text: "Choose iPhone Screen, Photo, Video, Music or Browser and it plays on the TV." },
];

// From the App Store lookup. No version number on purpose.
export const specs: [string, string][] = [
  ["Developer", "Tech Goats DOO"],
  ["Category", "Utilities"],
  ["Compatibility", "iPhone with iOS 17.0 or later"],
  ["Size", "143.8 MB"],
  ["Languages", "English and 39 more"],
  ["Age rating", "4+"],
  ["Price", "Free, with in-app purchases"],
  ["On the App Store since", "May 2023"],
];

export const rating = { value: "4.6", count: "1,238" };

// App screens in device mockups for the ticker and the App page.
export const shots = [
  { src: "/images/m-connected.webp", alt: "Home screen connected to a Samsung TV" },
  { src: "/images/duo-open-home.webp", alt: "iPhone Duo unfolded: home with sidebar" },
  { src: "/images/m-browser.webp", alt: "Cast Browser with popular sites" },
  { src: "/images/duo-fold-photo.webp", alt: "iPhone Duo folded: Cast Photo" },
  { src: "/images/m-photo.webp", alt: "Cast Photo with picture row" },
  { src: "/images/m-screen.webp", alt: "Cast iPhone Screen settings" },
  { src: "/images/duo-open-photo.webp", alt: "iPhone Duo unfolded: Cast Photo" },
  { src: "/images/m-devices.webp", alt: "Connect Device list of TVs" },
  { src: "/images/duo-fold-home.webp", alt: "iPhone Duo folded: home" },
  { src: "/images/m-home.webp", alt: "Home screen with Photo, Video, Slideshow and Music" },
];

export const appShots = [
  { src: "/images/m-connected.webp", alt: "Home screen connected to a TV" },
  { src: "/images/m-devices.webp", alt: "Connect Device list" },
  { src: "/images/m-browser.webp", alt: "Cast Browser" },
  { src: "/images/m-photo.webp", alt: "Cast Photo" },
  { src: "/images/m-screen.webp", alt: "Cast iPhone Screen" },
];

export const about = {
  intro:
    "Tech Goats DOO makes Screen Mirroring・Air Cast TV, an iPhone app for putting your screen, photos, videos and music on a smart TV. It has been on the App Store since May 2023 and now runs on iPhone Duo too.",
  principles: [
    {
      title: "A few taps to the TV",
      text: "Connect, pick what to show, cast. Every screen in the app is built around that path.",
    },
    {
      title: "Clear about costs",
      text: "The download is free. Prices and billing periods are shown in the app before you pay, and Apple handles every subscription.",
    },
    {
      title: "Ready for new iPhones",
      text: "When iPhone Duo arrived we adapted the whole app to both of its screens.",
    },
  ],
};
