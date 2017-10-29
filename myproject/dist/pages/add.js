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
    }, _this.data = {}, _this.methods = {
      formSubmit: function formSubmit(e) {
        console.log('formsubmit 携带内容为： ', e.detail.value);
        if (e.detail.value !== '') {
          try {
            var article = _wepy2.default.getStorageSync('article');
            if (article) {
              article.push({
                value: e.detail.value
              });
              _wepy2.default.setStorageSync('article', article);
            } else {
              var _article = [{
                value: e.detail.value
              }];
              _wepy2.default.setStorageSync('article', _article);
            }
          } catch (e) {}
        } else {}
        _wepy2.default.navigateBack({
          delta: 1
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Attention, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Attention;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Attention , 'pages/add'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5qcyJdLCJuYW1lcyI6WyJBdHRlbnRpb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm1ldGhvZHMiLCJmb3JtU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsImFydGljbGUiLCJnZXRTdG9yYWdlU3luYyIsInB1c2giLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPLEUsUUFFUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0YsRUFBRUcsTUFBRixDQUFTQyxLQUEzQztBQUNBLFlBQUlKLEVBQUVHLE1BQUYsQ0FBU0MsS0FBVCxLQUFtQixFQUF2QixFQUEyQjtBQUN6QixjQUFJO0FBQ0YsZ0JBQUlDLFVBQVUsZUFBS0MsY0FBTCxDQUFvQixTQUFwQixDQUFkO0FBQ0EsZ0JBQUlELE9BQUosRUFBYTtBQUNYQSxzQkFBUUUsSUFBUixDQUFhO0FBQ1hILHVCQUFPSixFQUFFRyxNQUFGLENBQVNDO0FBREwsZUFBYjtBQUdBLDZCQUFLSSxjQUFMLENBQW9CLFNBQXBCLEVBQStCSCxPQUEvQjtBQUNELGFBTEQsTUFLTztBQUNMLGtCQUFJQSxXQUFVLENBQ1o7QUFDRUQsdUJBQU9KLEVBQUVHLE1BQUYsQ0FBU0M7QUFEbEIsZUFEWSxDQUFkO0FBS0EsNkJBQUtJLGNBQUwsQ0FBb0IsU0FBcEIsRUFBK0JILFFBQS9CO0FBQ0Q7QUFDRixXQWZELENBZUUsT0FBT0wsQ0FBUCxFQUFVLENBQ1g7QUFDRixTQWxCRCxNQWtCTyxDQUNOO0FBQ0QsdUJBQUtTLFlBQUwsQ0FBa0I7QUFDaEJDLGlCQUFPO0FBRFMsU0FBbEI7QUFHRDtBQTFCTyxLOzs7Ozs2QkE0QkQsQ0FDUjs7OztFQW5Db0MsZUFBS0MsSTs7a0JBQXZCakIsUyIsImZpbGUiOiJhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRlbnRpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WGmeaWh+eroCdcbiAgfVxuICBkYXRhID0ge1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZm9ybVN1Ym1pdChlKSB7XG4gICAgICBjb25zb2xlLmxvZygnZm9ybXN1Ym1pdCDmkLrluKblhoXlrrnkuLrvvJogJywgZS5kZXRhaWwudmFsdWUpXG4gICAgICBpZiAoZS5kZXRhaWwudmFsdWUgIT09ICcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IGFydGljbGUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdhcnRpY2xlJylcbiAgICAgICAgICBpZiAoYXJ0aWNsZSkge1xuICAgICAgICAgICAgYXJ0aWNsZS5wdXNoKHtcbiAgICAgICAgICAgICAgdmFsdWU6IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnYXJ0aWNsZScsIGFydGljbGUpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhcnRpY2xlID0gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2FydGljbGUnLCBhcnRpY2xlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgfVxuICAgICAgd2VweS5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICBkZWx0YTogMVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICB9XG59XG4iXX0=