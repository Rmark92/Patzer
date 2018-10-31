const Position = require('./index.js');
const perft = require('./utils/perft.js');

test('it works', () => {
  const pos = new Position();
  // expect(perft(pos, 0)).toBe(1);
  // expect(perft(pos, 1)).toBe(20);
  // expect(perft(pos, 3)).toBe(8902);
  // expect(perft(pos, 4)).toBe(197281);
  expect(perft(pos, 5)).toBe(4865609);

});
