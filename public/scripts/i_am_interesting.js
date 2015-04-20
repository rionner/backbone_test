var FactView = Backbone.View.extend({
  tagName: "div",
  className: "column",
  template: _.template("<h1><%= fact %></h1>"),
  initialize: function() {
    this.render();
  },
  render: function() {
    // create a template
    var tpl = _.template("<h1>Hello, I am <%= name %>! An interesting fact about me is: <%= fact %>.</h1>");
    // some data object
    var data = {
      name: "James",
      fact: "The Fall",
    };
    var rendered_template = tpl(data);
    $('body').append(rendered_template);


    }
    var renderedTemplate = this.template(data);
    this.$el.html(renderedTemplate);
  }
});



//
var fact = new FactView({
  el: $('body')
});

var FavSong = Backbone.View.extend({
 tagName: 'div',
 className: 'song',
 template: _.template('<h1> My favorite song is <%= song %>'),
 initialize: function(){
   this.render();
 },
 render: function(){
   var data = {song: 'When the Levee Breaks, By Led Zeppelin.'};
   var renderedTemplate = this.template(data);
   this.$el.html(renderedTemplate);
   $('body').append(this.$el)
 }
})

var new_fav = new FavSong();

//

// create a template
var tpl = _.template("<h1>Hello, I am <%= name %>! An interesting fact about me is: <%= fact %>.</h1>");
// some data object
var data = {
  name: "James",
  fact: "The Fall",
};
// replace $('body')'s html with it
console.log("first pass");
var rendered_template = tpl(data);
$('body').append(rendered_template);
