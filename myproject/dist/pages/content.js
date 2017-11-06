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

var Content = function (_wepy$page) {
  _inherits(Content, _wepy$page);

  function Content() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Content);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Content.__proto__ || Object.getPrototypeOf(Content)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      icon: '../image/add.png',
      comment: '../image/comment.png',
      collect: '../image/like.png',
      attention: false,
      a: '关注',
      comment1: '',
      arr: [],
      value: [],
      avatarUrl: '',
      nickName: '',
      likethis: '../image/likethis.png',
      input: '',
      confirmtype: 'send',
      title: '',
      content: '',
      like: false,
      b: '../image/likedd.png'
    }, _this.methods = {
      attention: function attention() {
        var self = this;
        self.attention = !self.attention;
        if (self.attention === true) {
          self.a = '取关';
        } else {
          self.a = '关注';
        }
      },
      like: function like() {
        var self = this;
        self.like = !self.like;
        if (self.like === true) {
          self.b = '../image/liked.png';
        } else {
          self.b = '../image/likedd.png';
        }
      },
      formSubmit: function formSubmit(e) {
        var self = this;
        // console.log('form发生了submit事件，携带数据为：', e.detail.value)
        // if (e.detail.value.input !== '') {
        //   try {
        //     // let value = e.detail.value
        //     let array = wepy.getStorageSync('arr')
        //     if (array) {
        //       array.push({
        //         value: e.detail.value
        //       })
        //       wepy.setStorageSync('arr', array)
        //     } else {
        //       let arr = [
        //         {
        //           value: e.detail.value
        //         }
        //       ]
        //       wepy.setStorageSync('arr', arr)
        //     }
        //     self.setData({
        //       input: ''
        //     })
        //     let value = self.value
        //     if (!value) {
        //       value = []
        //     }
        //     value.push({
        //       value: {
        //         input: e.detail.value.input
        //       }
        //     })
        //     self.value = value
        //   } catch (e) {
        //   }
        // } else {
        // }
        if (e.detail.value.input !== '') {
          _wepy2.default.request({
            url: 'http://127.0.0.1:7001/comment',
            method: 'POST',
            data: {
              comment: e.detail.value.input,
              article: self.title,
              username: self.usernickName,
              avatarUrl: self.avatarUrl
            },
            success: function success(res) {
              console.log(res.data);
              self.text = res.data;
            }
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Content, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.title = data.title;
      self.content = data.content;
      console.log(self.value);
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      try {
        self.value = _wepy2.default.getStorageSync('arr');
        console.log(self.value);
        self.avatarUrl = _wepy2.default.getStorageSync('avatarUrl');
        self.nickName = _wepy2.default.getStorageSync('nickName');
      } catch (e) {}
    }
  }]);

  return Content;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Content , 'pages/content'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuanMiXSwibmFtZXMiOlsiQ29udGVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaWNvbiIsImNvbW1lbnQiLCJjb2xsZWN0IiwiYXR0ZW50aW9uIiwiYSIsImNvbW1lbnQxIiwiYXJyIiwidmFsdWUiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImxpa2V0aGlzIiwiaW5wdXQiLCJjb25maXJtdHlwZSIsInRpdGxlIiwiY29udGVudCIsImxpa2UiLCJiIiwibWV0aG9kcyIsInNlbGYiLCJmb3JtU3VibWl0IiwiZSIsImRldGFpbCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJhcnRpY2xlIiwidXNlcm5hbWUiLCJ1c2Vybmlja05hbWUiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJnZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLGtCQUREO0FBRUxDLGVBQVMsc0JBRko7QUFHTEMsZUFBUyxtQkFISjtBQUlMQyxpQkFBVyxLQUpOO0FBS0xDLFNBQUcsSUFMRTtBQU1MQyxnQkFBVSxFQU5MO0FBT0xDLFdBQUssRUFQQTtBQVFMQyxhQUFPLEVBUkY7QUFTTEMsaUJBQVcsRUFUTjtBQVVMQyxnQkFBVSxFQVZMO0FBV0xDLGdCQUFVLHVCQVhMO0FBWUxDLGFBQU8sRUFaRjtBQWFMQyxtQkFBYSxNQWJSO0FBY0xDLGFBQU8sRUFkRjtBQWVMQyxlQUFTLEVBZko7QUFnQkxDLFlBQU0sS0FoQkQ7QUFpQkxDLFNBQUc7QUFqQkUsSyxRQW1CUEMsTyxHQUFVO0FBQ1JkLGVBRFEsdUJBQ0k7QUFDVixZQUFJZSxPQUFPLElBQVg7QUFDQUEsYUFBS2YsU0FBTCxHQUFpQixDQUFDZSxLQUFLZixTQUF2QjtBQUNBLFlBQUllLEtBQUtmLFNBQUwsS0FBbUIsSUFBdkIsRUFBNkI7QUFDM0JlLGVBQUtkLENBQUwsR0FBUyxJQUFUO0FBQ0QsU0FGRCxNQUVPO0FBQ0xjLGVBQUtkLENBQUwsR0FBUyxJQUFUO0FBQ0Q7QUFDRixPQVRPO0FBVVJXLFVBVlEsa0JBVUQ7QUFDTCxZQUFJRyxPQUFPLElBQVg7QUFDQUEsYUFBS0gsSUFBTCxHQUFZLENBQUNHLEtBQUtILElBQWxCO0FBQ0EsWUFBSUcsS0FBS0gsSUFBTCxLQUFjLElBQWxCLEVBQXdCO0FBQ3RCRyxlQUFLRixDQUFMLEdBQVMsb0JBQVQ7QUFDRCxTQUZELE1BRU87QUFDTEUsZUFBS0YsQ0FBTCxHQUFTLHFCQUFUO0FBQ0Q7QUFDRixPQWxCTztBQW1CUkcsZ0JBbkJRLHNCQW1CR0MsQ0FuQkgsRUFtQk07QUFDWixZQUFJRixPQUFPLElBQVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSUUsRUFBRUMsTUFBRixDQUFTZCxLQUFULENBQWVJLEtBQWYsS0FBeUIsRUFBN0IsRUFBaUM7QUFDL0IseUJBQUtXLE9BQUwsQ0FBYTtBQUNYQyxpQkFBSywrQkFETTtBQUVYQyxvQkFBUSxNQUZHO0FBR1h6QixrQkFBTTtBQUNKRSx1QkFBU21CLEVBQUVDLE1BQUYsQ0FBU2QsS0FBVCxDQUFlSSxLQURwQjtBQUVKYyx1QkFBU1AsS0FBS0wsS0FGVjtBQUdKYSx3QkFBVVIsS0FBS1MsWUFIWDtBQUlKbkIseUJBQVdVLEtBQUtWO0FBSlosYUFISztBQVNYb0IscUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QkMsc0JBQVFDLEdBQVIsQ0FBWUYsSUFBSTlCLElBQWhCO0FBQ0FtQixtQkFBS2MsSUFBTCxHQUFZSCxJQUFJOUIsSUFBaEI7QUFDRDtBQVpVLFdBQWI7QUFjRDtBQUNGO0FBeEVPLEs7Ozs7OzJCQTBFSEEsSSxFQUFNO0FBQ1gsVUFBSW1CLE9BQU8sSUFBWDtBQUNBQSxXQUFLTCxLQUFMLEdBQWFkLEtBQUtjLEtBQWxCO0FBQ0FLLFdBQUtKLE9BQUwsR0FBZWYsS0FBS2UsT0FBcEI7QUFDQWdCLGNBQVFDLEdBQVIsQ0FBWWIsS0FBS1gsS0FBakI7QUFDRDs7OzZCQUNRO0FBQ1AsVUFBSVcsT0FBTyxJQUFYO0FBQ0EsVUFBSTtBQUNGQSxhQUFLWCxLQUFMLEdBQWEsZUFBSzBCLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBYjtBQUNBSCxnQkFBUUMsR0FBUixDQUFZYixLQUFLWCxLQUFqQjtBQUNBVyxhQUFLVixTQUFMLEdBQWlCLGVBQUt5QixjQUFMLENBQW9CLFdBQXBCLENBQWpCO0FBQ0FmLGFBQUtULFFBQUwsR0FBZ0IsZUFBS3dCLGNBQUwsQ0FBb0IsVUFBcEIsQ0FBaEI7QUFDRCxPQUxELENBS0UsT0FBT2IsQ0FBUCxFQUFVLENBQ1g7QUFDRjs7OztFQWhIa0MsZUFBS2MsSTs7a0JBQXJCdEMsTyIsImZpbGUiOiJjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaWNvbjogJy4uL2ltYWdlL2FkZC5wbmcnLFxuICAgIGNvbW1lbnQ6ICcuLi9pbWFnZS9jb21tZW50LnBuZycsXG4gICAgY29sbGVjdDogJy4uL2ltYWdlL2xpa2UucG5nJyxcbiAgICBhdHRlbnRpb246IGZhbHNlLFxuICAgIGE6ICflhbPms6gnLFxuICAgIGNvbW1lbnQxOiAnJyxcbiAgICBhcnI6IFtdLFxuICAgIHZhbHVlOiBbXSxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICBsaWtldGhpczogJy4uL2ltYWdlL2xpa2V0aGlzLnBuZycsXG4gICAgaW5wdXQ6ICcnLFxuICAgIGNvbmZpcm10eXBlOiAnc2VuZCcsXG4gICAgdGl0bGU6ICcnLFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIGxpa2U6IGZhbHNlLFxuICAgIGI6ICcuLi9pbWFnZS9saWtlZGQucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYXR0ZW50aW9uKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmF0dGVudGlvbiA9ICFzZWxmLmF0dGVudGlvblxuICAgICAgaWYgKHNlbGYuYXR0ZW50aW9uID09PSB0cnVlKSB7XG4gICAgICAgIHNlbGYuYSA9ICflj5blhbMnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmEgPSAn5YWz5rOoJ1xuICAgICAgfVxuICAgIH0sXG4gICAgbGlrZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5saWtlID0gIXNlbGYubGlrZVxuICAgICAgaWYgKHNlbGYubGlrZSA9PT0gdHJ1ZSkge1xuICAgICAgICBzZWxmLmIgPSAnLi4vaW1hZ2UvbGlrZWQucG5nJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5iID0gJy4uL2ltYWdlL2xpa2VkZC5wbmcnXG4gICAgICB9XG4gICAgfSxcbiAgICBmb3JtU3VibWl0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgLy8gY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgIC8vIGlmIChlLmRldGFpbC52YWx1ZS5pbnB1dCAhPT0gJycpIHtcbiAgICAgIC8vICAgdHJ5IHtcbiAgICAgIC8vICAgICAvLyBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgLy8gICAgIGxldCBhcnJheSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2FycicpXG4gICAgICAvLyAgICAgaWYgKGFycmF5KSB7XG4gICAgICAvLyAgICAgICBhcnJheS5wdXNoKHtcbiAgICAgIC8vICAgICAgICAgdmFsdWU6IGUuZGV0YWlsLnZhbHVlXG4gICAgICAvLyAgICAgICB9KVxuICAgICAgLy8gICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnYXJyJywgYXJyYXkpXG4gICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICAgIGxldCBhcnIgPSBbXG4gICAgICAvLyAgICAgICAgIHtcbiAgICAgIC8vICAgICAgICAgICB2YWx1ZTogZS5kZXRhaWwudmFsdWVcbiAgICAgIC8vICAgICAgICAgfVxuICAgICAgLy8gICAgICAgXVxuICAgICAgLy8gICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnYXJyJywgYXJyKVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgLy8gICAgICAgaW5wdXQ6ICcnXG4gICAgICAvLyAgICAgfSlcbiAgICAgIC8vICAgICBsZXQgdmFsdWUgPSBzZWxmLnZhbHVlXG4gICAgICAvLyAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgLy8gICAgICAgdmFsdWUgPSBbXVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgICB2YWx1ZS5wdXNoKHtcbiAgICAgIC8vICAgICAgIHZhbHVlOiB7XG4gICAgICAvLyAgICAgICAgIGlucHV0OiBlLmRldGFpbC52YWx1ZS5pbnB1dFxuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgIH0pXG4gICAgICAvLyAgICAgc2VsZi52YWx1ZSA9IHZhbHVlXG4gICAgICAvLyAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vIH1cbiAgICAgIGlmIChlLmRldGFpbC52YWx1ZS5pbnB1dCAhPT0gJycpIHtcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvY29tbWVudCcsXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29tbWVudDogZS5kZXRhaWwudmFsdWUuaW5wdXQsXG4gICAgICAgICAgICBhcnRpY2xlOiBzZWxmLnRpdGxlLFxuICAgICAgICAgICAgdXNlcm5hbWU6IHNlbGYudXNlcm5pY2tOYW1lLFxuICAgICAgICAgICAgYXZhdGFyVXJsOiBzZWxmLmF2YXRhclVybFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnRpdGxlID0gZGF0YS50aXRsZVxuICAgIHNlbGYuY29udGVudCA9IGRhdGEuY29udGVudFxuICAgIGNvbnNvbGUubG9nKHNlbGYudmFsdWUpXG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHRyeSB7XG4gICAgICBzZWxmLnZhbHVlID0gd2VweS5nZXRTdG9yYWdlU3luYygnYXJyJylcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudmFsdWUpXG4gICAgICBzZWxmLmF2YXRhclVybCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2F2YXRhclVybCcpXG4gICAgICBzZWxmLm5pY2tOYW1lID0gd2VweS5nZXRTdG9yYWdlU3luYygnbmlja05hbWUnKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG4gIH1cbn1cbiJdfQ==