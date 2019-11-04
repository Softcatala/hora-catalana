const get_time_campanar = require('./hora.js').get_time_campanar;
const get_time_campanar_tradicional = require('./hora.js').get_time_campanar_tradicional;
const get_time_rellotge = require('./hora.js').get_time_rellotge;
const get_text_hora = require('./hora.js').get_text_hora;

test('get_time_rellotge tests', () => {
    expect(get_time_rellotge(23,0)).toBe("Les onze en punt");
    expect(get_time_rellotge(23,1)).toBe("Les onze i un (minut)");
    expect(get_time_rellotge(23,2)).toBe("Les onze i dos (minuts)");
    expect(get_time_rellotge(23,3)).toBe("Les onze i tres (minuts)");
    expect(get_time_rellotge(23,4)).toBe("Les onze i quatre (minuts)");
    expect(get_time_rellotge(23,5)).toBe("Les onze i cinc (minuts)");
    expect(get_time_rellotge(23,6)).toBe("Les onze i sis (minuts)");
    expect(get_time_rellotge(23,7)).toBe("Les onze i set (minuts)");
    expect(get_time_rellotge(23,8)).toBe("Les onze i vuit (minuts)");
    expect(get_time_rellotge(23,9)).toBe("Les onze i nou (minuts)");
    expect(get_time_rellotge(23,10)).toBe("Les onze i deu (minuts)");
    expect(get_time_rellotge(23,11)).toBe("Les onze i onze (minuts)");
    expect(get_time_rellotge(23,12)).toBe("Les onze i dotze (minuts)");
    expect(get_time_rellotge(23,13)).toBe("Les onze i tretze (minuts)");
    expect(get_time_rellotge(23,14)).toBe("Les onze i catorze (minuts)");
    expect(get_time_rellotge(23,15)).toBe("Les onze i quart");

    expect(get_time_rellotge(23,16)).toBe("Les onze i setze (minuts)");
    expect(get_time_rellotge(23,17)).toBe("Les onze i disset (minuts)");
    expect(get_time_rellotge(23,18)).toBe("Les onze i divuit (minuts)");
    expect(get_time_rellotge(23,19)).toBe("Les onze i dinou (minuts)");
    expect(get_time_rellotge(23,20)).toBe("Les onze i vint (minuts)");
    expect(get_time_rellotge(23,21)).toBe("Les onze i vint-i-un (minuts)");
    expect(get_time_rellotge(23,22)).toBe("Les onze i vint-i-dos (minuts)");
    expect(get_time_rellotge(23,23)).toBe("Les onze i vint-i-tres (minuts)");
    expect(get_time_rellotge(23,24)).toBe("Les onze i vint-i-quatre (minuts)");
    expect(get_time_rellotge(23,25)).toBe("Les onze i vint-i-cinc (minuts)");
    expect(get_time_rellotge(23,26)).toBe("Les onze i vint-i-sis (minuts)");
    expect(get_time_rellotge(23,27)).toBe("Les onze i vint-i-set (minuts)");
    expect(get_time_rellotge(23,28)).toBe("Les onze i vint-i-vuit (minuts)");
    expect(get_time_rellotge(23,29)).toBe("Les onze i vint-i-nou (minuts)");
    expect(get_time_rellotge(23,30)).toBe("Les onze i mitja");

    expect(get_time_rellotge(23,31)).toBe("Les dotze menys vint-i-nou (minuts)");
    expect(get_time_rellotge(23,32)).toBe("Les dotze menys vint-i-vuit (minuts)");
    expect(get_time_rellotge(23,33)).toBe("Les dotze menys vint-i-set (minuts)");
    expect(get_time_rellotge(23,34)).toBe("Les dotze menys vint-i-sis (minuts)");
    expect(get_time_rellotge(23,35)).toBe("Les dotze menys vint-i-cinc (minuts)");
    expect(get_time_rellotge(23,36)).toBe("Les dotze menys vint-i-quatre (minuts)");
    expect(get_time_rellotge(23,37)).toBe("Les dotze menys vint-i-tres (minuts)");
    expect(get_time_rellotge(23,38)).toBe("Les dotze menys vint-i-dos (minuts)");
    expect(get_time_rellotge(23,39)).toBe("Les dotze menys vint-i-un (minuts)");
    expect(get_time_rellotge(23,40)).toBe("Les dotze menys vint (minuts)");
    expect(get_time_rellotge(23,41)).toBe("Les dotze menys dinou (minuts)");
    expect(get_time_rellotge(23,42)).toBe("Les dotze menys divuit (minuts)");
    expect(get_time_rellotge(23,43)).toBe("Les dotze menys disset (minuts)");
    expect(get_time_rellotge(23,44)).toBe("Les dotze menys setze (minuts)");
    expect(get_time_rellotge(23,45)).toBe("Les dotze menys quart");

    expect(get_time_rellotge(23,46)).toBe("Les dotze menys catorze (minuts)");
    expect(get_time_rellotge(23,47)).toBe("Les dotze menys tretze (minuts)");
    expect(get_time_rellotge(23,48)).toBe("Les dotze menys dotze (minuts)");
    expect(get_time_rellotge(23,49)).toBe("Les dotze menys onze (minuts)");
    expect(get_time_rellotge(23,50)).toBe("Les dotze menys deu (minuts)");
    expect(get_time_rellotge(23,51)).toBe("Les dotze menys nou (minuts)");
    expect(get_time_rellotge(23,52)).toBe("Les dotze menys vuit (minuts)");
    expect(get_time_rellotge(23,53)).toBe("Les dotze menys set (minuts)");
    expect(get_time_rellotge(23,54)).toBe("Les dotze menys sis (minuts)");
    expect(get_time_rellotge(23,55)).toBe("Les dotze menys cinc (minuts)");
    expect(get_time_rellotge(23,56)).toBe("Les dotze menys quatre (minuts)");
    expect(get_time_rellotge(23,57)).toBe("Les dotze menys tres (minuts)");
    expect(get_time_rellotge(23,58)).toBe("Les dotze menys dos (minuts)");
    expect(get_time_rellotge(23,59)).toBe("Les dotze menys un (minut)");

});

