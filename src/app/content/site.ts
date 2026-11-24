// Every fact lives here. Copy follows only what the app screens show.

export const site = {
  name: "Unify Messenger",
  email: "nadine@rosenbergerapp.click",
  copyright: "© 2026 Unify Messenger. All rights reserved.",
};

export const app = {
  appStoreId: "6831609609",
  url: "https://apps.apple.com/app/id6831609609",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "App", to: "/app" },
  { label: "About", to: "/about" },
  { label: "Support", to: "/support" },
  { label: "Contact", to: "/contact" },
];

export const screens = {
  home: { src: "/images/screen-home.webp", alt: "Unify Messenger home screen with next visit and unread messages" },
  messages: { src: "/images/screen-messages.webp", alt: "Messages list" },
  chat: { src: "/images/screen-chat.webp", alt: "Chat with delivery status" },
  ask: { src: "/images/screen-newchat.webp", alt: "Assistant answering a question about prison rules" },
};

// Feature tabs: each one switches the phone screen next to it.
export const features = [
  {
    id: "home",
    label: "Home",
    title: "Your day at a glance.",
    text: "Unread messages, the next visit, status and key dates sit together on one screen.",
    screen: screens.home,
  },
  {
    id: "messages",
    label: "Messages",
    title: "Every conversation in one list.",
    text: "See who wrote, what they said and how many messages are unread. New connections show up at the top.",
    screen: screens.messages,
  },
  {
    id: "chat",
    label: "Chat",
    title: "Know your message arrived.",
    text: "Each message shows when it was delivered, so you are never left guessing.",
    screen: screens.chat,
  },
  {
    id: "ask",
    label: "Ask about rules",
    title: "Clear answers about prison rules.",
    text: "Ask what a status or rule means and get a plain answer with its source.",
    screen: screens.ask,
  },
];

export const statement = [
  { t: "From the first" },
  { chip: "Message" },
  { t: "to the next" },
  { chip: "Visit" },
  { t: "— Unify keeps every conversation, every key date and every" },
  { chip: "Answer" },
  { t: "about prison rules in one place." },
];

export const steps = [
  { title: "Download the app", text: "Get Unify Messenger on the App Store." },
  { title: "Say hello", text: "When a connection is approved, it appears at the top of Messages. Tap it and write your first message." },
  { title: "Write and ask", text: "Send messages, keep track of visits and ask about prison rules." },
];

export const faq = [
  {
    q: "What is Unify Messenger?",
    a: "An iPhone app for staying in touch with someone in prison. Messages, visit dates and answers about prison rules are in one place.",
  },
  {
    q: "How do I start messaging?",
    a: "Download the app. When a connection is approved, it appears at the top of Messages marked “New”, and you can write your first message.",
  },
  {
    q: "What can I ask the assistant?",
    a: "Questions about prison rules, for example what a “Standard” level means. Answers show their source, such as the HMPPS Incentives Policy Framework.",
  },
  {
    q: "How do I know my message arrived?",
    a: "Every message in a chat shows its delivery status and the time it was delivered.",
  },
  {
    q: "How do I contact support?",
    a: "Email nadine@rosenbergerapp.click or use the Contact page. Include your iPhone model and a short description of the issue.",
  },
];
