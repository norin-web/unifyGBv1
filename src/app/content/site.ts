// Every fact lives here. Copy follows only what the app screens and the App Store listing show.

export const site = {
  name: "Unify Messenger",
  email: "nadine@rosenbergerapp.click",
  copyright: "© 2026 Unify Messenger",
};

export const app = {
  appStoreId: "6831609609",
  url: "https://apps.apple.com/app/id6831609609",
};

export const nav = [
  { label: "App", to: "/app" },
  { label: "About", to: "/about" },
  { label: "Support", to: "/support" },
  { label: "Contact", to: "/contact" },
];

export const features = [
  {
    title: "Home",
    text: "Unread messages, your next visit and key dates on one screen.",
  },
  {
    title: "Messages",
    text: "Every conversation in one list, with unread counts.",
  },
  {
    title: "Chat",
    text: "Write messages and see when they are delivered.",
  },
  {
    title: "Ask about prison rules",
    text: "Get a plain answer about rules and privileges, with its source.",
  },
];

export const walkthrough = [
  { id: "home", title: "Home", text: "Next visit, unread messages, key dates", img: "/images/screen-home.png", alt: "Home screen" },
  { id: "messages", title: "Messages", text: "Every conversation in one list", img: "/images/screen-messages.png", alt: "Messages screen" },
  { id: "chat", title: "Chat", text: "Messages with delivery status", img: "/images/screen-chat.png", alt: "Chat screen" },
  { id: "new", title: "New chat", text: "Ask about prison rules, with sources", img: "/images/screen-newchat.png", alt: "New chat screen" },
];

export const steps = [
  { title: "Download", text: "Get Unify Messenger from the App Store." },
  { title: "Connect", text: "Connect with the person inside. Once the connection is approved, you can message them." },
  { title: "Write and ask", text: "Message them, keep track of visits and ask the assistant about prison rules." },
];

export const faq = [
  { q: "How do I download the app?", a: "Use the Download button on this site. It opens the app page on the App Store." },
  { q: "How do I get in touch?", a: `Email ${"nadine@rosenbergerapp.click"} or use the Contact page.` },
];
