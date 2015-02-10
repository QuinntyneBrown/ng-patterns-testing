/* jshint -W117, -W030 */
describe('layout shell controller', function() {

    var controller;

    beforeEach(function() {
        bard.appModule('app.layout');
        bard.inject(this, '$controller', '$log', '$timeout');
    });

    beforeEach(function () {
        controller = $controller('Shell');
    });

    it('should have logged success on activation', function() {
        // passes if ANY of the logs matches
        expect($log.info.logs).to.match(/success/i);
    });

    it('should should hide splash after delay', function() {
        var vm = controller;
        expect(vm.showSplash).to.equal(true, 'showSplash before delay');
        $timeout.flush();
        expect(vm.showSplash).to.equal(false, 'showSplash after delay');
    });
});