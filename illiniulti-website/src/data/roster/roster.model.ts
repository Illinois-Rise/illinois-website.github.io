export interface RosterYear {
    year: number;
    imagePath: string;
    players: RosterPlayer[];
}

export interface RosterPlayer {
    number: number|undefined;
    name: string;
    year: string;
}