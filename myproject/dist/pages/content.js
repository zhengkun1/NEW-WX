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
      value: '',
      avatarUrl: '',
      nickName: '',
      likethis: '../image/likethis.png'

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
        console.log('form发生了submit事件，携带数据为：', e.detail.value);
        // let self = this
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
        } catch (e) {}
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Content, [{
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuanMiXSwibmFtZXMiOlsiQ29udGVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaWNvbiIsImNvbW1lbnQiLCJjb2xsZWN0IiwiYXR0ZW50aW9uIiwiYSIsImNvbW1lbnQxIiwiYXJyIiwidmFsdWUiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImxpa2V0aGlzIiwibWV0aG9kcyIsInNlbGYiLCJmb3JtU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJhcnJheSIsImdldFN0b3JhZ2VTeW5jIiwicHVzaCIsInNldFN0b3JhZ2VTeW5jIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sa0JBREQ7QUFFTEMsZUFBUyxzQkFGSjtBQUdMQyxlQUFTLG1CQUhKO0FBSUxDLGlCQUFXLEtBSk47QUFLTEMsU0FBRyxJQUxFO0FBTUxDLGdCQUFVLEVBTkw7QUFPTEMsV0FBSyxFQVBBO0FBUUxDLGFBQU8sRUFSRjtBQVNMQyxpQkFBVyxFQVROO0FBVUxDLGdCQUFVLEVBVkw7QUFXTEMsZ0JBQVU7O0FBWEwsSyxRQWNQQyxPLEdBQVU7QUFDUlIsZUFEUSx1QkFDSTtBQUNWLFlBQUlTLE9BQU8sSUFBWDtBQUNBQSxhQUFLVCxTQUFMLEdBQWlCLENBQUNTLEtBQUtULFNBQXZCO0FBQ0EsWUFBSVMsS0FBS1QsU0FBTCxLQUFtQixJQUF2QixFQUE2QjtBQUMzQlMsZUFBS1IsQ0FBTCxHQUFTLElBQVQ7QUFDRCxTQUZELE1BRU87QUFDTFEsZUFBS1IsQ0FBTCxHQUFTLElBQVQ7QUFDRDtBQUNGLE9BVE87QUFVUlMsZ0JBVlEsc0JBVUdDLENBVkgsRUFVTTtBQUNaQyxnQkFBUUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDRixFQUFFRyxNQUFGLENBQVNWLEtBQS9DO0FBQ0E7QUFDQSxZQUFJO0FBQ0Y7QUFDQSxjQUFJVyxRQUFRLGVBQUtDLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBWjtBQUNBLGNBQUlELEtBQUosRUFBVztBQUNUQSxrQkFBTUUsSUFBTixDQUFXO0FBQ1RiLHFCQUFPTyxFQUFFRyxNQUFGLENBQVNWO0FBRFAsYUFBWDtBQUdBLDJCQUFLYyxjQUFMLENBQW9CLEtBQXBCLEVBQTJCSCxLQUEzQjtBQUNELFdBTEQsTUFLTztBQUNMLGdCQUFJWixNQUFNLENBQ1I7QUFDRUMscUJBQU9PLEVBQUVHLE1BQUYsQ0FBU1Y7QUFEbEIsYUFEUSxDQUFWO0FBS0EsMkJBQUtjLGNBQUwsQ0FBb0IsS0FBcEIsRUFBMkJmLEdBQTNCO0FBQ0Q7QUFDRixTQWhCRCxDQWdCRSxPQUFPUSxDQUFQLEVBQVUsQ0FDWDtBQUNGO0FBL0JPLEs7Ozs7OzZCQWlDRDtBQUNQLFVBQUlGLE9BQU8sSUFBWDtBQUNBLFVBQUk7QUFDRkEsYUFBS0wsS0FBTCxHQUFhLGVBQUtZLGNBQUwsQ0FBb0IsS0FBcEIsQ0FBYjtBQUNBSixnQkFBUUMsR0FBUixDQUFZSixLQUFLTCxLQUFqQjtBQUNBSyxhQUFLSixTQUFMLEdBQWlCLGVBQUtXLGNBQUwsQ0FBb0IsV0FBcEIsQ0FBakI7QUFDQVAsYUFBS0gsUUFBTCxHQUFnQixlQUFLVSxjQUFMLENBQW9CLFVBQXBCLENBQWhCO0FBQ0QsT0FMRCxDQUtFLE9BQU9MLENBQVAsRUFBVSxDQUNYO0FBQ0Y7Ozs7RUE1RGtDLGVBQUtRLEk7O2tCQUFyQjFCLE8iLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgfVxuICBkYXRhID0ge1xuICAgIGljb246ICcuLi9pbWFnZS9hZGQucG5nJyxcbiAgICBjb21tZW50OiAnLi4vaW1hZ2UvY29tbWVudC5wbmcnLFxuICAgIGNvbGxlY3Q6ICcuLi9pbWFnZS9saWtlLnBuZycsXG4gICAgYXR0ZW50aW9uOiBmYWxzZSxcbiAgICBhOiAn5YWz5rOoJyxcbiAgICBjb21tZW50MTogJycsXG4gICAgYXJyOiBbXSxcbiAgICB2YWx1ZTogJycsXG4gICAgYXZhdGFyVXJsOiAnJyxcbiAgICBuaWNrTmFtZTogJycsXG4gICAgbGlrZXRoaXM6ICcuLi9pbWFnZS9saWtldGhpcy5wbmcnXG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGF0dGVudGlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5hdHRlbnRpb24gPSAhc2VsZi5hdHRlbnRpb25cbiAgICAgIGlmIChzZWxmLmF0dGVudGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICBzZWxmLmEgPSAn5Y+W5YWzJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5hID0gJ+WFs+azqCdcbiAgICAgIH1cbiAgICB9LFxuICAgIGZvcm1TdWJtaXQoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgIC8vIGxldCBzZWxmID0gdGhpc1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gbGV0IHZhbHVlID0gZS5kZXRhaWwudmFsdWVcbiAgICAgICAgbGV0IGFycmF5ID0gd2VweS5nZXRTdG9yYWdlU3luYygnYXJyJylcbiAgICAgICAgaWYgKGFycmF5KSB7XG4gICAgICAgICAgYXJyYXkucHVzaCh7XG4gICAgICAgICAgICB2YWx1ZTogZS5kZXRhaWwudmFsdWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2FycicsIGFycmF5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBhcnIgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbHVlOiBlLmRldGFpbC52YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdhcnInLCBhcnIpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHRyeSB7XG4gICAgICBzZWxmLnZhbHVlID0gd2VweS5nZXRTdG9yYWdlU3luYygnYXJyJylcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYudmFsdWUpXG4gICAgICBzZWxmLmF2YXRhclVybCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2F2YXRhclVybCcpXG4gICAgICBzZWxmLm5pY2tOYW1lID0gd2VweS5nZXRTdG9yYWdlU3luYygnbmlja05hbWUnKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG4gIH1cbn1cbiJdfQ==