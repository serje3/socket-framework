var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tile = function (_React$Component) {
    _inherits(Tile, _React$Component);

    function Tile(props) {
        _classCallCheck(this, Tile);

        return _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).call(this, props));
    }

    _createClass(Tile, [{
        key: 'render',
        value: function render() {
            return React.createElement('div', { key: this.props.index, id: this.props.index, className: 'tile', style: this.props.style });
        }
    }]);

    return Tile;
}(React.Component);

var Column = function (_React$Component2) {
    _inherits(Column, _React$Component2);

    function Column(props) {
        _classCallCheck(this, Column);

        var _this2 = _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).call(this, props));

        _this2.height = _this2.props.size;
        _this2.width = _this2.props.size;
        return _this2;
    }

    _createClass(Column, [{
        key: 'style',
        value: function style(color) {
            var _color = color ? '#adadad' : '#dadada';
            return {
                backgroundColor: _color,
                height: this.height,
                width: this.width
            };
        }
    }, {
        key: 'get_tiles',
        value: function get_tiles() {
            this.height = this.props.size;
            this.width = this.props.size;
            if (this.props.index % 2 === 0) {
                return React.createElement(
                    'div',
                    { key: this.props.index,
                        id: this.props.index,
                        className: 'col',
                        style: {
                            height: this.height * 14,
                            width: this.width
                        } },
                    React.createElement(Tile, { key: 0, index: 0, style: this.style(0) }),
                    React.createElement(Tile, { key: 1, index: 1, style: this.style(1) }),
                    React.createElement(Tile, { key: 2, index: 2, style: this.style(0) }),
                    React.createElement(Tile, { key: 3, index: 3, style: this.style(1) }),
                    React.createElement(Tile, { key: 4, index: 4, style: this.style(0) }),
                    React.createElement(Tile, { key: 5, index: 5, style: this.style(1) }),
                    React.createElement(Tile, { key: 6, index: 6, style: this.style(0) }),
                    React.createElement(Tile, { key: 7, index: 7, style: this.style(1) }),
                    React.createElement(Tile, { key: 8, index: 8, style: this.style(0) }),
                    React.createElement(Tile, { key: 9, index: 9, style: this.style(1) }),
                    React.createElement(Tile, { key: 10, index: 10, style: this.style(0) }),
                    React.createElement(Tile, { key: 11, index: 11, style: this.style(1) }),
                    React.createElement(Tile, { key: 12, index: 12, style: this.style(0) }),
                    React.createElement(Tile, { key: 13, index: 13, style: this.style(1) })
                );
            } else {
                return React.createElement(
                    'div',
                    { key: this.props.index,
                        id: this.props.index,
                        className: 'col',
                        style: {
                            height: this.height * 14,
                            width: this.width
                        } },
                    React.createElement(Tile, { key: 0, index: 0, style: this.style(1) }),
                    React.createElement(Tile, { key: 1, index: 1, style: this.style(0) }),
                    React.createElement(Tile, { key: 2, index: 2, style: this.style(1) }),
                    React.createElement(Tile, { key: 3, index: 3, style: this.style(0) }),
                    React.createElement(Tile, { key: 4, index: 4, style: this.style(1) }),
                    React.createElement(Tile, { key: 5, index: 5, style: this.style(0) }),
                    React.createElement(Tile, { key: 6, index: 6, style: this.style(1) }),
                    React.createElement(Tile, { key: 7, index: 7, style: this.style(0) }),
                    React.createElement(Tile, { key: 8, index: 8, style: this.style(1) }),
                    React.createElement(Tile, { key: 9, index: 9, style: this.style(0) }),
                    React.createElement(Tile, { key: 10, index: 10, style: this.style(1) }),
                    React.createElement(Tile, { key: 11, index: 11, style: this.style(0) }),
                    React.createElement(Tile, { key: 12, index: 12, style: this.style(1) }),
                    React.createElement(Tile, { key: 13, index: 13, style: this.style(0) })
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return this.get_tiles();
        }
    }]);

    return Column;
}(React.Component);