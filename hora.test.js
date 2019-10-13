const get_time_campanar = require('./hora.js');

test('get_time_campanar tests', () => {
    expect(get_time_campanar(1,1)).toBe("La una i un (minut)");
    expect(get_time_campanar(1,2)).toBe("La una i dos (minuts)");
    expect(get_time_campanar(1,3)).toBe("La una i tres (minuts)");
    expect(get_time_campanar(1,4)).toBe("La una i quatre (minuts)");
    expect(get_time_campanar(1,5)).toBe("La una i cinc (minuts)");
    expect(get_time_campanar(1,6)).toBe("La una i sis (minuts)");
    expect(get_time_campanar(1,7)).toBe("Mig quart d'una");
    expect(get_time_campanar(1,9)).toBe("La una i nou (minuts)");
    expect(get_time_campanar(1,10)).toBe("La una i deu (minuts)");
    expect(get_time_campanar(1,11)).toBe("La una i onze (minuts)");
    expect(get_time_campanar(1,12)).toBe("La una i dotze (minuts)");
    expect(get_time_campanar(1,13)).toBe("La una i tretze (minuts)");
    expect(get_time_campanar(1,14)).toBe("La una i catorze (minuts)");
    expect(get_time_campanar(1,15)).toBe( "Un quart de dues");
});
