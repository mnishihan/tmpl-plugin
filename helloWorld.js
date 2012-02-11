define(['jquery', 'ext/underscore', 'ext/backbone'], function($, _, Backbone) {
   return Backbone.View.extend({
        render: function() {
            var self = this;

            require(['tmpl!/hello_world_tmpl.html'], function(tmpl) {
                self.$el.html(tmpl({message: 'Hello World!'}));                
            });
            
            return self;
        }
    });
});