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

var Self = function (_wepy$page) {
  _inherits(Self, _wepy$page);

  function Self() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Self);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Self.__proto__ || Object.getPrototypeOf(Self)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      secret: '../image/secret.png',
      mysubject: '../image/mysubject.png',
      record: '../image/record.png',
      like: '../image/like.png',
      collect: '../image/collect.png',
      dayandnight: '../image/dayandnight.png',
      myarctile: '../image/myarctile.png',
      icon: '',
      nickName: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Self, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      try {
        self.icon = _wepy2.default.getStorageSync('avatarUrl');
        self.nickName = _wepy2.default.getStorageSync('nickName');
      } catch (e) {}
    }
  }]);

  return Self;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Self , 'pages/self'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGYuanMiXSwibmFtZXMiOlsiU2VsZiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2VjcmV0IiwibXlzdWJqZWN0IiwicmVjb3JkIiwibGlrZSIsImNvbGxlY3QiLCJkYXlhbmRuaWdodCIsIm15YXJjdGlsZSIsImljb24iLCJuaWNrTmFtZSIsInNlbGYiLCJnZXRTdG9yYWdlU3luYyIsImUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxxQkFESDtBQUVMQyxpQkFBVyx3QkFGTjtBQUdMQyxjQUFRLHFCQUhIO0FBSUxDLFlBQU0sbUJBSkQ7QUFLTEMsZUFBUyxzQkFMSjtBQU1MQyxtQkFBYSwwQkFOUjtBQU9MQyxpQkFBVyx3QkFQTjtBQVFMQyxZQUFNLEVBUkQ7QUFTTEMsZ0JBQVU7QUFUTCxLOzs7Ozs2QkFXRSxDQUNSOzs7NkJBQ1E7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxVQUFJO0FBQ0ZBLGFBQUtGLElBQUwsR0FBWSxlQUFLRyxjQUFMLENBQW9CLFdBQXBCLENBQVo7QUFDQUQsYUFBS0QsUUFBTCxHQUFnQixlQUFLRSxjQUFMLENBQW9CLFVBQXBCLENBQWhCO0FBQ0QsT0FIRCxDQUdFLE9BQU9DLENBQVAsRUFBVSxDQUNYO0FBQ0Y7Ozs7RUF4QitCLGVBQUtDLEk7O2tCQUFsQmhCLEkiLCJmaWxlIjoic2VsZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGYgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNlY3JldDogJy4uL2ltYWdlL3NlY3JldC5wbmcnLFxuICAgIG15c3ViamVjdDogJy4uL2ltYWdlL215c3ViamVjdC5wbmcnLFxuICAgIHJlY29yZDogJy4uL2ltYWdlL3JlY29yZC5wbmcnLFxuICAgIGxpa2U6ICcuLi9pbWFnZS9saWtlLnBuZycsXG4gICAgY29sbGVjdDogJy4uL2ltYWdlL2NvbGxlY3QucG5nJyxcbiAgICBkYXlhbmRuaWdodDogJy4uL2ltYWdlL2RheWFuZG5pZ2h0LnBuZycsXG4gICAgbXlhcmN0aWxlOiAnLi4vaW1hZ2UvbXlhcmN0aWxlLnBuZycsXG4gICAgaWNvbjogJycsXG4gICAgbmlja05hbWU6ICcnXG4gIH1cbiAgb25Mb2FkKCkge1xuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB0cnkge1xuICAgICAgc2VsZi5pY29uID0gd2VweS5nZXRTdG9yYWdlU3luYygnYXZhdGFyVXJsJylcbiAgICAgIHNlbGYubmlja05hbWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCduaWNrTmFtZScpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxufVxuIl19