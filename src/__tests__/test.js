import Daemon from '../Daemon';
import Magician from '../Magician';

test('to check that hero attack on non-magicians reduces based on distance (cells) for Daemon', () => {
  const input = new Daemon('Joe');
  input.attack = 5;
  expect(input.attack).toBe(5);
});

test('to check that hero attack on non-magicians reduces based on distance (cells) for Magician', () => {
  const input = new Magician('Joe');
  input.attack = 11;
  expect(input.attack).toBe(0);
});

test('to check that hero attack on magicians reduces based on distance (cells) for Daemon', () => {
  const input = new Daemon('Joe');
  input.stoned = 4;
  expect(input.stoned).toBe(0);
});

test('to check that hero attack on magicians reduces based on distance (cells) for Magician', () => {
  const input = new Magician('Joe');
  input.stoned = 999999999;
  expect(input.stoned).toBe(0);
});
