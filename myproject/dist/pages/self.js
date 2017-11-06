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
    }, _this.methods = {
      open: function open() {
        _wepy2.default.navigateTo({
          url: './open'
        });
      },
      attention: function attention() {
        _wepy2.default.navigateTo({
          url: './attention'
        });
      },
      fans: function fans() {
        _wepy2.default.navigateTo({
          url: './fans'
        });
      },
      secret: function secret() {
        _wepy2.default.navigateTo({
          url: './secret'
        });
      },
      collect: function collect() {
        _wepy2.default.navigateTo({
          url: './collect'
        });
      },
      like: function like() {
        _wepy2.default.navigateTo({
          url: './like'
        });
      },
      mine: function mine() {
        _wepy2.default.navigateTo({
          url: './mine'
        });
      },
      myarticles: function myarticles() {
        _wepy2.default.navigateTo({
          url: './myarticle'
        });
      },
      record: function record() {
        _wepy2.default.navigateTo({
          url: './record'
        });
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGYuanMiXSwibmFtZXMiOlsiU2VsZiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2VjcmV0IiwibXlzdWJqZWN0IiwicmVjb3JkIiwibGlrZSIsImNvbGxlY3QiLCJkYXlhbmRuaWdodCIsIm15YXJjdGlsZSIsImljb24iLCJuaWNrTmFtZSIsIm1ldGhvZHMiLCJvcGVuIiwibmF2aWdhdGVUbyIsInVybCIsImF0dGVudGlvbiIsImZhbnMiLCJtaW5lIiwibXlhcnRpY2xlcyIsInNlbGYiLCJnZXRTdG9yYWdlU3luYyIsImUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxxQkFESDtBQUVMQyxpQkFBVyx3QkFGTjtBQUdMQyxjQUFRLHFCQUhIO0FBSUxDLFlBQU0sbUJBSkQ7QUFLTEMsZUFBUyxzQkFMSjtBQU1MQyxtQkFBYSwwQkFOUjtBQU9MQyxpQkFBVyx3QkFQTjtBQVFMQyxZQUFNLEVBUkQ7QUFTTEMsZ0JBQVU7QUFUTCxLLFFBV1BDLE8sR0FBVTtBQUNSQyxVQURRLGtCQUNEO0FBQ0wsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxlQU5RLHVCQU1JO0FBQ1YsdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FWTztBQVdSRSxVQVhRLGtCQVdEO0FBQ0wsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FmTztBQWdCUlosWUFoQlEsb0JBZ0JDO0FBQ1AsdUJBQUtXLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FwQk87QUFxQlJSLGFBckJRLHFCQXFCRTtBQUNSLHVCQUFLTyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BekJPO0FBMEJSVCxVQTFCUSxrQkEwQkQ7QUFDTCx1QkFBS1EsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTlCTztBQStCUkcsVUEvQlEsa0JBK0JEO0FBQ0wsdUJBQUtKLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FuQ087QUFvQ1JJLGdCQXBDUSx3QkFvQ0s7QUFDWCx1QkFBS0wsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXhDTztBQXlDUlYsWUF6Q1Esb0JBeUNDO0FBQ1AsdUJBQUtTLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUE3Q08sSzs7Ozs7NkJBK0NELENBQ1I7Ozs2QkFDUTtBQUNQLFVBQUlLLE9BQU8sSUFBWDtBQUNBLFVBQUk7QUFDRkEsYUFBS1YsSUFBTCxHQUFZLGVBQUtXLGNBQUwsQ0FBb0IsV0FBcEIsQ0FBWjtBQUNBRCxhQUFLVCxRQUFMLEdBQWdCLGVBQUtVLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBaEI7QUFDRCxPQUhELENBR0UsT0FBT0MsQ0FBUCxFQUFVLENBQ1g7QUFDRjs7OztFQXZFK0IsZUFBS0MsSTs7a0JBQWxCeEIsSSIsImZpbGUiOiJzZWxmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc2VjcmV0OiAnLi4vaW1hZ2Uvc2VjcmV0LnBuZycsXG4gICAgbXlzdWJqZWN0OiAnLi4vaW1hZ2UvbXlzdWJqZWN0LnBuZycsXG4gICAgcmVjb3JkOiAnLi4vaW1hZ2UvcmVjb3JkLnBuZycsXG4gICAgbGlrZTogJy4uL2ltYWdlL2xpa2UucG5nJyxcbiAgICBjb2xsZWN0OiAnLi4vaW1hZ2UvY29sbGVjdC5wbmcnLFxuICAgIGRheWFuZG5pZ2h0OiAnLi4vaW1hZ2UvZGF5YW5kbmlnaHQucG5nJyxcbiAgICBteWFyY3RpbGU6ICcuLi9pbWFnZS9teWFyY3RpbGUucG5nJyxcbiAgICBpY29uOiAnJyxcbiAgICBuaWNrTmFtZTogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG9wZW4oKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL29wZW4nXG4gICAgICB9KVxuICAgIH0sXG4gICAgYXR0ZW50aW9uKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9hdHRlbnRpb24nXG4gICAgICB9KVxuICAgIH0sXG4gICAgZmFucygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vZmFucydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzZWNyZXQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3NlY3JldCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjb2xsZWN0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9jb2xsZWN0J1xuICAgICAgfSlcbiAgICB9LFxuICAgIGxpa2UoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2xpa2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbWluZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vbWluZSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBteWFydGljbGVzKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9teWFydGljbGUnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVjb3JkKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9yZWNvcmQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHRyeSB7XG4gICAgICBzZWxmLmljb24gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdhdmF0YXJVcmwnKVxuICAgICAgc2VsZi5uaWNrTmFtZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ25pY2tOYW1lJylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICB9XG59XG4iXX0=