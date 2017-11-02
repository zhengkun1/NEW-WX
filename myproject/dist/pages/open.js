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

var Open = function (_wepy$page) {
  _inherits(Open, _wepy$page);

  function Open() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Open);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Open.__proto__ || Object.getPrototypeOf(Open)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '公开文章'
    }, _this.data = {
      add: '../image/add.png',
      value: [],
      icon: '',
      nickName: '',
      text: ''
    }, _this.methods = {
      addarticle: function addarticle() {
        _wepy2.default.navigateTo({
          url: './add'
        });
      },
      article: function article(e) {
        var self = this;
        var item = self.value[e.currentTarget.id];
        _wepy2.default.navigateTo({
          url: './content?title=' + item.value.title + '&content=' + item.value.content
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Open, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow(data) {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.icon = res.userInfo.avatarUrl;
          self.nickName = res.userInfo.nickName;
          _wepy2.default.request({
            url: 'http://127.0.0.1:7001/myarticle',
            method: 'POST',
            data: {
              usernickName: self.nickName
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
      });
    }
  }]);

  return Open;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Open , 'pages/open'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW4uanMiXSwibmFtZXMiOlsiT3BlbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYWRkIiwidmFsdWUiLCJpY29uIiwibmlja05hbWUiLCJ0ZXh0IiwibWV0aG9kcyIsImFkZGFydGljbGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYXJ0aWNsZSIsImUiLCJzZWxmIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwicmVxdWVzdCIsIm1ldGhvZCIsInVzZXJuaWNrTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssa0JBREE7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLFlBQU0sRUFIRDtBQUlMQyxnQkFBVSxFQUpMO0FBS0xDLFlBQU07QUFMRCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxnQkFEUSx3QkFDSztBQUNYLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsYUFOUSxtQkFNQUMsQ0FOQSxFQU1HO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsT0FBT0QsS0FBS1YsS0FBTCxDQUFXUyxFQUFFRyxhQUFGLENBQWdCQyxFQUEzQixDQUFYO0FBQ0EsdUJBQUtQLFVBQUwsQ0FBZ0I7QUFDZEMsb0NBQXdCSSxLQUFLWCxLQUFMLENBQVdjLEtBQW5DLGlCQUFvREgsS0FBS1gsS0FBTCxDQUFXZTtBQURqRCxTQUFoQjtBQUdEO0FBWk8sSzs7Ozs7NkJBY0QsQ0FDUjs7OzJCQUNNakIsSSxFQUFNO0FBQ1gsVUFBSVksT0FBTyxJQUFYO0FBQ0EscUJBQUtNLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlIsZUFBS1QsSUFBTCxHQUFZaUIsSUFBSUMsUUFBSixDQUFhQyxTQUF6QjtBQUNBVixlQUFLUixRQUFMLEdBQWdCZ0IsSUFBSUMsUUFBSixDQUFhakIsUUFBN0I7QUFDQSx5QkFBS21CLE9BQUwsQ0FBYTtBQUNYZCxpQkFBSyxpQ0FETTtBQUVYZSxvQkFBUSxNQUZHO0FBR1h4QixrQkFBTTtBQUNKeUIsNEJBQWNiLEtBQUtSO0FBRGYsYUFISztBQU1YZSxxQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTSxzQkFBUUMsR0FBUixDQUFZUCxJQUFJcEIsSUFBaEI7QUFDQVksbUJBQUtQLElBQUwsR0FBWWUsSUFBSXBCLElBQWhCO0FBQ0FZLG1CQUFLZ0IsT0FBTCxDQUFhO0FBQ1h2QixzQkFBTWUsSUFBSXBCO0FBREMsZUFBYjtBQUdEO0FBWlUsV0FBYjtBQWNEO0FBbEJjLE9BQWpCO0FBb0JEOzs7O0VBakQrQixlQUFLNkIsSTs7a0JBQWxCaEMsSSIsImZpbGUiOiJvcGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YWs5byA5paH56ugJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYWRkOiAnLi4vaW1hZ2UvYWRkLnBuZycsXG4gICAgdmFsdWU6IFtdLFxuICAgIGljb246ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICB0ZXh0OiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYWRkYXJ0aWNsZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vYWRkJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGFydGljbGUoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaXRlbSA9IHNlbGYudmFsdWVbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9jb250ZW50P3RpdGxlPSR7aXRlbS52YWx1ZS50aXRsZX0mY29udGVudD0ke2l0ZW0udmFsdWUuY29udGVudH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbiAgb25TaG93KGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmljb24gPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvbXlhcnRpY2xlJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB1c2Vybmlja05hbWU6IHNlbGYubmlja05hbWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVxuICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgdGV4dDogcmVzLmRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==