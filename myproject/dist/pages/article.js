'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Article = function (_wepy$page) {
  _inherits(Article, _wepy$page);

  function Article() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Article);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Article.__proto__ || Object.getPrototypeOf(Article)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      title: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Article, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.title = data.title;
      console.log(self.title);
    }
  }]);

  return Article;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Article , 'pages/article'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuanMiXSwibmFtZXMiOlsiQXJ0aWNsZSIsImNvbmZpZyIsImRhdGEiLCJ0aXRsZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsYUFBTztBQURGLEs7Ozs7OzJCQUdBRCxJLEVBQU07QUFDWCxVQUFJRSxPQUFPLElBQVg7QUFDQUEsV0FBS0QsS0FBTCxHQUFhRCxLQUFLQyxLQUFsQjtBQUNBRSxjQUFRQyxHQUFSLENBQVlGLEtBQUtELEtBQWpCO0FBQ0Q7Ozs7RUFWa0MsZUFBS0ksSTs7a0JBQXJCUCxPIiwiZmlsZSI6ImFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRpY2xlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICB9XG4gIGRhdGEgPSB7XG4gICAgdGl0bGU6ICcnXG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnRpdGxlID0gZGF0YS50aXRsZVxuICAgIGNvbnNvbGUubG9nKHNlbGYudGl0bGUpXG4gIH1cbn1cbiJdfQ==