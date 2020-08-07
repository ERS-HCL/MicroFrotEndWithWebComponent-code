export interface PlayersRoot {
  error: string;
  total: string;
  data: PlayersInfo[];
}

export interface PlayersInfo {
  id: string;
  firstname: string;
  lastname: string;
  shirtnumber: string;
  position: string;
  quote: string;
  statusSent?: boolean;
  skills: PlayerStats[];
  stats: PlayerStats[];
}
export interface PlayerStats {
  key: string;
  value: string;
  icon?: string;
}