test('get_time_campanar_tradicional tests', () => {
    expect(get_time_campanar_tradicional(2,0)).toBe("Les dues en punt");
    expect(get_time_campanar_tradicional(2,1)).toBe("Les dues en punt");
    expect(get_time_campanar_tradicional(2,2)).toBe("Les dues tocades");
    expect(get_time_campanar_tradicional(2,3)).toBe("Les dues tocades");
    expect(get_time_campanar_tradicional(2,4)).toBe("Les dues tocades");
    expect(get_time_campanar_tradicional(2,5)).toBe("Les dues ben tocades");
    expect(get_time_campanar_tradicional(2,6)).toBe("Les dues ben tocades");
    expect(get_time_campanar_tradicional(2,7)).toBe("Mig quart de tres");
    expect(get_time_campanar_tradicional(2,8)).toBe("Mig quart de tres");
    expect(get_time_campanar_tradicional(2,9)).toBe("Mig quart passat de tres");
    expect(get_time_campanar_tradicional(2,10)).toBe("Mig quart passat de tres");
    expect(get_time_campanar_tradicional(2,11)).toBe("Mig quart passat de tres");
    expect(get_time_campanar_tradicional(2,12)).toBe("Mig quart ben passat de tres");
    expect(get_time_campanar_tradicional(2,13)).toBe("Mig quart ben passat de tres");
    expect(get_time_campanar_tradicional(2,14)).toBe("Un quart de tres");
    expect(get_time_campanar_tradicional(2,15)).toBe("Un quart de tres");

    expect(get_time_campanar_tradicional(2,16)).toBe("Un quart de tres");
    expect(get_time_campanar_tradicional(2,17)).toBe("Un quart tocat de tres");
    expect(get_time_campanar_tradicional(2,18)).toBe("Un quart tocat de tres");
    expect(get_time_campanar_tradicional(2,19)).toBe("Un quart tocat de tres");
    expect(get_time_campanar_tradicional(2,20)).toBe("Un quart ben tocat de tres");
    expect(get_time_campanar_tradicional(2,21)).toBe("Un quart ben tocat de tres");
    expect(get_time_campanar_tradicional(2,22)).toBe("Un quart i mig de tres");
    expect(get_time_campanar_tradicional(2,23)).toBe("Un quart i mig de tres");
    expect(get_time_campanar_tradicional(2,24)).toBe("Un quart i mig passat de tres");
    expect(get_time_campanar_tradicional(2,25)).toBe("Un quart i mig passat de tres");
    expect(get_time_campanar_tradicional(2,26)).toBe("Un quart i mig passat de tres");
    expect(get_time_campanar_tradicional(2,27)).toBe("Un quart i mig ben passat de tres");
    expect(get_time_campanar_tradicional(2,28)).toBe("Un quart i mig ben passat de tres");
    expect(get_time_campanar_tradicional(2,29)).toBe("Dos quarts de tres");
    expect(get_time_campanar_tradicional(2,30)).toBe("Dos quarts de tres");

    expect(get_time_campanar_tradicional(2,31)).toBe("Dos quarts de tres");
    expect(get_time_campanar_tradicional(2,32)).toBe("Dos quarts tocats de tres");
    expect(get_time_campanar_tradicional(2,33)).toBe("Dos quarts tocats de tres");
    expect(get_time_campanar_tradicional(2,34)).toBe("Dos quarts tocats de tres");
    expect(get_time_campanar_tradicional(2,35)).toBe("Dos quarts ben tocats de tres");
    expect(get_time_campanar_tradicional(2,36)).toBe("Dos quarts ben tocats de tres");
    expect(get_time_campanar_tradicional(2,37)).toBe("Dos quarts i mig de tres");
    expect(get_time_campanar_tradicional(2,38)).toBe("Dos quarts i mig de tres");
    expect(get_time_campanar_tradicional(2,39)).toBe("Dos quarts i mig passats de tres");
    expect(get_time_campanar_tradicional(2,40)).toBe("Dos quarts i mig passats de tres");
    expect(get_time_campanar_tradicional(2,41)).toBe("Dos quarts i mig passats de tres");
    expect(get_time_campanar_tradicional(2,42)).toBe("Dos quarts i mig ben passats de tres");
    expect(get_time_campanar_tradicional(2,43)).toBe("Dos quarts i mig ben passats de tres");
    expect(get_time_campanar_tradicional(2,44)).toBe("Tres quarts de tres");
    expect(get_time_campanar_tradicional(2,45)).toBe("Tres quarts de tres");

    expect(get_time_campanar_tradicional(2,46)).toBe("Tres quarts de tres");
    expect(get_time_campanar_tradicional(2,47)).toBe("Tres quarts tocats de tres");
    expect(get_time_campanar_tradicional(2,48)).toBe("Tres quarts tocats de tres");
    expect(get_time_campanar_tradicional(2,49)).toBe("Tres quarts tocats de tres");
    expect(get_time_campanar_tradicional(2,50)).toBe("Tres quarts ben tocats de tres");
    expect(get_time_campanar_tradicional(2,51)).toBe("Tres quarts ben tocats de tres");
    expect(get_time_campanar_tradicional(2,52)).toBe("Tres quarts i mig de tres");
    expect(get_time_campanar_tradicional(2,53)).toBe("Tres quarts i mig de tres");
    expect(get_time_campanar_tradicional(2,54)).toBe("Tres quarts i mig passats de tres");
    expect(get_time_campanar_tradicional(2,55)).toBe("Tres quarts i mig passats de tres");
    expect(get_time_campanar_tradicional(2,56)).toBe("Tres quarts i mig passats de tres");
    expect(get_time_campanar_tradicional(2,57)).toBe("Tres quarts i mig ben passats de tres");
    expect(get_time_campanar_tradicional(2,58)).toBe("Tres quarts i mig ben passats de tres");
    expect(get_time_campanar_tradicional(2,59)).toBe("Les tres");

});

