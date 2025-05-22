import { featuresProps, navbarProps, Testimonial } from "@/types/type";

export const navbarItems: navbarProps[] = [
  { title: "About", slug: "about" },
  { title: "Support", slug: "support" },
  { title: "Features", slug: "features" },
];

export const featuresTop: featuresProps[] = [
  {
    title: "Realtime Game",
    desc: "Engage in fast-paced multiplayer games where every move is instantly reflected, offering a smooth, competitive experience with synced game states and stunning visual feedback.",
    img: "/Images/1.png",
  },
  {
    title: "Live Collaboration",
    desc: "Work together seamlessly with friends or teammates through live collaboration tools, allowing for shared control, real-time feedback, and enhanced productivity within the platform.",
    img: "/Images/2.png",
  },
];

export const featuresBottom: featuresProps[] = [
  {
    title: "Leaderboards",
    desc: "Challenge yourself and others by climbing global leaderboards that update in real time. Track your progress, compare stats, and see how you rank against the best players worldwide.",
    img: "/Images/3.png",
  },
  {
    title: "AI-Powered Insights",
    desc: "Leverage cutting-edge machine learning algorithms that analyze your gameplay and provide detailed performance insights, strategic suggestions, and ways to improve over time.",
    img: "/Images/2.png",
  },
  {
    title: "Custom Avatars",
    desc: "Express your personality through fully customizable avatars. Choose from a variety of outfits, accessories, animations, and gear to stand out and represent your unique style.",
    img: "/Images/3.png",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Alyssa Morris",
    quote: "This is the best platform I’ve used—clean UI, intuitive design, and super fast performance!",
    image: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww", 
  },
  {
    name: "Randall Howard",
    quote: "The perfect organizer and team builder. We’ve streamlined our entire workflow with this tool.",
    image: "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  },
  {
    name: "Adam Worrell",
    quote: "Flexible product with near endless possibilities. It adapts to whatever we need.",
    image: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww", 
  },
  {
    name: "Leah Carter",
    quote: "I was amazed at how quickly I could get started. No tutorials needed. Just plug and play.",
    image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D", 
  },
  {
    name: "Marcus Bell",
    quote: "Reliable, fast, and beautiful—this tool changed how our team collaborates daily.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww", 
  },
];
