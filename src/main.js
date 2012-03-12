require.config({
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        underscore: 'ext/underscore',
        handlebars: 'ext/handlebars-1.0.0.beta.6'
    },
    priority: ['jquery']
});

require(['jquery','tmpl!templates/hello_world_tmpl.html'], function($, tmpl) {
    $('body').append('<h1>' + tmpl({message: 'It Works!'}) + '</h1>');
});

require(['jquery','hbs!templates/hello_world_hbs.html'], function($, tmpl) {
    $('body').append('<h2>' + tmpl({message: 'With handlebars!'}) + '</h2>');
});