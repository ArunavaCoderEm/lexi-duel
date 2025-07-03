export interface childProps {
  children: React.ReactNode;
}

export type GameStatus = "waiting" | "playing" | "won" | "lost" | "ready";

export interface GameState {
  status: GameStatus;
  currentWord: string;
  resetGame: () => void;
  setGame: (game: Partial<Omit<GameState, "setGame">>) => void;
}

export interface userCreate {
  firstName: string;
  lastName?: string;
  email: string;
  avatar?: string;
}

export interface stateUser extends userCreate {
  isLoggedIn: boolean;
  isInDB: boolean;
  setUser: (user: Partial<Omit<stateUser, "setUser">>) => void;
}

export interface classnameprop {
  classname?: string;
}

export interface DotPatternBackgroundProps {
  dotSize?: number;
  dotColor?: string;
  backgroundColor?: string;
  gap?: number;
  maskColor?: string;
  className?: string;
  style?: React.CSSProperties;
  fade?: boolean;
  [key: string]: unknown;
}

export type navbarProps = {
  slug: string;
  title: string;
};

export type LetterBlockProps = { letter: string; classname?: string };

export interface featuresProps {
  title: string;
  img: string;
  desc: string;
}

export type Testimonial = {
  name: string;
  quote: string;
  image: string;
};
