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
      text: '',
      comment: 0,
      like: 0
    }, _this.methods = {
      addarticle: function addarticle() {
        _wepy2.default.navigateTo({
          url: './add'
        });
      },
      article: function article(e) {
        var self = this;
        var item = self.text[e.currentTarget.id];
        _wepy2.default.navigateTo({
          url: './content?title=' + item.title + '&content=' + item.article
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW4uanMiXSwibmFtZXMiOlsiT3BlbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiYWRkIiwidmFsdWUiLCJpY29uIiwibmlja05hbWUiLCJ0ZXh0IiwiY29tbWVudCIsImxpa2UiLCJtZXRob2RzIiwiYWRkYXJ0aWNsZSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJhcnRpY2xlIiwiZSIsInNlbGYiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwidGl0bGUiLCJnZXRVc2VySW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ1c2VySW5mbyIsImF2YXRhclVybCIsInJlcXVlc3QiLCJtZXRob2QiLCJ1c2Vybmlja05hbWUiLCJjb25zb2xlIiwibG9nIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssa0JBREE7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLFlBQU0sRUFIRDtBQUlMQyxnQkFBVSxFQUpMO0FBS0xDLFlBQU0sRUFMRDtBQU1MQyxlQUFTLENBTko7QUFPTEMsWUFBTTtBQVBELEssUUFTUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNLO0FBQ1gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxhQU5RLG1CQU1BQyxDQU5BLEVBTUc7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxPQUFPRCxLQUFLVCxJQUFMLENBQVVRLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTFCLENBQVg7QUFDQSx1QkFBS1AsVUFBTCxDQUFnQjtBQUNkQyxvQ0FBd0JJLEtBQUtHLEtBQTdCLGlCQUE4Q0gsS0FBS0g7QUFEckMsU0FBaEI7QUFHRDtBQVpPLEs7Ozs7OzZCQWNELENBQ1I7Ozs7MkZBQ1laLEk7Ozs7OztBQUNQYyxvQixHQUFPLEk7O3VCQUNMLGVBQUtLLFdBQUwsQ0FBaUI7QUFDckJDLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJQLHlCQUFLWCxJQUFMLEdBQVlrQixJQUFJQyxRQUFKLENBQWFDLFNBQXpCO0FBQ0FULHlCQUFLVixRQUFMLEdBQWdCaUIsSUFBSUMsUUFBSixDQUFhbEIsUUFBN0I7QUFDQSxtQ0FBS29CLE9BQUwsQ0FBYTtBQUNYYiwyQkFBSyxpQ0FETTtBQUVYYyw4QkFBUSxNQUZHO0FBR1h6Qiw0QkFBTTtBQUNKMEIsc0NBQWNaLEtBQUtWO0FBRGYsdUJBSEs7QUFNWGdCLCtCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJNLGdDQUFRQyxHQUFSLENBQVlQLElBQUlyQixJQUFoQjtBQUNBYyw2QkFBS1QsSUFBTCxHQUFZZ0IsSUFBSXJCLElBQWhCO0FBQ0FjLDZCQUFLZSxPQUFMLENBQWE7QUFDWHhCLGdDQUFNZ0IsSUFBSXJCO0FBREMseUJBQWI7QUFHRDtBQVpVLHFCQUFiO0FBY0Q7QUFsQm9CLGlCQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBL0J3QixlQUFLOEIsSTs7a0JBQWxCakMsSSIsImZpbGUiOiJvcGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5YWs5byA5paH56ugJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYWRkOiAnLi4vaW1hZ2UvYWRkLnBuZycsXG4gICAgdmFsdWU6IFtdLFxuICAgIGljb246ICcnLFxuICAgIG5pY2tOYW1lOiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICBjb21tZW50OiAwLFxuICAgIGxpa2U6IDBcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGFkZGFydGljbGUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2FkZCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhcnRpY2xlKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGl0ZW0gPSBzZWxmLnRleHRbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9jb250ZW50P3RpdGxlPSR7aXRlbS50aXRsZX0mY29udGVudD0ke2l0ZW0uYXJ0aWNsZX1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbiAgYXN5bmMgb25TaG93KGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBzZWxmLmljb24gPSByZXMudXNlckluZm8uYXZhdGFyVXJsXG4gICAgICAgIHNlbGYubmlja05hbWUgPSByZXMudXNlckluZm8ubmlja05hbWVcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvbXlhcnRpY2xlJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB1c2Vybmlja05hbWU6IHNlbGYubmlja05hbWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVxuICAgICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgICAgdGV4dDogcmVzLmRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==