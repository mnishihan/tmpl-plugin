var specs = [
    'helloWorldSpec'
];

requirejs.config({
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
        tmpl: 'tmpl'
    },
    priority: ['jquery']
});

require(['jquery','jasmine/jasmine','jasmine/jasmine-html'].concat(specs), function($) {
    $(function() {        
        jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
        jasmine.getEnv().execute();
    });
});
