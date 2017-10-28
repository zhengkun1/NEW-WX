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

var Self = function (_wepy$page) {
  _inherits(Self, _wepy$page);

  function Self() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Self);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Self.__proto__ || Object.getPrototypeOf(Self)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      secret: '../image/secret.png',
      mysubject: '../image/mysubject.png',
      record: '../image/record.png',
      like: '../image/like.png',
      collect: '../image/collect.png',
      dayandnight: '../image/dayandnight.png',
      myarctile: '../image/myarctile.png',
      icon: '',
      nickName: ''
    }, _this.methods = {
      open: function open() {
        _wepy2.default.navigateTo({
          url: './open'
        });
      },
      attention: function attention() {
        _wepy2.default.navigateTo({
          url: './attention'
        });
      },
      fans: function fans() {
        _wepy2.default.navigateTo({
          url: './fans'
        });
      },
      secret: function secret() {
        _wepy2.default.navigateTo({
          url: './secret'
        });
      },
      collect: function collect() {
        _wepy2.default.navigateTo({
          url: './collect'
        });
      },
      like: function like() {
        _wepy2.default.navigateTo({
          url: './like'
        });
      },
      mine: function mine() {
        _wepy2.default.navigateTo({
          url: './mine'
        });
      },
      myarctile: function myarctile() {
        _wepy2.default.navigateTo({
          url: './myarticle'
        });
      },
      record: function record() {
        _wepy2.default.navigateTo({
          url: './record'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Self, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      try {
        self.icon = _wepy2.default.getStorageSync('avatarUrl');
        self.nickName = _wepy2.default.getStorageSync('nickName');
      } catch (e) {}
    }
  }]);

  return Self;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Self , 'pages/self'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGYuanMiXSwibmFtZXMiOlsiU2VsZiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2VjcmV0IiwibXlzdWJqZWN0IiwicmVjb3JkIiwibGlrZSIsImNvbGxlY3QiLCJkYXlhbmRuaWdodCIsIm15YXJjdGlsZSIsImljb24iLCJuaWNrTmFtZSIsIm1ldGhvZHMiLCJvcGVuIiwibmF2aWdhdGVUbyIsInVybCIsImF0dGVudGlvbiIsImZhbnMiLCJtaW5lIiwic2VsZiIsImdldFN0b3JhZ2VTeW5jIiwiZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLHFCQURIO0FBRUxDLGlCQUFXLHdCQUZOO0FBR0xDLGNBQVEscUJBSEg7QUFJTEMsWUFBTSxtQkFKRDtBQUtMQyxlQUFTLHNCQUxKO0FBTUxDLG1CQUFhLDBCQU5SO0FBT0xDLGlCQUFXLHdCQVBOO0FBUUxDLFlBQU0sRUFSRDtBQVNMQyxnQkFBVTtBQVRMLEssUUFXUEMsTyxHQUFVO0FBQ1JDLFVBRFEsa0JBQ0Q7QUFDTCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLGVBTlEsdUJBTUk7QUFDVix1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQVZPO0FBV1JFLFVBWFEsa0JBV0Q7QUFDTCx1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWZPO0FBZ0JSWixZQWhCUSxvQkFnQkM7QUFDUCx1QkFBS1csVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXBCTztBQXFCUlIsYUFyQlEscUJBcUJFO0FBQ1IsdUJBQUtPLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0F6Qk87QUEwQlJULFVBMUJRLGtCQTBCRDtBQUNMLHVCQUFLUSxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BOUJPO0FBK0JSRyxVQS9CUSxrQkErQkQ7QUFDTCx1QkFBS0osVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQW5DTztBQW9DUk4sZUFwQ1EsdUJBb0NJO0FBQ1YsdUJBQUtLLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0F4Q087QUF5Q1JWLFlBekNRLG9CQXlDQztBQUNQLHVCQUFLUyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBN0NPLEs7Ozs7OzZCQStDRCxDQUNSOzs7NkJBQ1E7QUFDUCxVQUFJSSxPQUFPLElBQVg7QUFDQSxVQUFJO0FBQ0ZBLGFBQUtULElBQUwsR0FBWSxlQUFLVSxjQUFMLENBQW9CLFdBQXBCLENBQVo7QUFDQUQsYUFBS1IsUUFBTCxHQUFnQixlQUFLUyxjQUFMLENBQW9CLFVBQXBCLENBQWhCO0FBQ0QsT0FIRCxDQUdFLE9BQU9DLENBQVAsRUFBVSxDQUNYO0FBQ0Y7Ozs7RUF2RStCLGVBQUtDLEk7O2tCQUFsQnZCLEkiLCJmaWxlIjoic2VsZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGYgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNlY3JldDogJy4uL2ltYWdlL3NlY3JldC5wbmcnLFxuICAgIG15c3ViamVjdDogJy4uL2ltYWdlL215c3ViamVjdC5wbmcnLFxuICAgIHJlY29yZDogJy4uL2ltYWdlL3JlY29yZC5wbmcnLFxuICAgIGxpa2U6ICcuLi9pbWFnZS9saWtlLnBuZycsXG4gICAgY29sbGVjdDogJy4uL2ltYWdlL2NvbGxlY3QucG5nJyxcbiAgICBkYXlhbmRuaWdodDogJy4uL2ltYWdlL2RheWFuZG5pZ2h0LnBuZycsXG4gICAgbXlhcmN0aWxlOiAnLi4vaW1hZ2UvbXlhcmN0aWxlLnBuZycsXG4gICAgaWNvbjogJycsXG4gICAgbmlja05hbWU6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBvcGVuKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9vcGVuJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGF0dGVudGlvbigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vYXR0ZW50aW9uJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGZhbnMoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2ZhbnMnXG4gICAgICB9KVxuICAgIH0sXG4gICAgc2VjcmV0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9zZWNyZXQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgY29sbGVjdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vY29sbGVjdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBsaWtlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9saWtlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIG1pbmUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL21pbmUnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXlhcmN0aWxlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9teWFydGljbGUnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVjb3JkKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9yZWNvcmQnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHRyeSB7XG4gICAgICBzZWxmLmljb24gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdhdmF0YXJVcmwnKVxuICAgICAgc2VsZi5uaWNrTmFtZSA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ25pY2tOYW1lJylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgfVxuICB9XG59XG4iXX0=