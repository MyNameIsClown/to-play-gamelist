import { BacklogItem } from '../models/backlog-item';
import { Game } from '../models/game';

export function computeMetric(game: Game): number {
  return game.rating!/game.durationHours!;
}

export function sortGames(games: Game[]): Game[] {
  return games.sort((a, b) => computeMetric(b) - computeMetric(a));
}

export function sortBacklog(backlogList: BacklogItem[]): BacklogItem[] {
  return backlogList.sort((a, b) => b.calculated_mark - a.calculated_mark);
}
