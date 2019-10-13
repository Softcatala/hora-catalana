const get_time_campanar = require('./hora.js');

test('get_time_campanar tests', () => {
  expect(get_time_campanar(1,1)).toBe("La una i un (minut)");
});
