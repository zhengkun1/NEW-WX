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

var Attention = function (_wepy$page) {
  _inherits(Attention, _wepy$page);

  function Attention() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Attention);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Attention.__proto__ || Object.getPrototypeOf(Attention)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '写文章'
    }, _this.data = {
      icon: '',
      nickName: ''
    }, _this.methods = {
      formSubmit: function formSubmit(e) {
        var self = this;
        console.log('formsubmit 携带内容为： ', e.detail.value);
        // if (e.detail.value !== '') {
        //   try {
        //     let article = wepy.getStorageSync('article')
        //     if (article) {
        //       article.push({
        //         value: e.detail.value
        //       })
        //       wepy.setStorageSync('article', article)
        //     } else {
        //       let article = [
        //         {
        //           value: e.detail.value
        //         }
        //       ]
        //       wepy.setStorageSync('article', article)
        //     }
        //   } catch (e) {
        //   }
        // } else {
        // }
        _wepy2.default.navigateBack({
          delta: 1
        });
        _wepy2.default.request({
          url: 'http://127.0.0.1:7001/jianshu',
          method: 'POST',
          data: {
            usernickName: self.nickName,
            useravatarUrl: self.icon,
            title: e.detail.value.title,
            article: e.detail.value.content
          },
          success: function success(res) {
            // console.log(res)
            console.log(e.detail.value.content, 'art');
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Attention, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.icon = res.userInfo.avatarUrl;
          self.nickName = res.userInfo.nickName;
        }
      });
    }
  }]);

  return Attention;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Attention , 'pages/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJBdHRlbnRpb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImljb24iLCJuaWNrTmFtZSIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidmFsdWUiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJ1c2Vybmlja05hbWUiLCJ1c2VyYXZhdGFyVXJsIiwidGl0bGUiLCJhcnRpY2xlIiwiY29udGVudCIsInN1Y2Nlc3MiLCJyZXMiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxnQkFBVTtBQUZMLEssUUFJUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0gsRUFBRUksTUFBRixDQUFTQyxLQUEzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBS0MsWUFBTCxDQUFrQjtBQUNoQkMsaUJBQU87QUFEUyxTQUFsQjtBQUdBLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSywrQkFETTtBQUVYQyxrQkFBUSxNQUZHO0FBR1hmLGdCQUFNO0FBQ0pnQiwwQkFBY1YsS0FBS0osUUFEZjtBQUVKZSwyQkFBZVgsS0FBS0wsSUFGaEI7QUFHSmlCLG1CQUFPYixFQUFFSSxNQUFGLENBQVNDLEtBQVQsQ0FBZVEsS0FIbEI7QUFJSkMscUJBQVNkLEVBQUVJLE1BQUYsQ0FBU0MsS0FBVCxDQUFlVTtBQUpwQixXQUhLO0FBU1hDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDQWYsb0JBQVFDLEdBQVIsQ0FBWUgsRUFBRUksTUFBRixDQUFTQyxLQUFULENBQWVVLE9BQTNCLEVBQW9DLEtBQXBDO0FBQ0Q7QUFaVSxTQUFiO0FBY0Q7QUF6Q08sSzs7Ozs7NkJBMkNEO0FBQ1AsVUFBSWQsT0FBTyxJQUFYO0FBQ0EscUJBQUtpQixXQUFMLENBQWlCO0FBQ2ZGLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJoQixlQUFLTCxJQUFMLEdBQVlxQixJQUFJRSxRQUFKLENBQWFDLFNBQXpCO0FBQ0FuQixlQUFLSixRQUFMLEdBQWdCb0IsSUFBSUUsUUFBSixDQUFhdEIsUUFBN0I7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUEzRG9DLGVBQUt3QixJOztrQkFBdkI3QixTIiwiZmlsZSI6ImFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dGVudGlvbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YaZ5paH56ugJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaWNvbjogJycsXG4gICAgbmlja05hbWU6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBmb3JtU3VibWl0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm1zdWJtaXQg5pC65bim5YaF5a655Li677yaICcsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgLy8gaWYgKGUuZGV0YWlsLnZhbHVlICE9PSAnJykge1xuICAgICAgLy8gICB0cnkge1xuICAgICAgLy8gICAgIGxldCBhcnRpY2xlID0gd2VweS5nZXRTdG9yYWdlU3luYygnYXJ0aWNsZScpXG4gICAgICAvLyAgICAgaWYgKGFydGljbGUpIHtcbiAgICAgIC8vICAgICAgIGFydGljbGUucHVzaCh7XG4gICAgICAvLyAgICAgICAgIHZhbHVlOiBlLmRldGFpbC52YWx1ZVxuICAgICAgLy8gICAgICAgfSlcbiAgICAgIC8vICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2FydGljbGUnLCBhcnRpY2xlKVxuICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAvLyAgICAgICBsZXQgYXJ0aWNsZSA9IFtcbiAgICAgIC8vICAgICAgICAge1xuICAgICAgLy8gICAgICAgICAgIHZhbHVlOiBlLmRldGFpbC52YWx1ZVxuICAgICAgLy8gICAgICAgICB9XG4gICAgICAvLyAgICAgICBdXG4gICAgICAvLyAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdhcnRpY2xlJywgYXJ0aWNsZSlcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vIH1cbiAgICAgIHdlcHkubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgZGVsdGE6IDFcbiAgICAgIH0pXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvamlhbnNodScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXNlcm5pY2tOYW1lOiBzZWxmLm5pY2tOYW1lLFxuICAgICAgICAgIHVzZXJhdmF0YXJVcmw6IHNlbGYuaWNvbixcbiAgICAgICAgICB0aXRsZTogZS5kZXRhaWwudmFsdWUudGl0bGUsXG4gICAgICAgICAgYXJ0aWNsZTogZS5kZXRhaWwudmFsdWUuY29udGVudFxuICAgICAgICB9LFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudmFsdWUuY29udGVudCwgJ2FydCcpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmljb24gPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=