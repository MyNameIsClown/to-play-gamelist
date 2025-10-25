export interface Game{
    id: string;
    title: string;
    description: string;
    rating: number;
    durationHours: number;
    coverUrl?: string;
}