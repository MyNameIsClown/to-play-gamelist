import { Game } from "../models/game";
import { computeMetric, sortGames } from "./backlog.domain";

describe('Domain tests', () => {

  it('compute metrics', () => {
    const game: Game = { id: '1', title: 'Zelda', description:"Zelda", rating: 80, durationHours: 40 };
    const result = computeMetric(game)
    expect(result).toBe(2);
  });

  it('sort games', ()=>{
    const games: Game[] = [
      {id: '1', title: 'Zelda', description:"Zelda", rating: 80, durationHours: 40},
      {id: '2', title: 'The Witcher', description:"The Witcher", rating: 90, durationHours: 100}
    ]
    const expectedOrderGames: Game[] = [
      {id: '1', title: 'Zelda', description:"Zelda", rating: 80, durationHours: 40},
      {id: '2', title: 'The Witcher', description:"The Witcher", rating: 90, durationHours: 100}
    ]
    const orderedGames = sortGames(games);
    expect(orderedGames).toEqual(expectedOrderGames);
  });

});
