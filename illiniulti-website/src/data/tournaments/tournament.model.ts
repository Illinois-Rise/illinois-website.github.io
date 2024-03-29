export interface TournamentYear {
  year: number;
  tournaments: Tournament[];
}

export interface Tournament {
  season: string;
  nameLabel: string;
  nameLink: string;
  when: string;
  location: string;
  result: string;
}
