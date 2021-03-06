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

var Select = function (_wepy$page) {
  _inherits(Select, _wepy$page);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      username: '',
      usericon: '',
      title: '你好',
      read: '1111',
      comment: '139',
      pic: '../image/comment.png'

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.usericon = data.usericon;
      self.username = data.username;
    }
  }]);

  return Select;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Select , 'pages/select'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3QiLCJjb25maWciLCJkYXRhIiwidXNlcm5hbWUiLCJ1c2VyaWNvbiIsInRpdGxlIiwicmVhZCIsImNvbW1lbnQiLCJwaWMiLCJzZWxmIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGFBQU8sSUFIRjtBQUlMQyxZQUFNLE1BSkQ7QUFLTEMsZUFBUyxLQUxKO0FBTUxDLFdBQUs7O0FBTkEsSzs7Ozs7MkJBU0FOLEksRUFBTTtBQUNYLFVBQUlPLE9BQU8sSUFBWDtBQUNBQSxXQUFLTCxRQUFMLEdBQWdCRixLQUFLRSxRQUFyQjtBQUNBSyxXQUFLTixRQUFMLEdBQWdCRCxLQUFLQyxRQUFyQjtBQUNEOzs7O0VBaEJpQyxlQUFLTyxJOztrQkFBcEJWLE0iLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICB9XG4gIGRhdGEgPSB7XG4gICAgdXNlcm5hbWU6ICcnLFxuICAgIHVzZXJpY29uOiAnJyxcbiAgICB0aXRsZTogJ+S9oOWlvScsXG4gICAgcmVhZDogJzExMTEnLFxuICAgIGNvbW1lbnQ6ICcxMzknLFxuICAgIHBpYzogJy4uL2ltYWdlL2NvbW1lbnQucG5nJ1xuXG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnVzZXJpY29uID0gZGF0YS51c2VyaWNvblxuICAgIHNlbGYudXNlcm5hbWUgPSBkYXRhLnVzZXJuYW1lXG4gIH1cbn1cbiJdfQ==