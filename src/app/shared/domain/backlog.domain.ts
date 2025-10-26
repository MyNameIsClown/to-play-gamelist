import { Game } from '../models/game';

export function computeMetric(game: Game): number {
  return game.rating/game.durationHours;
}

export function sortGames(games: Game[]): Game[] {
  return games.sort((a, b) => computeMetric(b) - computeMetric(a));
}
