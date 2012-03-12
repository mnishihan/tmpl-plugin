define(['jquery', 'underscore'], function ($, _) {
    var ajaxGet = function(url, callback) {
        $.ajax({
            url: url,
            dataType: 'text',
            success: function(text) {
                var tmplFunc = _.template(text);

                callback(tmplFunc);
            }
        });
    };

    var nodeGet = function(url, callback) {
        var fs = require.nodeRequire('fs');

        callback(fs.readFileSync(url, 'utf8'));
    };

    var get;

    if (typeof window !== "undefined") {
        get = ajaxGet;
    } else {
        get = nodeGet;
    }

    return {
        version: '0.0.1',

        load: function (name, req, onLoad, config) {
           get(name, onLoad);
        },

        write: function (pluginName, moduleName, out) {
            get(moduleName, function(content) {
                out("define('" + pluginName + "!" + moduleName  +
                    "', ['underscore'], function(_) { return _.template('" + content + "');});\n");
            });
        }
    };
});
