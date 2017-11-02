'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _content = require('./../untils/content.js');

var _content2 = _interopRequireDefault(_content);

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
      serch: '../image/serch.png',
      imgurls: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508931424422&di=7dd090909c854f8f2108d68f92f653a4&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D2417605145%2C1069626077%26fm%3D214%26gp%3D0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508931506103&di=41dd42e85323e95cf95b63f5d411498b&imgtype=0&src=http%3A%2F%2Fatt2.citysbs.com%2Fhangzhou%2F2015%2F06%2F22%2F20%2F4563x3032-205108_v2_19711434977468459_8b1257d65bdb5fa39090ec07cffe8434.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508931576237&di=e7c7b4e17f4f3862c91851642f9ff1b4&imgtype=0&src=http%3A%2F%2Fi.dimg.cc%2F7e%2F17%2F06%2Ffd%2F0a%2F3c%2Fc4%2Fb4%2F94%2F9b%2F24%2F3e%2Fd1%2F3e%2Fab%2F0e.jpg'],
      autoplay: true,
      indicatorDots: true,
      interval: 2000,
      duration: 1000,
      content: null,
      icon: '../image/add.png',
      pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508994773906&di=00b92ac2b264a4e6d0443e9083a2e1c1&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F00e93901213fb80e8da22b173fd12f2eb83894fb.jpg',
      comment: '../image/comment2.png',
      like: '../image/like2.png',
      value: null,
      avatarUrl: '',
      nickName: ''
    }, _this.methods = {
      serch: function serch() {
        _wepy2.default.navigateTo({
          url: './serch'
        });
      },
      content: function content(e) {
        var self = this;
        var item = self.value[e.currentTarget.id];
        // console.log(item)
        _wepy2.default.navigateTo({
          url: './content?title=' + item.value.title + '&content=' + item.value.content
        });
      },
      select: function select(e) {
        var self = this;
        var item = self.content[e.currentTarget.id];
        // console.log(content)
        _wepy2.default.navigateTo({
          url: './select?usericon=' + item.usericon + '&username=' + item.username
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Discovery, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      self.content = _content2.default;
      // console.log(self.content)
    }
  }]);

  return Discovery;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Discovery , 'pages/discovery'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyeS5qcyJdLCJuYW1lcyI6WyJEaXNjb3ZlcnkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNlcmNoIiwiaW1ndXJscyIsImF1dG9wbGF5IiwiaW5kaWNhdG9yRG90cyIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb250ZW50IiwiaWNvbiIsInBpYyIsImNvbW1lbnQiLCJsaWtlIiwidmFsdWUiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIm1ldGhvZHMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZSIsInNlbGYiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwidGl0bGUiLCJzZWxlY3QiLCJ1c2VyaWNvbiIsInVzZXJuYW1lIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxvQkFERjtBQUVMQyxlQUFTLENBQ1Asb09BRE8sRUFFUCxpUkFGTyxFQUdQLGdQQUhPLENBRko7QUFPTEMsZ0JBQVUsSUFQTDtBQVFMQyxxQkFBZSxJQVJWO0FBU0xDLGdCQUFVLElBVEw7QUFVTEMsZ0JBQVUsSUFWTDtBQVdMQyxlQUFTLElBWEo7QUFZTEMsWUFBTSxrQkFaRDtBQWFMQyxXQUFLLDJPQWJBO0FBY0xDLGVBQVMsdUJBZEo7QUFlTEMsWUFBTSxvQkFmRDtBQWdCTEMsYUFBTyxJQWhCRjtBQWlCTEMsaUJBQVcsRUFqQk47QUFrQkxDLGdCQUFVO0FBbEJMLEssUUFvQlBDLE8sR0FBVTtBQUNSZCxXQURRLG1CQUNBO0FBQ04sdUJBQUtlLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SVixhQU5RLG1CQU1BVyxDQU5BLEVBTUc7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxPQUFPRCxLQUFLUCxLQUFMLENBQVdNLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTNCLENBQVg7QUFDQTtBQUNBLHVCQUFLTixVQUFMLENBQWdCO0FBQ2RDLG9DQUF3QkcsS0FBS1IsS0FBTCxDQUFXVyxLQUFuQyxpQkFBb0RILEtBQUtSLEtBQUwsQ0FBV0w7QUFEakQsU0FBaEI7QUFHRCxPQWJPO0FBY1JpQixZQWRRLGtCQWNETixDQWRDLEVBY0U7QUFDUixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxPQUFPRCxLQUFLWixPQUFMLENBQWFXLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTdCLENBQVg7QUFDQTtBQUNBLHVCQUFLTixVQUFMLENBQWdCO0FBQ2RDLHNDQUEwQkcsS0FBS0ssUUFBL0Isa0JBQW9ETCxLQUFLTTtBQUQzQyxTQUFoQjtBQUdEO0FBckJPLEs7Ozs7OzZCQXVCRCxDQUNSOzs7NkJBQ1E7QUFDUCxVQUFJUCxPQUFPLElBQVg7QUFDQUEsV0FBS1osT0FBTDtBQUNBO0FBQ0Q7Ozs7RUFyRG9DLGVBQUtvQixJOztrQkFBdkI5QixTIiwiZmlsZSI6ImRpc2NvdmVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBjb250ZW50IGZyb20gJy4uL3VudGlscy9jb250ZW50LmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXJ5IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzZXJjaDogJy4uL2ltYWdlL3NlcmNoLnBuZycsXG4gICAgaW1ndXJsczogW1xuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwODkzMTQyNDQyMiZkaT03ZGQwOTA5MDljODU0ZjhmMjEwOGQ2OGY5MmY2NTNhNCZpbWd0eXBlPWpwZyZzcmM9aHR0cCUzQSUyRiUyRmltZzMuaW1ndG4uYmRpbWcuY29tJTJGaXQlMkZ1JTNEMjQxNzYwNTE0NSUyQzEwNjk2MjYwNzclMjZmbSUzRDIxNCUyNmdwJTNEMC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwODkzMTUwNjEwMyZkaT00MWRkNDJlODUzMjNlOTVjZjk1YjYzZjVkNDExNDk4YiZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZhdHQyLmNpdHlzYnMuY29tJTJGaGFuZ3pob3UlMkYyMDE1JTJGMDYlMkYyMiUyRjIwJTJGNDU2M3gzMDMyLTIwNTEwOF92Ml8xOTcxMTQzNDk3NzQ2ODQ1OV84YjEyNTdkNjViZGI1ZmEzOTA5MGVjMDdjZmZlODQzNC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwODkzMTU3NjIzNyZkaT1lN2M3YjRlMTdmNGYzODYyYzkxODUxNjQyZjlmZjFiNCZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZpLmRpbWcuY2MlMkY3ZSUyRjE3JTJGMDYlMkZmZCUyRjBhJTJGM2MlMkZjNCUyRmI0JTJGOTQlMkY5YiUyRjI0JTJGM2UlMkZkMSUyRjNlJTJGYWIlMkYwZS5qcGcnXG4gICAgXSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGludGVydmFsOiAyMDAwLFxuICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgaWNvbjogJy4uL2ltYWdlL2FkZC5wbmcnLFxuICAgIHBpYzogJ2h0dHBzOi8vdGltZ3NhLmJhaWR1LmNvbS90aW1nP2ltYWdlJnF1YWxpdHk9ODAmc2l6ZT1iOTk5OV8xMDAwMCZzZWM9MTUwODk5NDc3MzkwNiZkaT0wMGI5MmFjMmIyNjRhNGU2ZDA0NDNlOTA4M2EyZTFjMSZpbWd0eXBlPTAmc3JjPWh0dHAlM0ElMkYlMkZnLmhpcGhvdG9zLmJhaWR1LmNvbSUyRmltYWdlJTJGcGljJTJGaXRlbSUyRjAwZTkzOTAxMjEzZmI4MGU4ZGEyMmIxNzNmZDEyZjJlYjgzODk0ZmIuanBnJyxcbiAgICBjb21tZW50OiAnLi4vaW1hZ2UvY29tbWVudDIucG5nJyxcbiAgICBsaWtlOiAnLi4vaW1hZ2UvbGlrZTIucG5nJyxcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBhdmF0YXJVcmw6ICcnLFxuICAgIG5pY2tOYW1lOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc2VyY2goKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3NlcmNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGNvbnRlbnQoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaXRlbSA9IHNlbGYudmFsdWVbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgLy8gY29uc29sZS5sb2coaXRlbSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vY29udGVudD90aXRsZT0ke2l0ZW0udmFsdWUudGl0bGV9JmNvbnRlbnQ9JHtpdGVtLnZhbHVlLmNvbnRlbnR9YFxuICAgICAgfSlcbiAgICB9LFxuICAgIHNlbGVjdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi5jb250ZW50W2UuY3VycmVudFRhcmdldC5pZF1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRlbnQpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL3NlbGVjdD91c2VyaWNvbj0ke2l0ZW0udXNlcmljb259JnVzZXJuYW1lPSR7aXRlbS51c2VybmFtZX1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuY29udGVudCA9IGNvbnRlbnRcbiAgICAvLyBjb25zb2xlLmxvZyhzZWxmLmNvbnRlbnQpXG4gIH1cbn1cbiJdfQ==