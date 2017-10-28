'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Like = function (_wepy$page) {
  _inherits(Like, _wepy$page);

  function Like() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Like);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Like.__proto__ || Object.getPrototypeOf(Like)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '喜欢的文章'
    }, _this.data = {
      icon: '../image/article.png',
      pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508994773906&di=00b92ac2b264a4e6d0443e9083a2e1c1&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F00e93901213fb80e8da22b173fd12f2eb83894fb.jpg'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Like;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Like , 'pages/like'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpa2UuanMiXSwibmFtZXMiOlsiTGlrZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaWNvbiIsInBpYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxzQkFERDtBQUVMQyxXQUFLO0FBRkEsSzs7OztFQUp5QixlQUFLQyxJOztrQkFBbEJOLEkiLCJmaWxlIjoibGlrZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpa2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WWnOasoueahOaWh+eroCdcbiAgfVxuICBkYXRhID0ge1xuICAgIGljb246ICcuLi9pbWFnZS9hcnRpY2xlLnBuZycsXG4gICAgcGljOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA4OTk0NzczOTA2JmRpPTAwYjkyYWMyYjI2NGE0ZTZkMDQ0M2U5MDgzYTJlMWMxJmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRmcuaGlwaG90b3MuYmFpZHUuY29tJTJGaW1hZ2UlMkZwaWMlMkZpdGVtJTJGMDBlOTM5MDEyMTNmYjgwZThkYTIyYjE3M2ZkMTJmMmViODM4OTRmYi5qcGcnXG4gIH1cbn1cbiJdfQ==