define(['jquery', 'underscore'], function ($, _) {
    var tmpl;

    return {
        version: '0.0.1',

        load: function (name, req, onLoad, config) {
            $.ajax({
              url: name,
              dataType: 'text',
              success: function(text) {
                  var tmplFunc = _.template(text);

                  onLoad(tmplFunc);
              }
            });
        }
    };
});
