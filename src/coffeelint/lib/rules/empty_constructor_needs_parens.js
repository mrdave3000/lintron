// Generated by CoffeeScript 1.7.1
(function() {
  var EmptyConstructorNeedsParens;

  module.exports = EmptyConstructorNeedsParens = (function() {
    function EmptyConstructorNeedsParens() {}

    EmptyConstructorNeedsParens.prototype.rule = {
      name: 'empty_constructor_needs_parens',
      level: 'ignore',
      message: 'Invoking a constructor without parens and without arguments',
      description: "Requires constructors with no parameters to include the parens"
    };

    EmptyConstructorNeedsParens.prototype.tokens = ['UNARY'];

    EmptyConstructorNeedsParens.prototype.lintToken = function(token, tokenApi) {
      var expectedCallStart, expectedIdentifier, identifierIndex;
      if (token[1] === 'new') {
        identifierIndex = 1;
        while (true) {
          expectedIdentifier = tokenApi.peek(identifierIndex);
          expectedCallStart = tokenApi.peek(identifierIndex + 1);
          if ((expectedIdentifier != null ? expectedIdentifier[0] : void 0) === 'IDENTIFIER') {
            if ((expectedCallStart != null ? expectedCallStart[0] : void 0) === '.') {
              identifierIndex += 2;
              continue;
            }
          }
          break;
        }
        if ((expectedIdentifier != null ? expectedIdentifier[0] : void 0) === 'IDENTIFIER' && (expectedCallStart != null)) {
          return this.handleExpectedCallStart(expectedCallStart);
        }
      }
    };

    EmptyConstructorNeedsParens.prototype.handleExpectedCallStart = function(expectedCallStart) {
      if (expectedCallStart[0] !== 'CALL_START') {
        return true;
      }
    };

    return EmptyConstructorNeedsParens;

  })();

}).call(this);
