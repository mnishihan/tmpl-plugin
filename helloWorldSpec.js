define(['helloWorld'], function(HelloWorld) {
    describe('HelloWorld View', function() {
       it('Should have a <div> tag as a DOM Element.', function() {
           var helloWorld = new HelloWorld();

           expect(helloWorld.el.tagName.toLowerCase()).toEqual('div');
       });
    });
});