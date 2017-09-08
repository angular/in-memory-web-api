// Confirm that the jasmine ajax testing library works in this project stand-alone.
// These tests are copied from the documentation
// https://jasmine.github.io/edge/ajax.html
// See karma.conf and package.json changes related to using this jasmine plugin
// https://www.npmjs.com/package/karma-jasmine-ajax

describe('Jasmine ajax mocking proof-of-life', () => {

  describe('suite wide usage', () => {

    beforeEach(function() {
      jasmine.Ajax.install();
    });

    afterEach(function() {
      jasmine.Ajax.uninstall();
    });

    it('specifying response when you need it', () => {
      const doneFn = jasmine.createSpy('success');

      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(args) {
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

    it('allows responses to be setup ahead of time', () => {
      const doneFn = jasmine.createSpy('success');

      jasmine.Ajax.stubRequest('/another/url').andReturn({
        'responseText': 'immediate response'
      });
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(args) {
        if (this.readyState === this.DONE) {
          doneFn(this.responseText);
        }
      };

      xhr.open('GET', '/another/url');
      xhr.send();

      expect(doneFn).toHaveBeenCalledWith('immediate response');
    });

  });

  it('allows use in a single spec', () => {
    const doneFn = jasmine.createSpy('success');
    jasmine.Ajax.withMock(function() {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(args) {
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

  it('allows use in a single spec (json response)', () => {
    const doneFn = jasmine.createSpy('success');
    jasmine.Ajax.withMock(function() {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(args) {
        if (this.readyState === this.DONE) {
          doneFn(this.response);
        }
      };

      xhr.open('GET', '/some/cool/url');
      xhr.send();

      expect(doneFn).not.toHaveBeenCalled();

      const data = { data: [{ id: 42, name: 'Dude' }] };
      const expectedResponse =  JSON.stringify(data);

      jasmine.Ajax.requests.mostRecent().respondWith({
        'status': 200,
        'contentType': 'application/json',
        'response': expectedResponse
      });

      expect(doneFn).toHaveBeenCalledWith(expectedResponse);
    });
  });

});
