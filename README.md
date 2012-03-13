# Require.js Template Plugin

A plugin for loading remote client-side templates via Require.js.

## Example

*Underscore.js Templates*

    require(['tmpl!path/to/my/template.html'], function(tmpl) {
        var renderedContent = tmpl({arg1: 'something', arg2: 3});

        // Do something with your rendered content, like appending it to the DOM.
    });

*Handlebars Templates*

    require(['hbs!path/to/my/template.html'], function(tmpl) {
        var renderedContent = tmpl({arg1: 'something', arg2: 3});

        // Do something with your rendered content, like appending it to the DOM.
    });    

## How to Use

Download *tmpl.js* and/or *hbs.js*, place in the same directory as require.js.

When using the optimizer the templates will be inlined in the
optimized javascript. 

Handlebars templates will be precompiled, and only
the runtime source will be included in the optimized file.

Underscore.js is required as 'underscore' and Handlebars is required as 'handlebars'. 
See the main.js in the project for setting up a path in the require.config these libraries
are in different locations or named differently.
