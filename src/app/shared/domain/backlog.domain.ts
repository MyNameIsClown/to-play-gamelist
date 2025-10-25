import { Game } from '../models/game';

export function computeMetric(game: Game): number {
  return game.durationHours/game.rating;
}

export function sortGames(games: Game[]): Game[] {
    return games.sort((a, b) => computeMetric(a)-computeMetric(b) )
}
