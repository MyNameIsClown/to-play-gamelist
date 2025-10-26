export interface Game{
    id: string;
    title: string;
    description: string;
    rating: number; // Metacritic user score
    durationHours: number;
    coverUrl?: string;
}