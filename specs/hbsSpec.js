define(function() {
    describe('Handlebars Plugin', function() {
       it('Should load a remote template and compile it to a function.', function() {
           var tmplFunc;

           runs(function() {
              require(['hbs!templates/hello_world_hbs.html'], function(tmpl) {
                  tmplFunc = tmpl;
              });
           });

           waitsFor(function() {
               return !!tmplFunc;
           }, 500);

           runs(function() {
              expect(typeof tmplFunc).toEqual('function');
              expect(tmplFunc({message: 'Hello World!'})).toEqual('Hello World!');
           });
       });

       it('Should not recompile the template function with multiple require calls.', function() {
           var func1, func2;

           runs(function() {
              require(['hbs!templates/hello_world_hbs.html'], function(tmpl) {
                  func1 = tmpl;
              });

              require(['hbs!templates/hello_world_hbs.html'], function(tmpl) {
                  func2 = tmpl;
              });
           });

           waitsFor(function() {
               return !!func1 && !!func2;
           }, 500);

           runs(function() {
                expect(func1).toEqual(func2);
                expect(func1({message: 'Hello World!'})).toEqual('Hello World!');
                expect(func2({message: 'Hello World!'})).toEqual('Hello World!');
           });
       });
    });
});