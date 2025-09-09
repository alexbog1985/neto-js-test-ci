import { getHealthStatus, sortHeroesByHealth } from '../app';

describe('getHealthStatus tests', () => {
  const healthTestCases = [
    // [входные данные, ожидаемый результат, описание]
    [{ name: 'Маг', health: 90 }, 'healthy', 'health > 50'],
    [{ name: 'Воин', health: 51 }, 'healthy', 'health = 51 (граничное значение)'],
    [{ name: 'Лучник', health: 50 }, 'wounded', 'health = 50 (граничное значение)'],
    [{ name: 'Вор', health: 30 }, 'wounded', 'health между 15 и 50'],
    [{ name: 'Лекарь', health: 15 }, 'wounded', 'health = 15 (граничное значение)'],
    [{ name: 'Мечник', health: 14 }, 'critical', 'health = 14 (граничное значение)'],
    [{ name: 'Паладин', health: 10 }, 'critical', 'health < 15'],
    [{ name: 'Рыцарь', health: 0 }, 'critical', 'health = 0'],
    [{ name: 'Некромант', health: -5 }, 'critical', 'отрицательное health'],
  ];

  test.each(healthTestCases)('для персонажа %o возвращает %s (%s)',
    (character, expected, _) => {
      const result = getHealthStatus(character);

      expect(result).toBe(expected);
    }
  );
});

describe('sortHeroesByHealth tests', () => {
  const sortTestCases = [
    [
      [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
      ],
      [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
      ],
      'Проверка сортировки',
    ]
  ];

  test.each(sortTestCases)(
    '%o %o',
    (input, expected, _) => {
      expect(sortHeroesByHealth(input)).toEqual(expected);
    }
  );
});
