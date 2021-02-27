var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChessTable = function (_React$Component) {
  _inherits(ChessTable, _React$Component);

  function ChessTable(props) {
    _classCallCheck(this, ChessTable);

    var _this = _possibleConstructorReturn(this, (ChessTable.__proto__ || Object.getPrototypeOf(ChessTable)).call(this, props));

    _this.height = window.innerHeight;
    _this.width = window.innerWidth;
    return _this;
  }

  _createClass(ChessTable, [{
    key: 'render',
    value: function render() {
      var size = Math.min(this.width - 30, this.height - 30);

      var tileSize = Math.trunc(size / 14);
      return React.createElement(
        'div',
        { id: 'chess-table', style: {
            width: size + 'px',
            height: size + 'px'
          } },
        React.createElement(Column, { key: 0, index: 0, letter: 'a', size: tileSize }),
        React.createElement(Column, { key: 1, index: 1, letter: 'b', size: tileSize }),
        React.createElement(Column, { key: 2, index: 2, letter: 'c', size: tileSize }),
        React.createElement(Column, { key: 3, index: 3, letter: 'd', size: tileSize }),
        React.createElement(Column, { key: 4, index: 4, letter: 'e', size: tileSize }),
        React.createElement(Column, { key: 5, index: 5, letter: 'f', size: tileSize }),
        React.createElement(Column, { key: 6, index: 6, letter: 'g', size: tileSize }),
        React.createElement(Column, { key: 7, index: 7, letter: 'h', size: tileSize }),
        React.createElement(Column, { key: 8, index: 8, letter: 'i', size: tileSize }),
        React.createElement(Column, { key: 9, index: 9, letter: 'j', size: tileSize }),
        React.createElement(Column, { key: 10, index: 10, letter: 'k', size: tileSize }),
        React.createElement(Column, { key: 11, index: 11, letter: 'l', size: tileSize }),
        React.createElement(Column, { key: 12, index: 12, letter: 'm', size: tileSize }),
        React.createElement(Column, { key: 13, index: 13, letter: 'n', size: tileSize })
      );
    }
  }]);

  return ChessTable;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(ChessTable, null);
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector('#rot');
ReactDOM.render(React.createElement(App, null), domContainer);