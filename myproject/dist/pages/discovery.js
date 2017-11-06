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
      avatarUrl: '../image/add.png',
      nickName: ''
    }, _this.methods = {
      serch: function serch() {
        _wepy2.default.navigateTo({
          url: './serch'
        });
      },
      content: function content(e) {
        var self = this;
        var item = self.text[e.currentTarget.id];
        // console.log(item)
        _wepy2.default.navigateTo({
          url: './content?title=' + item.title + '&content=' + item.article
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
      console.log(self.content);
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/getall',
        method: 'POST',
        // data: {
        //   title: self.title
        // },
        success: function success(res) {
          console.log(res.data);
          self.text = res.data;
          self.setData({
            text: res.data
          });
          console.log(res.data);
        }
      });
    }
  }]);

  return Discovery;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Discovery , 'pages/discovery'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NvdmVyeS5qcyJdLCJuYW1lcyI6WyJEaXNjb3ZlcnkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNlcmNoIiwiaW1ndXJscyIsImF1dG9wbGF5IiwiaW5kaWNhdG9yRG90cyIsImludGVydmFsIiwiZHVyYXRpb24iLCJjb250ZW50IiwiaWNvbiIsInBpYyIsImNvbW1lbnQiLCJsaWtlIiwidmFsdWUiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsIm1ldGhvZHMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZSIsInNlbGYiLCJpdGVtIiwidGV4dCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInRpdGxlIiwiYXJ0aWNsZSIsInNlbGVjdCIsInVzZXJpY29uIiwidXNlcm5hbWUiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyxvQkFERjtBQUVMQyxlQUFTLENBQ1Asb09BRE8sRUFFUCxpUkFGTyxFQUdQLGdQQUhPLENBRko7QUFPTEMsZ0JBQVUsSUFQTDtBQVFMQyxxQkFBZSxJQVJWO0FBU0xDLGdCQUFVLElBVEw7QUFVTEMsZ0JBQVUsSUFWTDtBQVdMQyxlQUFTLElBWEo7QUFZTEMsWUFBTSxrQkFaRDtBQWFMQyxXQUFLLDJPQWJBO0FBY0xDLGVBQVMsdUJBZEo7QUFlTEMsWUFBTSxvQkFmRDtBQWdCTEMsYUFBTyxJQWhCRjtBQWlCTEMsaUJBQVcsa0JBakJOO0FBa0JMQyxnQkFBVTtBQWxCTCxLLFFBb0JQQyxPLEdBQVU7QUFDUmQsV0FEUSxtQkFDQTtBQUNOLHVCQUFLZSxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUlYsYUFOUSxtQkFNQVcsQ0FOQSxFQU1HO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsT0FBT0QsS0FBS0UsSUFBTCxDQUFVSCxFQUFFSSxhQUFGLENBQWdCQyxFQUExQixDQUFYO0FBQ0E7QUFDQSx1QkFBS1AsVUFBTCxDQUFnQjtBQUNkQyxvQ0FBd0JHLEtBQUtJLEtBQTdCLGlCQUE4Q0osS0FBS0s7QUFEckMsU0FBaEI7QUFHRCxPQWJPO0FBY1JDLFlBZFEsa0JBY0RSLENBZEMsRUFjRTtBQUNSLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUtaLE9BQUwsQ0FBYVcsRUFBRUksYUFBRixDQUFnQkMsRUFBN0IsQ0FBWDtBQUNBO0FBQ0EsdUJBQUtQLFVBQUwsQ0FBZ0I7QUFDZEMsc0NBQTBCRyxLQUFLTyxRQUEvQixrQkFBb0RQLEtBQUtRO0FBRDNDLFNBQWhCO0FBR0Q7QUFyQk8sSzs7Ozs7NkJBdUJELENBQ1I7Ozs2QkFDUTtBQUNQLFVBQUlULE9BQU8sSUFBWDtBQUNBQSxXQUFLWixPQUFMO0FBQ0FzQixjQUFRQyxHQUFSLENBQVlYLEtBQUtaLE9BQWpCO0FBQ0EscUJBQUt3QixPQUFMLENBQWE7QUFDWGQsYUFBSyw4QkFETTtBQUVYZSxnQkFBUSxNQUZHO0FBR1g7QUFDQTtBQUNBO0FBQ0FDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJMLGtCQUFRQyxHQUFSLENBQVlJLElBQUlsQyxJQUFoQjtBQUNBbUIsZUFBS0UsSUFBTCxHQUFZYSxJQUFJbEMsSUFBaEI7QUFDQW1CLGVBQUtnQixPQUFMLENBQWE7QUFDWGQsa0JBQU1hLElBQUlsQztBQURDLFdBQWI7QUFHQTZCLGtCQUFRQyxHQUFSLENBQVlJLElBQUlsQyxJQUFoQjtBQUNEO0FBYlUsT0FBYjtBQWVEOzs7O0VBcEVvQyxlQUFLb0MsSTs7a0JBQXZCdkMsUyIsImZpbGUiOiJkaXNjb3ZlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgY29udGVudCBmcm9tICcuLi91bnRpbHMvY29udGVudC5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2NvdmVyeSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc2VyY2g6ICcuLi9pbWFnZS9zZXJjaC5wbmcnLFxuICAgIGltZ3VybHM6IFtcbiAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDg5MzE0MjQ0MjImZGk9N2RkMDkwOTA5Yzg1NGY4ZjIxMDhkNjhmOTJmNjUzYTQmaW1ndHlwZT1qcGcmc3JjPWh0dHAlM0ElMkYlMkZpbWczLmltZ3RuLmJkaW1nLmNvbSUyRml0JTJGdSUzRDI0MTc2MDUxNDUlMkMxMDY5NjI2MDc3JTI2Zm0lM0QyMTQlMjZncCUzRDAuanBnJyxcbiAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDg5MzE1MDYxMDMmZGk9NDFkZDQyZTg1MzIzZTk1Y2Y5NWI2M2Y1ZDQxMTQ5OGImaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGYXR0Mi5jaXR5c2JzLmNvbSUyRmhhbmd6aG91JTJGMjAxNSUyRjA2JTJGMjIlMkYyMCUyRjQ1NjN4MzAzMi0yMDUxMDhfdjJfMTk3MTE0MzQ5Nzc0Njg0NTlfOGIxMjU3ZDY1YmRiNWZhMzkwOTBlYzA3Y2ZmZTg0MzQuanBnJyxcbiAgICAgICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDg5MzE1NzYyMzcmZGk9ZTdjN2I0ZTE3ZjRmMzg2MmM5MTg1MTY0MmY5ZmYxYjQmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGaS5kaW1nLmNjJTJGN2UlMkYxNyUyRjA2JTJGZmQlMkYwYSUyRjNjJTJGYzQlMkZiNCUyRjk0JTJGOWIlMkYyNCUyRjNlJTJGZDElMkYzZSUyRmFiJTJGMGUuanBnJ1xuICAgIF0sXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBpbnRlcnZhbDogMjAwMCxcbiAgICBkdXJhdGlvbjogMTAwMCxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGljb246ICcuLi9pbWFnZS9hZGQucG5nJyxcbiAgICBwaWM6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1MDg5OTQ3NzM5MDYmZGk9MDBiOTJhYzJiMjY0YTRlNmQwNDQzZTkwODNhMmUxYzEmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGZy5oaXBob3Rvcy5iYWlkdS5jb20lMkZpbWFnZSUyRnBpYyUyRml0ZW0lMkYwMGU5MzkwMTIxM2ZiODBlOGRhMjJiMTczZmQxMmYyZWI4Mzg5NGZiLmpwZycsXG4gICAgY29tbWVudDogJy4uL2ltYWdlL2NvbW1lbnQyLnBuZycsXG4gICAgbGlrZTogJy4uL2ltYWdlL2xpa2UyLnBuZycsXG4gICAgdmFsdWU6IG51bGwsXG4gICAgYXZhdGFyVXJsOiAnLi4vaW1hZ2UvYWRkLnBuZycsXG4gICAgbmlja05hbWU6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzZXJjaCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vc2VyY2gnXG4gICAgICB9KVxuICAgIH0sXG4gICAgY29udGVudChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi50ZXh0W2UuY3VycmVudFRhcmdldC5pZF1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2NvbnRlbnQ/dGl0bGU9JHtpdGVtLnRpdGxlfSZjb250ZW50PSR7aXRlbS5hcnRpY2xlfWBcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzZWxlY3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaXRlbSA9IHNlbGYuY29udGVudFtlLmN1cnJlbnRUYXJnZXQuaWRdXG4gICAgICAvLyBjb25zb2xlLmxvZyhjb250ZW50KVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9zZWxlY3Q/dXNlcmljb249JHtpdGVtLnVzZXJpY29ufSZ1c2VybmFtZT0ke2l0ZW0udXNlcm5hbWV9YFxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbnRlbnQgPSBjb250ZW50XG4gICAgY29uc29sZS5sb2coc2VsZi5jb250ZW50KVxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvZ2V0YWxsJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgLy8gZGF0YToge1xuICAgICAgLy8gICB0aXRsZTogc2VsZi50aXRsZVxuICAgICAgLy8gfSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgc2VsZi50ZXh0ID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICB0ZXh0OiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=