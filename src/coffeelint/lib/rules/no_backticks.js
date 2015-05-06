// Generated by CoffeeScript 1.7.1
(function() {
  var NoBackticks;

  module.exports = NoBackticks = (function() {
    function NoBackticks() {}

    NoBackticks.prototype.rule = {
      name: 'no_backticks',
      level: 'error',
      message: 'Backticks are forbidden',
      description: "Backticks allow snippets of JavaScript to be embedded in\nCoffeeScript. While some folks consider backticks useful in a few\nniche circumstances, they should be avoided because so none of\nJavaScript's \"bad parts\", like <tt>with</tt> and <tt>eval</tt>,\nsneak into CoffeeScript.\nThis rule is enabled by default."
    };

    NoBackticks.prototype.tokens = ["JS"];

    NoBackticks.prototype.lintToken = function(token, tokenApi) {
      return true;
    };

    return NoBackticks;

  })();

}).call(this);
