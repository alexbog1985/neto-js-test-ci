import { getHealthStatus } from '../app';

test.each([
  [{ name: 'char 1', health: 90 }, 'healthy', 'health > 50'],
  [{ name: 'char 2', health: 51 }, 'healthy', 'health = 51 (граничное значение)'],
  [{ name: 'char 3', health: 50 }, 'wounded', 'health = 50 (граничное значение)'],
  [{ name: 'char 4', health: 30 }, 'wounded', 'health между 15 и 50'],
  [{ name: 'char 5', health: 15 }, 'wounded', 'health = 15 (граничное значение)'],
  [{ name: 'char 6', health: 14 }, 'critical', 'health = 14 (граничное значение)'],
  [{ name: 'char 7', health: 10 }, 'critical', 'health < 15'],
  [{ name: 'char 8', health: 0 }, 'critical', 'health = 0'],
  [{ name: 'char 9', health: -5 }, 'critical', 'отрицательное health'],
])('для персонажа %o возвращает %s (%s)',
  (character, expected, _) => {
    const result = getHealthStatus(character);

    expect(result).toBe(expected);
  }
);