test('get_time_campanar tests', () => {
    expect(get_time_campanar(1,1)).toBe("La una i un (minut)");
    expect(get_time_campanar(1,2)).toBe("La una i dos (minuts)");
    expect(get_time_campanar(1,3)).toBe("La una i tres (minuts)");
    expect(get_time_campanar(1,4)).toBe("La una i quatre (minuts)");
    expect(get_time_campanar(1,5)).toBe("La una i cinc (minuts)");
    expect(get_time_campanar(1,6)).toBe("La una i sis (minuts)");
    expect(get_time_campanar(1,7)).toBe("Mig quart de dues");
    expect(get_time_campanar(1,8)).toBe("Mig quart de dues");
    expect(get_time_campanar(1,9)).toBe("La una i nou (minuts)");
    expect(get_time_campanar(1,10)).toBe("La una i deu (minuts)");
    expect(get_time_campanar(1,11)).toBe("La una i onze (minuts)");
    expect(get_time_campanar(1,12)).toBe("La una i dotze (minuts)");
    expect(get_time_campanar(1,13)).toBe("La una i tretze (minuts)");
    expect(get_time_campanar(1,14)).toBe("La una i catorze (minuts)");
    expect(get_time_campanar(1,15)).toBe("Un quart de dues");

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
    expect(get_time_campanar(1,30)).toBe("Dos quarts de dues");

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
    expect(get_time_campanar(1,45)).toBe("Tres quarts de dues");

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


test('get_text_hora tests', () => {
    expect(get_text_hora(1,1,1)).toBe("1:01:01");
    expect(get_text_hora(23,10,12)).toBe("23:10:12");
});
