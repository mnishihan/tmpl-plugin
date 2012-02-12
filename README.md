# Require.js Template Plugin

A plugin for loading remote Underscore.js templates via Require.js.

## Example

    require(['tmpl!path/to/my/template.html'], function(tmpl) {
        var renderedContent = tmpl({arg1: 'something', arg2: 3});

        // Do something with your rendered content, like appending it to the DOM.
    });

## How to Use

Download *tmpl.js* and put it in the same directory as require.js.

When using the optimizer the templates will be inlined in the
optimized javascript.

Underscore.js is required as 'underscore', see the main.js in the project
for setting up a path in the requirejs.config if underscore.js is in a different
location.

## TODOs

* Provide a way to use other template engines, such as Mustache or Handlebars.
