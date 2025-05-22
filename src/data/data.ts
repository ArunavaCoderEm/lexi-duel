import { featuresProps, navbarProps } from "@/types/type";

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
