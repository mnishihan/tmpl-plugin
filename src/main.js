require.config({
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        underscore: 'ext/underscore'
    },
    priority: ['jquery']
});

require(['jquery','tmpl!templates/hello_world_tmpl.html'], function($, tmpl) {
    $('body').append('<h1>' + tmpl({message: 'It Works!'}) + '</h1>');
});
