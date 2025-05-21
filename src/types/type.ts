export interface childProps {
    children: React.ReactNode;
}

export type GameStatus = 'waiting' | 'playing' | 'won' | 'lost';

export interface GameState {
  status: GameStatus;
  currentWord: string;
  resetGame: () => void
}

export interface userCreate { 
  firstName: string, 
  lastName ?: string, 
  email: string, 
  avatar ?: string
}