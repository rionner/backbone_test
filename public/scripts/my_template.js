// create a template
var tpl = _.template("<h1>Hello, I am <%= name %>! My favorite movie is <%= movie %>. I love visiting <%= city %> because <%= reason %>.</h1>");
// some data object
var data = {
  name: "James",
  movie: "The Fall",
  city: "Barcelona",
  reason: "it is beautiful",
};
// replace $('body')'s html with it
console.log("first pass");
var rendered_template = tpl(data);
$('body').html(rendered_template);

// can also be written as this.. and changed the data
console.log("second pass");
data.food = "Sunflower butter & lignon berry sandwiches";
$('body').html(tpl(data));
