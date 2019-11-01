const get_time_campanar = require('./hora.js');

test('get_time_campanar tests', () => {
    expect(get_time_campanar(1,1)).toBe("La una i un (minut)");
    expect(get_time_campanar(1,2)).toBe("La una i dos (minuts)");
    expect(get_time_campanar(1,3)).toBe("La una i tres (minuts)");
    expect(get_time_campanar(1,4)).toBe("La una i quatre (minuts)");
    expect(get_time_campanar(1,5)).toBe("La una i cinc (minuts)");
    expect(get_time_campanar(1,6)).toBe("La una i sis (minuts)");
    expect(get_time_campanar(1,7)).toBe("Mig quart d'una");
    expect(get_time_campanar(1,8)).toBe("Mig quart d'una");
    expect(get_time_campanar(1,9)).toBe("La una i nou (minuts)");
    expect(get_time_campanar(1,10)).toBe("La una i deu (minuts)");
    expect(get_time_campanar(1,11)).toBe("La una i onze (minuts)");
    expect(get_time_campanar(1,12)).toBe("La una i dotze (minuts)");
    expect(get_time_campanar(1,13)).toBe("La una i tretze (minuts)");
    expect(get_time_campanar(1,14)).toBe("La una i catorze (minuts)");
    expect(get_time_campanar(1,15)).toBe( "Un quart de dues");

    expect(get_time_campanar(1,16)).toBe("Un quart i un (minut) de dues");
    expect(get_time_campanar(1,17)).toBe("Un quart i dos (minuts) de dues");
    expect(get_time_campanar(1,18)).toBe("Un quart i tres (minuts) de dues");
    expect(get_time_campanar(1,19)).toBe("Un quart i quatre (minuts) de dues");
    expect(get_time_campanar(1,20)).toBe("Un quart i cinc (minuts) de dues");
    expect(get_time_campanar(1,21)).toBe("Un quart i sis (minuts) de dues");
    expect(get_time_campanar(1,22)).toBe("Un quart i mig de dues");
    expect(get_time_campanar(1,23)).toBe("Un quart i mig de dues");
    expect(get_time_campanar(1,24)).toBe("Un quart i nou (minuts) de dues");
    expect(get_time_campanar(1,25)).toBe("Un quart i deu (minuts) de dues");
    expect(get_time_campanar(1,26)).toBe("Un quart i onze (minuts) de dues");
    expect(get_time_campanar(1,27)).toBe("Un quart i dotze (minuts) de dues");
    expect(get_time_campanar(1,28)).toBe("Un quart i tretze (minuts) de dues");
    expect(get_time_campanar(1,29)).toBe("Un quart i catorze (minuts) de dues");
    expect(get_time_campanar(1,30)).toBe( "Dos quarts de dues");

    expect(get_time_campanar(1,31)).toBe("Dos quarts i un (minut) de dues");
    expect(get_time_campanar(1,32)).toBe("Dos quarts i dos (minuts) de dues");
    expect(get_time_campanar(1,33)).toBe("Dos quarts i tres (minuts) de dues");
    expect(get_time_campanar(1,34)).toBe("Dos quarts i quatre (minuts) de dues");
    expect(get_time_campanar(1,35)).toBe("Dos quarts i cinc (minuts) de dues");
    expect(get_time_campanar(1,36)).toBe("Dos quarts i sis (minuts) de dues");
    expect(get_time_campanar(1,37)).toBe("Dos quarts i mig de dues");
    expect(get_time_campanar(1,38)).toBe("Dos quarts i mig de dues");
    expect(get_time_campanar(1,39)).toBe("Dos quarts i nou (minuts) de dues");
    expect(get_time_campanar(1,40)).toBe("Dos quarts i deu (minuts) de dues");
    expect(get_time_campanar(1,41)).toBe("Dos quarts i onze (minuts) de dues");
    expect(get_time_campanar(1,42)).toBe("Dos quarts i dotze (minuts) de dues");
    expect(get_time_campanar(1,43)).toBe("Dos quarts i tretze (minuts) de dues");
    expect(get_time_campanar(1,44)).toBe("Dos quarts i catorze (minuts) de dues");
    expect(get_time_campanar(1,45)).toBe( "Tres quarts de dues");

    expect(get_time_campanar(1,46)).toBe("Tres quarts i un (minut) de dues");
    expect(get_time_campanar(1,47)).toBe("Tres quarts i dos (minuts) de dues");
    expect(get_time_campanar(1,48)).toBe("Tres quarts i tres (minuts) de dues");
    expect(get_time_campanar(1,49)).toBe("Tres quarts i quatre (minuts) de dues");
    expect(get_time_campanar(1,50)).toBe("Tres quarts i cinc (minuts) de dues");
    expect(get_time_campanar(1,51)).toBe("Tres quarts i sis (minuts) de dues");
    expect(get_time_campanar(1,52)).toBe("Tres quarts i mig de dues");
    expect(get_time_campanar(1,53)).toBe("Tres quarts i mig de dues");
    expect(get_time_campanar(1,54)).toBe("Tres quarts i nou (minuts) de dues");
    expect(get_time_campanar(1,55)).toBe("Tres quarts i deu (minuts) de dues");
    expect(get_time_campanar(1,56)).toBe("Tres quarts i onze (minuts) de dues");
    expect(get_time_campanar(1,57)).toBe("Tres quarts i dotze (minuts) de dues");
    expect(get_time_campanar(1,58)).toBe("Tres quarts i tretze (minuts) de dues");
    expect(get_time_campanar(1,59)).toBe("Tres quarts i catorze (minuts) de dues");

});
