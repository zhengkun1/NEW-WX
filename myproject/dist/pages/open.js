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
      value: []
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
          url: './content?title=' + item.title
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Open, [{
    key: 'onShow',
    value: function onShow(data) {
      var self = this;
      self.value = _wepy2.default.getStorageSync('article');
      console.log(self.value);
    }
  }]);

  return Open;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Open , 'pages/open'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW4uanMiXSwibmFtZXMiOlsiT3BlbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYWRkIiwidmFsdWUiLCJtZXRob2RzIiwiYWRkYXJ0aWNsZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJhcnRpY2xlIiwiZSIsInNlbGYiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwidGl0bGUiLCJnZXRTdG9yYWdlU3luYyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxrQkFEQTtBQUVMQyxhQUFPO0FBRkYsSyxRQUlQQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLGFBTlEsbUJBTUFDLENBTkEsRUFNRztBQUNULFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtQLEtBQUwsQ0FBV00sRUFBRUcsYUFBRixDQUFnQkMsRUFBM0IsQ0FBWDtBQUNBLHVCQUFLUCxVQUFMLENBQWdCO0FBQ2RDLG9DQUF3QkksS0FBS0c7QUFEZixTQUFoQjtBQUdEO0FBWk8sSzs7Ozs7MkJBY0hiLEksRUFBTTtBQUNYLFVBQUlTLE9BQU8sSUFBWDtBQUNBQSxXQUFLUCxLQUFMLEdBQWEsZUFBS1ksY0FBTCxDQUFvQixTQUFwQixDQUFiO0FBQ0FDLGNBQVFDLEdBQVIsQ0FBWVAsS0FBS1AsS0FBakI7QUFDRDs7OztFQTFCK0IsZUFBS2UsSTs7a0JBQWxCcEIsSSIsImZpbGUiOiJvcGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YWs5byA5paH56ugJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYWRkOiAnLi4vaW1hZ2UvYWRkLnBuZycsXG4gICAgdmFsdWU6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBhZGRhcnRpY2xlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9hZGQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgYXJ0aWNsZShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi52YWx1ZVtlLmN1cnJlbnRUYXJnZXQuaWRdXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2NvbnRlbnQ/dGl0bGU9JHtpdGVtLnRpdGxlfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uU2hvdyhkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi52YWx1ZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2FydGljbGUnKVxuICAgIGNvbnNvbGUubG9nKHNlbGYudmFsdWUpXG4gIH1cbn1cbiJdfQ==