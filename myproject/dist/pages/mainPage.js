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
      text: '',
      attentionicon: '../image/add.png',
      usernickName: 'USERNAME',
      pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509609778521&di=8619809c29700c09d707aaccb895f976&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F91%2F04p58PICmUA_1024.jpg',
      title: '标题',
      content: '这个时代和，宛若撒种、耕耘与收获，土地从不辜负弄人，生活也不会辜负任何个体。真抱歉！这个公平的时代何曾强暴了你',
      comment: '333',
      like: '333'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Discovery, [{
    key: 'onShow',
    value: function onShow() {
      var self = this;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/mainpage',
        method: 'POST',
        data: {
          usernickName: self.usernickName,
          usericon: self.usericon,
          title: self.title,
          article: self.article
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

  return Discovery;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Discovery , 'pages/mainPage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5QYWdlLmpzIl0sIm5hbWVzIjpbIkRpc2NvdmVyeSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidGV4dCIsImF0dGVudGlvbmljb24iLCJ1c2Vybmlja05hbWUiLCJwaWMiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb21tZW50IiwibGlrZSIsInNlbGYiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwidXNlcmljb24iLCJhcnRpY2xlIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxxQkFBZSxrQkFGVjtBQUdMQyxvQkFBYyxVQUhUO0FBSUxDLFdBQUssOE1BSkE7QUFLTEMsYUFBTyxJQUxGO0FBTUxDLGVBQVMseURBTko7QUFPTEMsZUFBUyxLQVBKO0FBUUxDLFlBQU07QUFSRCxLOzs7Ozs2QkFVRTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxPQUFMLENBQWE7QUFDWEMsYUFBSyxnQ0FETTtBQUVYQyxnQkFBUSxNQUZHO0FBR1haLGNBQU07QUFDSkcsd0JBQWNNLEtBQUtOLFlBRGY7QUFFSlUsb0JBQVVKLEtBQUtJLFFBRlg7QUFHSlIsaUJBQU9JLEtBQUtKLEtBSFI7QUFJSlMsbUJBQVNMLEtBQUtLO0FBSlYsU0FISztBQVNYQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCQyxrQkFBUUMsR0FBUixDQUFZRixJQUFJaEIsSUFBaEI7QUFDQVMsZUFBS1IsSUFBTCxHQUFZZSxJQUFJaEIsSUFBaEI7QUFDQVMsZUFBS1UsT0FBTCxDQUFhO0FBQ1hsQixrQkFBTWUsSUFBSWhCO0FBREMsV0FBYjtBQUdEO0FBZlUsT0FBYjtBQWlCRDs7OztFQWpDb0MsZUFBS29CLEk7O2tCQUF2QnZCLFMiLCJmaWxlIjoibWFpblBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjb3ZlcnkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgfVxuICBkYXRhID0ge1xuICAgIHRleHQ6ICcnLFxuICAgIGF0dGVudGlvbmljb246ICcuLi9pbWFnZS9hZGQucG5nJyxcbiAgICB1c2Vybmlja05hbWU6ICdVU0VSTkFNRScsXG4gICAgcGljOiAnaHR0cHM6Ly90aW1nc2EuYmFpZHUuY29tL3RpbWc/aW1hZ2UmcXVhbGl0eT04MCZzaXplPWI5OTk5XzEwMDAwJnNlYz0xNTA5NjA5Nzc4NTIxJmRpPTg2MTk4MDljMjk3MDBjMDlkNzA3YWFjY2I4OTVmOTc2JmltZ3R5cGU9MCZzcmM9aHR0cCUzQSUyRiUyRnBpYy41OHBpYy5jb20lMkY1OHBpYyUyRjE1JTJGMTQlMkY5MSUyRjA0cDU4UElDbVVBXzEwMjQuanBnJyxcbiAgICB0aXRsZTogJ+agh+mimCcsXG4gICAgY29udGVudDogJ+i/meS4quaXtuS7o+WSjO+8jOWum+iLpeaSkuenjeOAgeiAleiAmOS4juaUtuiOt++8jOWcn+WcsOS7juS4jei+nOi0n+W8hOS6uu+8jOeUn+a0u+S5n+S4jeS8mui+nOi0n+S7u+S9leS4quS9k+OAguecn+aKseatie+8gei/meS4quWFrOW5s+eahOaXtuS7o+S9leabvuW8uuaatOS6huS9oCcsXG4gICAgY29tbWVudDogJzMzMycsXG4gICAgbGlrZTogJzMzMydcbiAgfVxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS9tYWlucGFnZScsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5pY2tOYW1lOiBzZWxmLnVzZXJuaWNrTmFtZSxcbiAgICAgICAgdXNlcmljb246IHNlbGYudXNlcmljb24sXG4gICAgICAgIHRpdGxlOiBzZWxmLnRpdGxlLFxuICAgICAgICBhcnRpY2xlOiBzZWxmLmFydGljbGVcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgIHNlbGYudGV4dCA9IHJlcy5kYXRhXG4gICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgdGV4dDogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=