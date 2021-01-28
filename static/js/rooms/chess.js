var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChessTable = function (_React$Component) {
  _inherits(ChessTable, _React$Component);

  function ChessTable(props) {
    _classCallCheck(this, ChessTable);

    var _this = _possibleConstructorReturn(this, (ChessTable.__proto__ || Object.getPrototypeOf(ChessTable)).call(this, props));

    _this.updateDimensions = function () {
      _this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    _this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    return _this;
  }

  _createClass(ChessTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }
  }, {
    key: 'render',
    value: function render() {
      var size = Math.min(this.state.width - 30, this.state.height - 30);

      var tileSize = Math.trunc(size / 14);
      return React.createElement(
        'div',
        { id: 'chess-table', style: {
            width: size + 'px',
            height: size + 'px'
          } },
        React.createElement(Column, { key: 0, index: 0, size: tileSize }),
        React.createElement(Column, { key: 1, index: 1, size: tileSize }),
        React.createElement(Column, { key: 2, index: 2, size: tileSize }),
        React.createElement(Column, { key: 3, index: 3, size: tileSize }),
        React.createElement(Column, { key: 4, index: 4, size: tileSize }),
        React.createElement(Column, { key: 5, index: 5, size: tileSize }),
        React.createElement(Column, { key: 6, index: 6, size: tileSize }),
        React.createElement(Column, { key: 7, index: 7, size: tileSize }),
        React.createElement(Column, { key: 8, index: 8, size: tileSize }),
        React.createElement(Column, { key: 9, index: 9, size: tileSize }),
        React.createElement(Column, { key: 10, index: 10, size: tileSize }),
        React.createElement(Column, { key: 11, index: 11, size: tileSize }),
        React.createElement(Column, { key: 12, index: 12, size: tileSize }),
        React.createElement(Column, { key: 13, index: 13, size: tileSize })
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