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

var Discovery = function (_wepy$page) {
  _inherits(Discovery, _wepy$page);

  function Discovery() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Discovery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Discovery.__proto__ || Object.getPrototypeOf(Discovery)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      text: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Discovery, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/mainpage',
        method: 'POST',
        success: function success(res) {
          console.log(res.data, 'aaaaaaaaaaaa');
          self.text = res.data;
          self.setData({
            text: res.data
          });
        }
      });
    }
  }]);

  return Discovery;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Discovery , 'pages/mainPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5QYWdlLmpzIl0sIm5hbWVzIjpbIkRpc2NvdmVyeSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGV4dCIsInNlbGYiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU07QUFERCxLOzs7Ozs2QkFHRTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxPQUFMLENBQWE7QUFDWEMsYUFBSyxnQ0FETTtBQUVYQyxnQkFBUSxNQUZHO0FBR1hDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJDLGtCQUFRQyxHQUFSLENBQVlGLElBQUlQLElBQWhCLEVBQXNCLGNBQXRCO0FBQ0FFLGVBQUtELElBQUwsR0FBWU0sSUFBSVAsSUFBaEI7QUFDQUUsZUFBS1EsT0FBTCxDQUFhO0FBQ1hULGtCQUFNTSxJQUFJUDtBQURDLFdBQWI7QUFHRDtBQVRVLE9BQWI7QUFXRDs7OztFQXBCb0MsZUFBS1csSTs7a0JBQXZCZCxTIiwiZmlsZSI6Im1haW5QYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXJ5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0ZXh0OiAnJ1xuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL21haW5wYWdlJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLCAnYWFhYWFhYWFhYWFhJylcbiAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICB0ZXh0OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==