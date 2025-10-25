import { Game } from "../models/game";
import { computeMetric } from "./backlog.domain";

describe('Domain tests', () => {

  it('compute metrics', () => {
    const game: Game = { id: '1', title: 'Zelda', description:"Zelda", rating: 80, durationHours: 40 };
    const result = computeMetric(game)
    expect(result).toBe(0.5);
  });

});
