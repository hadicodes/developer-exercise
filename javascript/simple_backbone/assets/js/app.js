// MODELS
var Quote = Backbone.Model.extend({
  defaults : {
      source : "",
      context : "",
      quote : "",
      theme: ""
    }
});

// COLLECTION

var QuoteCollection = Backbone.Collection.extend({
  model: Quote,
  url: './quotes.json'
});

// VIEWS
var QuoteView = Backbone.View.extend ({
  el: '#content',
  render: function () {
    var that = this;
    var quotes = new QuoteCollection();
    quotes.fetch({
      success: function (quotes) {
        var template = _.template($('#quote-template').html());
        that.$el.html(template({quotes: quotes.models}));
      },
      error: function() {
          console.log('Failed to fetch!');
      }
    })
  }
});  


var QuoteView = new QuoteView ();

// ROUTES   

var Router = Backbone.Router.extend({
  routes: {
    '': 'home'
  }
});

var router = new Router();
router.on('route:home', function () {
  QuoteView.render();
});

Backbone.history.start();

