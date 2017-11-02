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

var Secret = function (_wepy$page) {
  _inherits(Secret, _wepy$page);

  function Secret() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Secret);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Secret.__proto__ || Object.getPrototypeOf(Secret)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '私密文章'
    }, _this.data = {
      text: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Secret, [{
    key: 'onShow',
    value: function onShow() {
      var self = this;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/secret',
        method: 'POST',
        data: {
          title: self.title
        },
        success: function success(res) {
          console.log(res.data);
          self.text = res.data;
          self.setData({
            text: res.data
          });
        }
      });
    }
  }]);

  return Secret;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Secret , 'pages/secret'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3JldC5qcyJdLCJuYW1lcyI6WyJTZWNyZXQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRleHQiLCJzZWxmIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInRpdGxlIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU07QUFERCxLOzs7Ozs2QkFHRTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxPQUFMLENBQWE7QUFDWEMsYUFBSyw4QkFETTtBQUVYQyxnQkFBUSxNQUZHO0FBR1hMLGNBQU07QUFDSk0saUJBQU9KLEtBQUtJO0FBRFIsU0FISztBQU1YQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCQyxrQkFBUUMsR0FBUixDQUFZRixJQUFJUixJQUFoQjtBQUNBRSxlQUFLRCxJQUFMLEdBQVlPLElBQUlSLElBQWhCO0FBQ0FFLGVBQUtTLE9BQUwsQ0FBYTtBQUNYVixrQkFBTU8sSUFBSVI7QUFEQyxXQUFiO0FBR0Q7QUFaVSxPQUFiO0FBY0Q7Ozs7RUF2QmlDLGVBQUtZLEk7O2tCQUFwQmYsTSIsImZpbGUiOiJzZWNyZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWNyZXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+engeWvhuaWh+eroCdcbiAgfVxuICBkYXRhID0ge1xuICAgIHRleHQ6ICcnXG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvc2VjcmV0JyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogc2VsZi50aXRsZVxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICB0ZXh0OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==