'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
        var self;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                self = this;
                _context.next = 3;
                return _wepy2.default.getUserInfo({
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

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow(_x) {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
  }]);

  return Open;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Open , 'pages/open'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW4uanMiXSwibmFtZXMiOlsiT3BlbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYWRkIiwidmFsdWUiLCJpY29uIiwibmlja05hbWUiLCJ0ZXh0IiwibWV0aG9kcyIsImFkZGFydGljbGUiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiYXJ0aWNsZSIsImUiLCJzZWxmIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwicmVxdWVzdCIsIm1ldGhvZCIsInVzZXJuaWNrTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyxrQkFEQTtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLGdCQUFVLEVBSkw7QUFLTEMsWUFBTTtBQUxELEssUUFPUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNLO0FBQ1gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxhQU5RLG1CQU1BQyxDQU5BLEVBTUc7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxPQUFPRCxLQUFLVixLQUFMLENBQVdTLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTNCLENBQVg7QUFDQSx1QkFBS1AsVUFBTCxDQUFnQjtBQUNkQyxvQ0FBd0JJLEtBQUtYLEtBQUwsQ0FBV2MsS0FBbkMsaUJBQW9ESCxLQUFLWCxLQUFMLENBQVdlO0FBRGpELFNBQWhCO0FBR0Q7QUFaTyxLOzs7Ozs2QkFjRCxDQUNSOzs7OzJGQUNZakIsSTs7Ozs7O0FBQ1BZLG9CLEdBQU8sSTs7dUJBQ0wsZUFBS00sV0FBTCxDQUFpQjtBQUNyQkMsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlIseUJBQUtULElBQUwsR0FBWWlCLElBQUlDLFFBQUosQ0FBYUMsU0FBekI7QUFDQVYseUJBQUtSLFFBQUwsR0FBZ0JnQixJQUFJQyxRQUFKLENBQWFqQixRQUE3QjtBQUNBLG1DQUFLbUIsT0FBTCxDQUFhO0FBQ1hkLDJCQUFLLGlDQURNO0FBRVhlLDhCQUFRLE1BRkc7QUFHWHhCLDRCQUFNO0FBQ0p5QixzQ0FBY2IsS0FBS1I7QUFEZix1QkFISztBQU1YZSwrQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTSxnQ0FBUUMsR0FBUixDQUFZUCxJQUFJcEIsSUFBaEI7QUFDQVksNkJBQUtQLElBQUwsR0FBWWUsSUFBSXBCLElBQWhCO0FBQ0FZLDZCQUFLZ0IsT0FBTCxDQUFhO0FBQ1h2QixnQ0FBTWUsSUFBSXBCO0FBREMseUJBQWI7QUFHRDtBQVpVLHFCQUFiO0FBY0Q7QUFsQm9CLGlCQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBN0J3QixlQUFLNkIsSTs7a0JBQWxCaEMsSSIsImZpbGUiOiJvcGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YWs5byA5paH56ugJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYWRkOiAnLi4vaW1hZ2UvYWRkLnBuZycsXG4gICAgdmFsdWU6IFtdLFxuICAgIGljb246ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICB0ZXh0OiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYWRkYXJ0aWNsZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vYWRkJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGFydGljbGUoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaXRlbSA9IHNlbGYudmFsdWVbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9jb250ZW50P3RpdGxlPSR7aXRlbS52YWx1ZS50aXRsZX0mY29udGVudD0ke2l0ZW0udmFsdWUuY29udGVudH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbiAgYXN5bmMgb25TaG93KGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmljb24gPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvbXlhcnRpY2xlJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB1c2Vybmlja05hbWU6IHNlbGYubmlja05hbWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVxuICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgdGV4dDogcmVzLmRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==