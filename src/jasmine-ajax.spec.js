// Confirm that the jasmine ajax testing library works in this project stand-alone.
// These tests are copied from the documentation
// https://jasmine.github.io/edge/ajax.html
// See karma.conf and package.json changes related to using this jasmine plugin
// https://www.npmjs.com/package/karma-jasmine-ajax
describe('Jasmine ajax mocking proof-of-life', function () {
    describe('suite wide usage', function () {
        beforeEach(function () {
            jasmine.Ajax.install();
        });
        afterEach(function () {
            jasmine.Ajax.uninstall();
        });
        it('specifying response when you need it', function () {
            var doneFn = jasmine.createSpy('success');
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (args) {
                if (this.readyState === this.DONE) {
                    doneFn(this.responseText);
                }
            };
            xhr.open('GET', '/some/cool/url');
            xhr.send();
            expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
            expect(doneFn).not.toHaveBeenCalled();
            jasmine.Ajax.requests.mostRecent().respondWith({
                'status': 200,
                'contentType': 'text/plain',
                'responseText': 'awesome response'
            });
            expect(doneFn).toHaveBeenCalledWith('awesome response');
        });
        it('allows responses to be setup ahead of time', function () {
            var doneFn = jasmine.createSpy('success');
            jasmine.Ajax.stubRequest('/another/url').andReturn({
                'responseText': 'immediate response'
            });
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (args) {
                if (this.readyState === this.DONE) {
                    doneFn(this.responseText);
                }
            };
            xhr.open('GET', '/another/url');
            xhr.send();
            expect(doneFn).toHaveBeenCalledWith('immediate response');
        });
    });
    it('allows use in a single spec', function () {
        var doneFn = jasmine.createSpy('success');
        jasmine.Ajax.withMock(function () {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (args) {
                if (this.readyState === this.DONE) {
                    doneFn(this.responseText);
                }
            };
            xhr.open('GET', '/some/cool/url');
            xhr.send();
            expect(doneFn).not.toHaveBeenCalled();
            jasmine.Ajax.requests.mostRecent().respondWith({
                'status': 200,
                'responseText': 'in spec response'
            });
            expect(doneFn).toHaveBeenCalledWith('in spec response');
        });
    });
    it('allows use in a single spec (json response)', function () {
        var doneFn = jasmine.createSpy('success');
        jasmine.Ajax.withMock(function () {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function (args) {
                if (this.readyState === this.DONE) {
                    doneFn(this.response);
                }
            };
            xhr.open('GET', '/some/cool/url');
            xhr.send();
            expect(doneFn).not.toHaveBeenCalled();
            var data = { data: [{ id: 42, name: 'Dude' }] };
            var expectedResponse = JSON.stringify(data);
            jasmine.Ajax.requests.mostRecent().respondWith({
                'status': 200,
                'contentType': 'application/json',
                'response': expectedResponse
            });
            expect(doneFn).toHaveBeenCalledWith(expectedResponse);
        });
    });
});
//# sourceMappingURL=jasmine-ajax.spec.js.map