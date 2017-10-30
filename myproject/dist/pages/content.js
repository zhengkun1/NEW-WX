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
      content: ''
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
      formSubmit: function formSubmit(e) {
        var self = this;
        // console.log('form发生了submit事件，携带数据为：', e.detail.value)
        if (e.detail.value.input !== '') {
          try {
            // let value = e.detail.value
            var array = _wepy2.default.getStorageSync('arr');
            if (array) {
              array.push({
                value: e.detail.value
              });
              _wepy2.default.setStorageSync('arr', array);
            } else {
              var arr = [{
                value: e.detail.value
              }];
              _wepy2.default.setStorageSync('arr', arr);
            }
            self.setData({
              input: ''
            });
            var value = self.value;
            if (!value) {
              value = [];
            }
            value.push({
              value: {
                input: e.detail.value.input
              }
            });
            self.value = value;
          } catch (e) {}
        } else {}
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuanMiXSwibmFtZXMiOlsiQ29udGVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaWNvbiIsImNvbW1lbnQiLCJjb2xsZWN0IiwiYXR0ZW50aW9uIiwiYSIsImNvbW1lbnQxIiwiYXJyIiwidmFsdWUiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImxpa2V0aGlzIiwiaW5wdXQiLCJjb25maXJtdHlwZSIsInRpdGxlIiwiY29udGVudCIsIm1ldGhvZHMiLCJzZWxmIiwiZm9ybVN1Ym1pdCIsImUiLCJkZXRhaWwiLCJhcnJheSIsImdldFN0b3JhZ2VTeW5jIiwicHVzaCIsInNldFN0b3JhZ2VTeW5jIiwic2V0RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxrQkFERDtBQUVMQyxlQUFTLHNCQUZKO0FBR0xDLGVBQVMsbUJBSEo7QUFJTEMsaUJBQVcsS0FKTjtBQUtMQyxTQUFHLElBTEU7QUFNTEMsZ0JBQVUsRUFOTDtBQU9MQyxXQUFLLEVBUEE7QUFRTEMsYUFBTyxFQVJGO0FBU0xDLGlCQUFXLEVBVE47QUFVTEMsZ0JBQVUsRUFWTDtBQVdMQyxnQkFBVSx1QkFYTDtBQVlMQyxhQUFPLEVBWkY7QUFhTEMsbUJBQWEsTUFiUjtBQWNMQyxhQUFPLEVBZEY7QUFlTEMsZUFBUztBQWZKLEssUUFpQlBDLE8sR0FBVTtBQUNSWixlQURRLHVCQUNJO0FBQ1YsWUFBSWEsT0FBTyxJQUFYO0FBQ0FBLGFBQUtiLFNBQUwsR0FBaUIsQ0FBQ2EsS0FBS2IsU0FBdkI7QUFDQSxZQUFJYSxLQUFLYixTQUFMLEtBQW1CLElBQXZCLEVBQTZCO0FBQzNCYSxlQUFLWixDQUFMLEdBQVMsSUFBVDtBQUNELFNBRkQsTUFFTztBQUNMWSxlQUFLWixDQUFMLEdBQVMsSUFBVDtBQUNEO0FBQ0YsT0FUTztBQVVSYSxnQkFWUSxzQkFVR0MsQ0FWSCxFQVVNO0FBQ1osWUFBSUYsT0FBTyxJQUFYO0FBQ0E7QUFDQSxZQUFJRSxFQUFFQyxNQUFGLENBQVNaLEtBQVQsQ0FBZUksS0FBZixLQUF5QixFQUE3QixFQUFpQztBQUMvQixjQUFJO0FBQ0Y7QUFDQSxnQkFBSVMsUUFBUSxlQUFLQyxjQUFMLENBQW9CLEtBQXBCLENBQVo7QUFDQSxnQkFBSUQsS0FBSixFQUFXO0FBQ1RBLG9CQUFNRSxJQUFOLENBQVc7QUFDVGYsdUJBQU9XLEVBQUVDLE1BQUYsQ0FBU1o7QUFEUCxlQUFYO0FBR0EsNkJBQUtnQixjQUFMLENBQW9CLEtBQXBCLEVBQTJCSCxLQUEzQjtBQUNELGFBTEQsTUFLTztBQUNMLGtCQUFJZCxNQUFNLENBQ1I7QUFDRUMsdUJBQU9XLEVBQUVDLE1BQUYsQ0FBU1o7QUFEbEIsZUFEUSxDQUFWO0FBS0EsNkJBQUtnQixjQUFMLENBQW9CLEtBQXBCLEVBQTJCakIsR0FBM0I7QUFDRDtBQUNEVSxpQkFBS1EsT0FBTCxDQUFhO0FBQ1hiLHFCQUFPO0FBREksYUFBYjtBQUdBLGdCQUFJSixRQUFRUyxLQUFLVCxLQUFqQjtBQUNBLGdCQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWQSxzQkFBUSxFQUFSO0FBQ0Q7QUFDREEsa0JBQU1lLElBQU4sQ0FBVztBQUNUZixxQkFBTztBQUNMSSx1QkFBT08sRUFBRUMsTUFBRixDQUFTWixLQUFULENBQWVJO0FBRGpCO0FBREUsYUFBWDtBQUtBSyxpQkFBS1QsS0FBTCxHQUFhQSxLQUFiO0FBQ0QsV0E3QkQsQ0E2QkUsT0FBT1csQ0FBUCxFQUFVLENBQ1g7QUFDRixTQWhDRCxNQWdDTyxDQUNOO0FBQ0Y7QUEvQ08sSzs7Ozs7MkJBaURIbkIsSSxFQUFNO0FBQ1gsVUFBSWlCLE9BQU8sSUFBWDtBQUNBQSxXQUFLSCxLQUFMLEdBQWFkLEtBQUtjLEtBQWxCO0FBQ0FHLFdBQUtGLE9BQUwsR0FBZWYsS0FBS2UsT0FBcEI7QUFDQVcsY0FBUUMsR0FBUixDQUFZVixLQUFLVCxLQUFqQjtBQUNEOzs7NkJBQ1E7QUFDUCxVQUFJUyxPQUFPLElBQVg7QUFDQSxVQUFJO0FBQ0ZBLGFBQUtULEtBQUwsR0FBYSxlQUFLYyxjQUFMLENBQW9CLEtBQXBCLENBQWI7QUFDQUksZ0JBQVFDLEdBQVIsQ0FBWVYsS0FBS1QsS0FBakI7QUFDQVMsYUFBS1IsU0FBTCxHQUFpQixlQUFLYSxjQUFMLENBQW9CLFdBQXBCLENBQWpCO0FBQ0FMLGFBQUtQLFFBQUwsR0FBZ0IsZUFBS1ksY0FBTCxDQUFvQixVQUFwQixDQUFoQjtBQUNELE9BTEQsQ0FLRSxPQUFPSCxDQUFQLEVBQVUsQ0FDWDtBQUNGOzs7O0VBckZrQyxlQUFLUyxJOztrQkFBckIvQixPIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBpY29uOiAnLi4vaW1hZ2UvYWRkLnBuZycsXG4gICAgY29tbWVudDogJy4uL2ltYWdlL2NvbW1lbnQucG5nJyxcbiAgICBjb2xsZWN0OiAnLi4vaW1hZ2UvbGlrZS5wbmcnLFxuICAgIGF0dGVudGlvbjogZmFsc2UsXG4gICAgYTogJ+WFs+azqCcsXG4gICAgY29tbWVudDE6ICcnLFxuICAgIGFycjogW10sXG4gICAgdmFsdWU6IFtdLFxuICAgIGF2YXRhclVybDogJycsXG4gICAgbmlja05hbWU6ICcnLFxuICAgIGxpa2V0aGlzOiAnLi4vaW1hZ2UvbGlrZXRoaXMucG5nJyxcbiAgICBpbnB1dDogJycsXG4gICAgY29uZmlybXR5cGU6ICdzZW5kJyxcbiAgICB0aXRsZTogJycsXG4gICAgY29udGVudDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGF0dGVudGlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5hdHRlbnRpb24gPSAhc2VsZi5hdHRlbnRpb25cbiAgICAgIGlmIChzZWxmLmF0dGVudGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICBzZWxmLmEgPSAn5Y+W5YWzJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5hID0gJ+WFs+azqCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAvLyBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnN1Ym1pdOS6i+S7tu+8jOaQuuW4puaVsOaNruS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgaWYgKGUuZGV0YWlsLnZhbHVlLmlucHV0ICE9PSAnJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIGxldCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgbGV0IGFycmF5ID0gd2VweS5nZXRTdG9yYWdlU3luYygnYXJyJylcbiAgICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goe1xuICAgICAgICAgICAgICB2YWx1ZTogZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdhcnInLCBhcnJheSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGFyciA9IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlLmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdhcnInLCBhcnIpXG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBpbnB1dDogJydcbiAgICAgICAgICB9KVxuICAgICAgICAgIGxldCB2YWx1ZSA9IHNlbGYudmFsdWVcbiAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFtdXG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlLnB1c2goe1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGUuZGV0YWlsLnZhbHVlLmlucHV0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICBzZWxmLnZhbHVlID0gdmFsdWVcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYudGl0bGUgPSBkYXRhLnRpdGxlXG4gICAgc2VsZi5jb250ZW50ID0gZGF0YS5jb250ZW50XG4gICAgY29uc29sZS5sb2coc2VsZi52YWx1ZSlcbiAgfVxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgdHJ5IHtcbiAgICAgIHNlbGYudmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdhcnInKVxuICAgICAgY29uc29sZS5sb2coc2VsZi52YWx1ZSlcbiAgICAgIHNlbGYuYXZhdGFyVXJsID0gd2VweS5nZXRTdG9yYWdlU3luYygnYXZhdGFyVXJsJylcbiAgICAgIHNlbGYubmlja05hbWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCduaWNrTmFtZScpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxufVxuIl19