exports.ids = [1];
exports.modules = {

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _InfoBox = __webpack_require__(465);
	
	Object.defineProperty(exports, "default", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InfoBox).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports["default"];

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(60);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _reactRedux = __webpack_require__(247);
	
	var _SocialIcons = __webpack_require__(466);
	
	var _SocialIcons2 = _interopRequireDefault(_SocialIcons);
	
	var _InfoMenu = __webpack_require__(469);
	
	var _InfoMenu2 = _interopRequireDefault(_InfoMenu);
	
	var _InfoHeader = __webpack_require__(470);
	
	var _InfoHeader2 = _interopRequireDefault(_InfoHeader);
	
	var _InfoText = __webpack_require__(472);
	
	var _InfoText2 = _interopRequireDefault(_InfoText);
	
	var _StackIcons = __webpack_require__(473);
	
	var _StackIcons2 = _interopRequireDefault(_StackIcons);
	
	var _shared = __webpack_require__(362);
	
	var _store = __webpack_require__(330);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(485);
	
	var styles = function styles(theme) {
	  var _infoBox;
	
	  return {
	    infoBox: (_infoBox = {
	      display: "none"
	    }, _infoBox["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      display: "block",
	      color: theme.info.colors.text,
	      background: theme.info.colors.background,
	      position: "absolute",
	      left: 0,
	      top: 0,
	      width: theme.info.sizes.width + "px",
	      height: "100%",
	      padding: "20px 40px",
	      "&::after": {
	        content: "\"\"",
	        position: "absolute",
	        right: 0,
	        top: "20px",
	        bottom: "20px",
	        width: "1px",
	        borderRight: "1px solid " + theme.base.colors.lines
	      }
	    }, _infoBox),
	    wrapper: {
	      position: "absolute",
	      top: theme.info.sizes.headerHeight + "px",
	      bottom: 0,
	      left: 0,
	      width: "100%",
	      padding: "0 40px 0",
	      willChange: "opacity, bottom",
	      transition: "bottom .5s 0s",
	      opacity: 1,
	      transitionTimingFunction: "ease",
	      ".is-aside.closed &": {
	        bottom: theme.navigator.sizes.closedHeight + "px"
	      },
	      ".moving-featured &": {
	        bottom: 0
	      }
	    }
	  };
	};
	
	var InfoBox = function (_React$Component) {
	  _inherits(InfoBox, _React$Component);
	
	  function InfoBox() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, InfoBox);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.avatarOnClick = _shared.featureNavigator.bind(_this), _this.menulinkOnClick = _shared.moveNavigatorAside.bind(_this), _this.expandOnClick = function (e) {
	      _this.props.setNavigatorShape("closed");
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  InfoBox.prototype.render = function render() {
	    var _props = this.props,
	        classes = _props.classes,
	        parts = _props.parts,
	        pages = _props.pages,
	        navigatorPosition = _props.navigatorPosition,
	        navigatorShape = _props.navigatorShape;
	
	    var info = parts.find(function (el) {
	      return el.node.frontmatter.title === "info";
	    });
	
	    return _react2.default.createElement(
	      "aside",
	      {
	        className: classes.infoBox + " " + (navigatorPosition ? navigatorPosition : "") + " \n        " + (navigatorShape ? navigatorShape : "")
	      },
	      info && _react2.default.createElement(_InfoHeader2.default, {
	        info: info,
	        avatarOnClick: this.avatarOnClick,
	        expandOnClick: this.expandOnClick
	      }),
	      _react2.default.createElement(
	        "div",
	        { className: classes.wrapper },
	        info && _react2.default.createElement(_InfoText2.default, { info: info }),
	        _react2.default.createElement(_SocialIcons2.default, null),
	        pages && _react2.default.createElement(_InfoMenu2.default, { pages: pages, linkOnClick: this.menulinkOnClick }),
	        _react2.default.createElement(_StackIcons2.default, null)
	      )
	    );
	  };
	
	  return InfoBox;
	}(_react2.default.Component);
	
	InfoBox.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  parts: _propTypes2.default.array.isRequired,
	  pages: _propTypes2.default.array.isRequired,
	  navigatorPosition: _propTypes2.default.string.isRequired,
	  navigatorShape: _propTypes2.default.string.isRequired,
	  isWideScreen: _propTypes2.default.bool.isRequired,
	  setNavigatorShape: _propTypes2.default.func.isRequired
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    navigatorPosition: state.navigatorPosition,
	    navigatorShape: state.navigatorShape,
	    isWideScreen: state.isWideScreen
	  };
	};
	
	var mapDispatchToProps = {
	  setNavigatorPosition: _store.setNavigatorPosition,
	  setNavigatorShape: _store.setNavigatorShape
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactJss2.default)(styles)(InfoBox));
	module.exports = exports["default"];

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(60);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _config = __webpack_require__(457);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _github = __webpack_require__(467);
	
	var _github2 = _interopRequireDefault(_github);
	
	var _wechat = __webpack_require__(468);
	
	var _wechat2 = _interopRequireDefault(_wechat);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    social: {
	      display: "flex",
	      justifyContent: "center",
	      flexWrap: "wrap"
	    },
	    link: {
	      display: "inline-block",
	      padding: "5px",
	      "&:hover": {
	        "& svg": {
	          fill: theme.info.colors.socialIconsHover
	        }
	      }
	    },
	    svg: {
	      width: "40px",
	      height: "40px",
	      fill: theme.info.colors.socialIcons,
	      transition: "all .5s"
	    }
	  };
	};
	
	var Socialcons = function Socialcons(props) {
	  var classes = props.classes;
	
	  var items = _config2.default.authorSocialLinks;
	  var icons = {
	    github: _github2.default,
	    wechat: _wechat2.default
	  };
	
	  //TODO 微信的弹出二维码 images/jpg/wechat-personal.jpg
	  return _react2.default.createElement(
	    "div",
	    { className: classes.social },
	    items.map(function (item) {
	      var Icon = icons[item.name];
	      return _react2.default.createElement(
	        "a",
	        {
	          href: item.url,
	          key: item.name,
	          className: classes.link,
	          target: "_blank",
	          rel: "noopener noreferrer",
	          title: item.name
	        },
	        _react2.default.createElement(Icon, { className: classes.svg })
	      );
	    })
	  );
	};
	
	Socialcons.propTypes = {
	  classes: _propTypes2.default.object.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(Socialcons);
	module.exports = exports["default"];

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function GithubIcon (props) {
	    return React.createElement("svg",props,React.createElement("path",{"d":"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"}));
	}
	
	GithubIcon.displayName = "GithubIcon";
	
	GithubIcon.defaultProps = {"viewBox":"0 0 512 512"};
	
	module.exports = GithubIcon;
	
	GithubIcon.default = GithubIcon;


/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function WechatIcon (props) {
	    return React.createElement("svg",props,[React.createElement("defs",{"key":0},React.createElement("style",{"type":"text/css"})),React.createElement("path",{"d":"M302.848897 308.186411c-18.67874 0-38.84109 12.091062-38.84109 31.622698 0 19.609452 20.16235 31.745564 38.84109 31.745565 18.946998 0 31.672869-12.758635 31.672869-31.741469-0.01843-19.213208-12.454541-31.626794-31.672869-31.626794zM495.296335 371.555698c19.005359 0 31.777305-12.758635 31.777305-31.745565 0-19.210136-12.471947-31.622698-31.777305-31.622698-18.62857 0-38.741773 12.091062-38.741773 31.618603 0.022525 19.612523 20.126514 31.74966 38.741773 31.74966z","fill":"#30A338","pId":"1233","key":1}),React.createElement("path",{"d":"M903.969923 594.310141c0-107.183387-97.655111-198.754571-222.319292-208.468171l-0.690099-0.054266-2.091797-7.80303-0.031741 0.01843c-25.385189-113.782328-148.247332-199.386309-286.672532-199.386309-157.09063 0-284.894044 109.365287-284.894044 243.793239 0 71.907466 36.881373 137.009167 106.666325 188.268962l1.542995 1.134465-25.185531 75.718367c-1.256307 3.825236-0.113651 7.994497 2.894524 10.612572a10.001312 10.001312 0 0 0 6.505767 2.418417 10.14056 10.14056 0 0 0 4.437519-1.043339l93.113156-46.600093 12.572287 2.549474c28.175276 5.789048 52.502792 10.784584 82.347002 10.784585 8.706097 0 17.635401-0.380885 26.55037-1.14368l11.969219-1.650503c34.350329 83.986242 126.465196 140.329627 229.869423 140.329627 26.496104 0 53.015758-6.089046 80.110836-12.871263l0.998288-0.249828 72.052858 39.385797a9.917353 9.917353 0 0 0 4.749804 1.229686 9.870255 9.870255 0 0 0 6.210888-2.191114c3.144352-2.549474 4.419089-6.678804 3.243669-10.525541l-18.683859-62.139601 1.401699-1.111939c60.189099-47.555378 93.332267-104.736302 93.332266-161.004944z m-590.440878 41.700802l-15.765786-3.185307a9.499608 9.499608 0 0 0-1.964836-0.208873 9.514966 9.514966 0 0 0-4.351513 1.061769l-74.833731 37.461916 19.977027-60.020157c1.392484-4.187691-0.104436-8.706097-3.71568-11.243285-70.210888-48.936599-105.808309-108.643448-105.808309-177.465948 0-123.516406 118.925304-224.00256 265.099268-224.00256 128.697266 0 243.552626 78.858624 267.172637 183.423937l0.712624 3.170973-3.248788 0.040955c-132.39042 1.733438-240.095989 95.609388-240.095989 209.266802 0 15.566129 2.277121 31.782424 6.774025 48.20145l0.576448 1.390436-6.792456 1.472347h-0.235493a290.576607 290.576607 0 0 1-24.835363 1.065865c-28.167085 0-51.574128-4.836834-78.664085-10.43032z m474.805318 119.514038l13.701633 45.570064-54.294591-29.703937a9.814965 9.814965 0 0 0-4.736494-1.220471c-0.834467 0-1.623882 0.099317-2.413297 0.317404-26.19713 6.619419-53.292207 13.46614-80.010495 13.46614-123.548147 0-224.056826-85.087942-224.056826-189.670661 0-104.569408 100.508679-189.648135 224.056826-189.648135 121.202425 0 223.599149 86.848001 223.599149 189.648135 0 52.284704-32.788904 105.735614-92.32374 150.489641a9.94807 9.94807 0 0 0-3.522165 10.75182z","fill":"#30A338","pId":"1234","key":2}),React.createElement("path",{"d":"M735.886861 507.54917c-12.227239 0-24.68178 12.594813-24.68178 24.958229 0 12.313245 12.454541 24.858912 24.68178 24.858912 19.686243 0 31.872526-12.903003 31.872526-24.858912 0-12.005055-12.186283-24.958229-31.872526-24.958229zM584.716336 507.54917c-12.327579 0-24.885533 12.594813-24.885533 24.958229 0 12.313245 12.558977 24.858912 24.885533 24.858912 19.581807 0 31.700514-12.903003 31.700513-24.858912 0-12.005055-12.118707-24.958229-31.700513-24.958229z","fill":"#30A338","pId":"1235","key":3})]);
	}
	
	WechatIcon.displayName = "WechatIcon";
	
	WechatIcon.defaultProps = {"t":"1537355868391","className":"icon","style":{},"viewBox":"0 0 1024 1024","version":"1.1","pId":"1232","width":"200","height":"200"};
	
	module.exports = WechatIcon;
	
	WechatIcon.default = WechatIcon;


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(60);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _gatsbyLink = __webpack_require__(74);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    infoMenu: {
	      display: "flex",
	      flexDirection: "column",
	      alignItems: "center",
	      listStyle: "none",
	      margin: 0,
	      width: "100%"
	    },
	    link: {
	      padding: ".5em",
	      fontWeight: 300,
	      textTransform: "lowercase",
	      color: theme.info.colors.menuLink,
	      "&:hover": {
	        color: theme.info.colors.menuLinkHover
	      }
	    }
	  };
	};
	
	var InfoMenu = function InfoMenu(props) {
	  var classes = props.classes,
	      pages = props.pages,
	      linkOnClick = props.linkOnClick;
	
	
	  return _react2.default.createElement(
	    "nav",
	    { className: classes.infoMenu },
	    pages.map(function (page, i) {
	      var _page$node = page.node,
	          fields = _page$node.fields,
	          frontmatter = _page$node.frontmatter;
	
	      return _react2.default.createElement(
	        _gatsbyLink2.default,
	        {
	          key: fields.slug,
	          to: fields.slug,
	          onClick: linkOnClick,
	          className: classes.link,
	          "data-shape": "closed"
	        },
	        frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title
	      );
	    })
	  );
	};
	
	InfoMenu.propTypes = {
	  pages: _propTypes2.default.array.isRequired,
	  classes: _propTypes2.default.object.isRequired,
	  linkOnClick: _propTypes2.default.func.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoMenu);
	module.exports = exports["default"];

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(60);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _gatsbyLink = __webpack_require__(74);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _IconButton = __webpack_require__(365);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _ExpandMore = __webpack_require__(471);
	
	var _ExpandMore2 = _interopRequireDefault(_ExpandMore);
	
	var _avatar2 = __webpack_require__(458);
	
	var _avatar3 = _interopRequireDefault(_avatar2);
	
	var _config = __webpack_require__(457);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  var _avatarLink, _avatar, _title;
	
	  return {
	    header: {
	      lineHeight: 1,
	      position: "relative"
	    },
	    avatarLink: (_avatarLink = {
	      willChange: "left, top",
	      float: "left",
	      display: "block",
	      position: "relative",
	      margin: "0 12px 0 0"
	    }, _avatarLink["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      margin: "0 20px 0 0"
	    }, _avatarLink["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      position: "absolute",
	      top: "10px",
	      left: "50%",
	      marginLeft: "-30px",
	      transition: "all .5s",
	      transitionTimingFunction: "ease",
	      ".navigator-in-transition-from.navigator-is-opened &": {
	        left: "50%"
	      },
	      ".is-aside.open &": {
	        left: "8%",
	        top: "0"
	      }
	    }, _avatarLink),
	    avatar: (_avatar = {
	      width: "36px",
	      height: "36px",
	      borderRadius: "65% 75%",
	      border: "1px solid #ddd",
	      transition: "all .3s",
	      transitionTimingFunction: "ease",
	      display: "inline-block",
	      overflow: "hidden",
	      "& img": {
	        maxWidth: "100%"
	      }
	    }, _avatar["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      width: "44px",
	      height: "44px"
	    }, _avatar["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      width: "60px",
	      height: "60px"
	    }, _avatar["@media (hover: hover)"] = {
	      "&:hover": {
	        borderRadius: "75% 65%"
	      }
	    }, _avatar),
	    title: (_title = {
	      willChange: "transform, left, top",
	      fontSize: theme.info.fonts.boxTitleSize + "em",
	      margin: 0,
	      float: "left",
	      transitionTimingFunction: "ease",
	      "& small": {
	        display: "block",
	        fontSize: ".6em",
	        marginTop: ".3em"
	      }
	    }, _title["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      fontSize: theme.info.fonts.boxTitleSizeM + "em"
	    }, _title["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      fontSize: theme.info.fonts.boxTitleSizeL + "em",
	      position: "absolute",
	      top: "85px",
	      textAlign: "center",
	      left: "50%",
	      transform: "translate(-50%)",
	      transition: "all .5s",
	      ".is-aside.open &": {
	        left: "60%",
	        top: 1.9 - theme.info.fonts.boxTitleSizeL + "em",
	        textAlign: "left"
	      }
	    }, _title),
	    expand: {
	      position: "absolute",
	      top: "30px",
	      right: "-25px",
	      display: "none",
	      color: theme.info.colors.text,
	      ".is-aside.open &": {
	        display: "block"
	      }
	    }
	  };
	};
	
	var InfoHeader = function InfoHeader(props) {
	  var classes = props.classes,
	      avatarOnClick = props.avatarOnClick,
	      expandOnClick = props.expandOnClick;
	
	
	  return _react2.default.createElement(
	    "header",
	    { className: classes.header },
	    _react2.default.createElement(
	      _gatsbyLink2.default,
	      { className: classes.avatarLink, onClick: avatarOnClick, to: "/", title: "back to Home page" },
	      _react2.default.createElement(
	        "div",
	        { className: classes.avatar },
	        _react2.default.createElement("img", { src: _avatar3.default, alt: "" })
	      )
	    ),
	    _react2.default.createElement(
	      "h1",
	      { className: classes.title },
	      _config2.default.infoTitle.replace(/ /g, "\xA0"),
	      _react2.default.createElement(
	        "small",
	        null,
	        _config2.default.infoTitleNote
	      )
	    ),
	    _react2.default.createElement(
	      _IconButton2.default,
	      {
	        "aria-label": "Expand the box",
	        className: classes.expand,
	        onClick: expandOnClick,
	        title: "Expand the box"
	      },
	      _react2.default.createElement(_ExpandMore2.default, null)
	    )
	  );
	};
	
	InfoHeader.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  avatarOnClick: _propTypes2.default.func.isRequired,
	  expandOnClick: _propTypes2.default.func.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoHeader);
	module.exports = exports["default"];

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(389);
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	
	var _react = _interopRequireDefault(__webpack_require__(1));
	
	var _createSvgIcon = _interopRequireDefault(__webpack_require__(390));
	
	var _default = (0, _createSvgIcon.default)(_react.default.createElement("g", null, _react.default.createElement("path", {
	  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
	})), 'ExpandMore');
	
	exports.default = _default;

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(60);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    text: {
	      display: "block",
	      fontWeight: 300,
	      lineHeight: 1.5,
	      fontSize: ".95em",
	      textAlign: "left",
	      marginBottom: ".8em",
	      "& p:first-child": {
	        marginTop: 0
	      },
	      "& p:last-child": {
	        marginBottom: 0
	      }
	    }
	  };
	};
	
	var InfoText = function InfoText(props) {
	  var classes = props.classes,
	      info = props.info;
	
	  var text = info.node.html;
	
	  return _react2.default.createElement("div", { className: classes.text, dangerouslySetInnerHTML: { __html: text } });
	};
	
	InfoText.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  info: _propTypes2.default.object.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoText);
	module.exports = exports["default"];

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(60);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _algolia = __webpack_require__(474);
	
	var _algolia2 = _interopRequireDefault(_algolia);
	
	var _react3 = __webpack_require__(475);
	
	var _react4 = _interopRequireDefault(_react3);
	
	var _graphql = __webpack_require__(476);
	
	var _graphql2 = _interopRequireDefault(_graphql);
	
	var _jss = __webpack_require__(477);
	
	var _jss2 = _interopRequireDefault(_jss);
	
	var _redux = __webpack_require__(478);
	
	var _redux2 = _interopRequireDefault(_redux);
	
	var _gatsby = __webpack_require__(479);
	
	var _gatsby2 = _interopRequireDefault(_gatsby);
	
	var _webpack = __webpack_require__(480);
	
	var _webpack2 = _interopRequireDefault(_webpack);
	
	var _Node = __webpack_require__(481);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _typescript = __webpack_require__(482);
	
	var _typescript2 = _interopRequireDefault(_typescript);
	
	var _babel = __webpack_require__(483);
	
	var _babel2 = _interopRequireDefault(_babel);
	
	var _googleAnalytics = __webpack_require__(484);
	
	var _googleAnalytics2 = _interopRequireDefault(_googleAnalytics);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  var _stack;
	
	  return {
	    stack: (_stack = {
	      display: "none"
	    }, _stack["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      display: "block",
	      position: "absolute",
	      left: 0,
	      bottom: 0,
	      width: "100%",
	      padding: "1em 2em"
	    }, _stack),
	    box: {
	      display: "flex",
	      justifyContent: "center",
	      flexWrap: "wrap"
	    },
	    link: {
	      display: "inline-block",
	      padding: "8px"
	    },
	    svg: {
	      width: "22px",
	      height: "22px"
	    },
	    header: {
	      textAlign: "center",
	      fontSize: ".85em",
	      letterSpacing: ".3em",
	      width: "100%",
	      margin: "0 0 .8em 0",
	      fontWeight: 300
	    }
	  };
	};
	
	var StackIcons = function StackIcons(props) {
	  var classes = props.classes;
	
	
	  var items = [{ name: "node.Js", url: "https://nodejs.org/en/", comp: _Node2.default }, { name: "typescript", url: "https://www.typescriptlang.org/", comp: _typescript2.default }, { name: "python", url: "https://www.python.org/", comp: _gatsby2.default }, { name: "googleAnalytics", url: "https://analytics.google.com/", comp: _googleAnalytics2.default }, { name: "gatsby", url: "https://www.gatsbyjs.org/", comp: _gatsby2.default }, { name: "react", url: "https://reactjs.org/", comp: _react4.default }, { name: "graphql", url: "http://graphql.org/", comp: _graphql2.default }, { name: "jss", url: "http://cssinjs.org/", comp: _jss2.default }, { name: "redux", url: "https://redux.js.org/", comp: _redux2.default }, { name: "algolia", url: "https://www.algolia.com/", comp: _algolia2.default }, { name: "webpack", url: "https://webpack.js.org/", comp: _webpack2.default }, { name: "babel", url: "https://babeljs.io/", comp: _babel2.default }];
	
	  return _react2.default.createElement(
	    "div",
	    { className: classes.stack },
	    _react2.default.createElement(
	      "h5",
	      { className: classes.header },
	      "love:"
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: classes.box },
	      items.map(function (item) {
	        var Icon = item.comp;
	        return _react2.default.createElement(
	          "a",
	          {
	            href: item.url,
	            key: item.name,
	            className: classes.link,
	            target: "_blank",
	            rel: "noopener noreferrer",
	            title: item.name
	          },
	          _react2.default.createElement(Icon, { className: classes.svg })
	        );
	      })
	    )
	  );
	};
	
	StackIcons.propTypes = {
	  classes: _propTypes2.default.object.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(StackIcons);
	module.exports = exports["default"];

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function AlgoliaIcon (props) {
	    return React.createElement("svg",props,[React.createElement("defs",{"key":0},React.createElement("linearGradient",{"x1":"-37.901%","y1":"134.768%","x2":"130.114%","y2":"-27.802%"},[React.createElement("stop",{"stopColor":"#00AEFF","offset":"0%","key":0}),React.createElement("stop",{"stopColor":"#3369E7","offset":"100%","key":1})])),React.createElement("g",{"fill":"none","fillRule":"evenodd","key":1},[React.createElement("rect",{"fill":"url(#a)","width":"94.045","height":"94.072","rx":"12.374","key":0}),React.createElement("path",{"d":"M48.125 23.775c-14.671 0-26.58 11.898-26.58 26.588 0 14.69 11.895 26.588 26.58 26.588 14.685 0 26.58-11.912 26.58-26.602S62.81 23.775 48.125 23.775zm0 45.307c-10.343 0-18.727-8.386-18.727-18.733 0-10.346 8.384-18.732 18.727-18.732 10.344 0 18.727 8.386 18.727 18.732 0 10.347-8.383 18.733-18.727 18.733zm0-33.6v13.955c0 .408.436.68.803.49L61.3 43.501a.548.548 0 0 0 .217-.762c-2.572-4.506-7.335-7.596-12.834-7.8a.549.549 0 0 0-.558.544zM30.76 25.246l-1.62-1.62a4.082 4.082 0 0 0-5.77 0l-1.933 1.933a4.085 4.085 0 0 0 0 5.773l1.606 1.606c.245.245.64.204.844-.068a30.572 30.572 0 0 1 3.116-3.662 29.723 29.723 0 0 1 3.689-3.131c.272-.19.3-.6.068-.83zm26.063-4.234v-3.226a4.078 4.078 0 0 0-4.083-4.084h-9.5a4.078 4.078 0 0 0-4.083 4.084v3.308c0 .368.354.626.708.531a29.562 29.562 0 0 1 8.275-1.157c2.722 0 5.403.367 7.989 1.075a.55.55 0 0 0 .694-.53z","fill":"#FFF","key":1})])]);
	}
	
	AlgoliaIcon.displayName = "AlgoliaIcon";
	
	AlgoliaIcon.defaultProps = {"viewBox":"0 0 95 95"};
	
	module.exports = AlgoliaIcon;
	
	AlgoliaIcon.default = AlgoliaIcon;


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function ReactIcon (props) {
	    return React.createElement("svg",props,[React.createElement("path",{"d":"M.754 114.75c0 19.215 18.763 37.152 48.343 47.263-5.907 29.737-1.058 53.706 15.136 63.045 16.645 9.6 41.443 2.955 64.98-17.62 22.943 19.744 46.13 27.514 62.31 18.148 16.63-9.627 21.687-35.221 15.617-65.887 30.81-10.186 48.044-25.481 48.044-44.949 0-18.769-18.797-35.006-47.979-45.052 6.535-31.933.998-55.32-15.867-65.045-16.259-9.376-39.716-1.204-62.996 19.056C104.122 2.205 80.897-4.36 64.05 5.392 47.806 14.795 43.171 39.2 49.097 69.487 20.515 79.452.754 96.057.754 114.75z","fill":"#FFF","key":0}),React.createElement("path",{"d":"M201.025 79.674a151.364 151.364 0 0 0-7.274-2.292 137.5 137.5 0 0 0 1.124-4.961c5.506-26.728 1.906-48.26-10.388-55.348-11.787-6.798-31.065.29-50.535 17.233a151.136 151.136 0 0 0-5.626 5.163 137.573 137.573 0 0 0-3.744-3.458c-20.405-18.118-40.858-25.752-53.139-18.643-11.776 6.817-15.264 27.06-10.307 52.39a150.91 150.91 0 0 0 1.67 7.484c-2.894.822-5.689 1.698-8.363 2.63-23.922 8.34-39.2 21.412-39.2 34.97 0 14.004 16.4 28.05 41.318 36.566a128.44 128.44 0 0 0 6.11 1.91 147.813 147.813 0 0 0-1.775 8.067c-4.726 24.89-1.035 44.653 10.71 51.428 12.131 6.995 32.491-.195 52.317-17.525 1.567-1.37 3.14-2.823 4.715-4.346a148.34 148.34 0 0 0 6.108 5.573c19.204 16.525 38.17 23.198 49.905 16.405 12.12-7.016 16.058-28.247 10.944-54.078-.39-1.973-.845-3.988-1.355-6.04 1.43-.422 2.833-.858 4.202-1.312 25.904-8.582 42.757-22.457 42.757-36.648 0-13.607-15.77-26.767-40.174-35.168z","fill":"#53C1DE","key":1}),React.createElement("path",{"d":"M195.406 142.328c-1.235.409-2.503.804-3.795 1.187-2.86-9.053-6.72-18.68-11.442-28.625 4.507-9.71 8.217-19.213 10.997-28.208 2.311.67 4.555 1.375 6.717 2.12 20.91 7.197 33.664 17.84 33.664 26.04 0 8.735-13.775 20.075-36.14 27.486zm-9.28 18.389c2.261 11.422 2.584 21.749 1.086 29.822-1.346 7.254-4.052 12.09-7.398 14.027-7.121 4.122-22.35-1.236-38.772-15.368-1.883-1.62-3.78-3.35-5.682-5.18 6.367-6.964 12.73-15.06 18.94-24.05 10.924-.969 21.244-2.554 30.603-4.717.46 1.86.87 3.683 1.223 5.466zm-93.85 43.137c-6.957 2.457-12.498 2.527-15.847.596-7.128-4.11-10.09-19.98-6.049-41.265a138.507 138.507 0 0 1 1.65-7.502c9.255 2.047 19.5 3.52 30.45 4.408 6.251 8.797 12.798 16.883 19.396 23.964a118.863 118.863 0 0 1-4.305 3.964c-8.767 7.664-17.552 13.1-25.294 15.835zm-32.593-61.58c-11.018-3.766-20.117-8.66-26.354-14-5.604-4.8-8.434-9.565-8.434-13.432 0-8.227 12.267-18.722 32.726-25.855a139.276 139.276 0 0 1 7.777-2.447c2.828 9.197 6.537 18.813 11.013 28.537-4.534 9.869-8.296 19.638-11.15 28.943a118.908 118.908 0 0 1-5.578-1.746zm10.926-74.37c-4.247-21.703-1.427-38.074 5.67-42.182 7.56-4.376 24.275 1.864 41.893 17.507 1.126 1 2.257 2.047 3.39 3.13-6.564 7.049-13.051 15.074-19.248 23.82-10.627.985-20.8 2.567-30.152 4.686a141.525 141.525 0 0 1-1.553-6.962zm97.467 24.067a306.982 306.982 0 0 0-6.871-11.3c7.21.91 14.117 2.12 20.603 3.601-1.947 6.241-4.374 12.767-7.232 19.457a336.42 336.42 0 0 0-6.5-11.758zm-39.747-38.714c4.452 4.823 8.911 10.209 13.297 16.052a284.245 284.245 0 0 0-26.706-.006c4.39-5.789 8.887-11.167 13.409-16.046zm-40.002 38.78a285.24 285.24 0 0 0-6.378 11.685c-2.811-6.667-5.216-13.222-7.18-19.552 6.447-1.443 13.322-2.622 20.485-3.517a283.79 283.79 0 0 0-6.927 11.384zm7.133 57.683c-7.4-.826-14.379-1.945-20.824-3.348 1.995-6.442 4.453-13.138 7.324-19.948a283.494 283.494 0 0 0 6.406 11.692 285.27 285.27 0 0 0 7.094 11.604zm33.136 27.389c-4.575-4.937-9.138-10.397-13.595-16.27 4.326.17 8.737.256 13.22.256 4.606 0 9.159-.103 13.64-.303-4.4 5.98-8.843 11.448-13.265 16.317zm46.072-51.032c3.02 6.884 5.566 13.544 7.588 19.877-6.552 1.495-13.625 2.699-21.078 3.593a337.537 337.537 0 0 0 6.937-11.498 306.632 306.632 0 0 0 6.553-11.972zm-14.915 7.15a316.478 316.478 0 0 1-10.84 17.49c-6.704.479-13.632.726-20.692.726-7.031 0-13.871-.219-20.458-.646A273.798 273.798 0 0 1 96.72 133.28a271.334 271.334 0 0 1-9.64-18.206 273.864 273.864 0 0 1 9.611-18.216v.002a271.252 271.252 0 0 1 10.956-17.442c6.72-.508 13.61-.774 20.575-.774 6.996 0 13.895.268 20.613.78a290.704 290.704 0 0 1 10.887 17.383 316.418 316.418 0 0 1 9.741 18.13 290.806 290.806 0 0 1-9.709 18.29zm19.913-107.792c7.566 4.364 10.509 21.961 5.755 45.038a127.525 127.525 0 0 1-1.016 4.492c-9.374-2.163-19.554-3.773-30.212-4.773-6.209-8.841-12.642-16.88-19.1-23.838a141.92 141.92 0 0 1 5.196-4.766c16.682-14.518 32.273-20.25 39.377-16.153z","fill":"#FFF","key":2}),React.createElement("path",{"d":"M128.221 94.665c11.144 0 20.177 9.034 20.177 20.177 0 11.144-9.033 20.178-20.177 20.178-11.143 0-20.177-9.034-20.177-20.178 0-11.143 9.034-20.177 20.177-20.177","fill":"#53C1DE","key":3})]);
	}
	
	ReactIcon.displayName = "ReactIcon";
	
	ReactIcon.defaultProps = {"viewBox":"0 0 256 230"};
	
	module.exports = ReactIcon;
	
	ReactIcon.default = ReactIcon;


/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function GraphqlIcon (props) {
	    return React.createElement("svg",props,[React.createElement("path",{"fill":"#E10098","d":"M57.468 302.66l-14.376-8.3 160.15-277.38 14.376 8.3z","key":0}),React.createElement("path",{"fill":"#E10098","d":"M39.8 272.2h320.3v16.6H39.8z","key":1}),React.createElement("path",{"fill":"#E10098","d":"M206.348 374.026l-160.21-92.5 8.3-14.376 160.21 92.5zM345.522 132.947l-160.21-92.5 8.3-14.376 160.21 92.5z","key":2}),React.createElement("path",{"fill":"#E10098","d":"M54.482 132.883l-8.3-14.375 160.21-92.5 8.3 14.376z","key":3}),React.createElement("path",{"fill":"#E10098","d":"M342.568 302.663l-160.15-277.38 14.376-8.3 160.15 277.38zM52.5 107.5h16.6v185H52.5zM330.9 107.5h16.6v185h-16.6z","key":4}),React.createElement("path",{"fill":"#E10098","d":"M203.522 367l-7.25-12.558 139.34-80.45 7.25 12.557z","key":5}),React.createElement("path",{"fill":"#E10098","d":"M369.5 297.9c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.8 9.7 22.5 31 12.8 47.7M90.9 137c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M30.5 297.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M309.1 137c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M200 395.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.2-15.6 34.9-34.9 34.9M200 74c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.3 0 34.9 15.6 34.9 34.9 0 19.3-15.6 34.9-34.9 34.9","key":6})]);
	}
	
	GraphqlIcon.displayName = "GraphqlIcon";
	
	GraphqlIcon.defaultProps = {"viewBox":"0 0 400 400"};
	
	module.exports = GraphqlIcon;
	
	GraphqlIcon.default = GraphqlIcon;


/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function JssIcon (props) {
	    return React.createElement("svg",props,[React.createElement("path",{"fill":"yellow","d":"M0 13h95v94H0z","key":0}),React.createElement("path",{"fill":"#666","d":"M96,107.5H0v-95h96V107.5z M1.803,105.705h92.393v-91.41H1.803C1.803,14.295,1.803,105.705,1.803,105.705z","key":1}),React.createElement("path",{"fill":"#333","d":"M64.294 86.574c1.903 3.108 4.379 5.392 8.759 5.392 3.679 0 6.029-1.839 6.029-4.379 0-3.044-2.414-4.123-6.464-5.894l-2.219-.952c-6.407-2.729-10.663-6.149-10.663-13.378 0-6.659 5.073-11.728 13.003-11.728 5.645 0 9.704 1.965 12.628 7.109l-6.914 4.439c-1.522-2.73-3.164-3.805-5.714-3.805-2.601 0-4.249 1.65-4.249 3.805 0 2.663 1.65 3.742 5.459 5.392l2.22.951c7.544 3.235 11.803 6.533 11.803 13.948 0 7.993-6.279 12.373-14.713 12.373-8.246 0-13.573-3.929-16.18-9.079 0-.002 7.215-4.194 7.215-4.194zm32.029 0c1.903 3.108 4.379 5.392 8.759 5.392 3.679 0 6.029-1.839 6.029-4.379 0-3.044-2.414-4.123-6.464-5.894l-2.219-.952c-6.407-2.729-10.663-6.149-10.663-13.378 0-6.659 5.073-11.728 13.003-11.728 5.645 0 9.704 1.965 12.628 7.109l-6.914 4.439c-1.522-2.73-3.164-3.805-5.714-3.805-2.601 0-4.249 1.65-4.249 3.805 0 2.663 1.65 3.742 5.459 5.392l2.22.951C115.741 76.76 120 80.058 120 87.473c0 7.993-6.279 12.373-14.713 12.373-8.246 0-13.573-3.929-16.18-9.079l7.216-4.193zm-63.393.77c1.395 2.475 2.664 4.567 5.714 4.567 2.917 0 4.757-1.141 4.757-5.579V56.141h8.878v30.31c0 9.193-5.39 13.378-13.258 13.378-7.109 0-11.226-3.679-13.32-8.11l7.229-4.375c0-.001 0 0 0 0z","key":2})]);
	}
	
	JssIcon.displayName = "JssIcon";
	
	JssIcon.defaultProps = {"viewBox":"0 0 120 120"};
	
	module.exports = JssIcon;
	
	JssIcon.default = JssIcon;


/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function ReduxIcon (props) {
	    return React.createElement("svg",props,React.createElement("g",{"fill":"#764ABC"},[React.createElement("path",{"d":"M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z","key":0}),React.createElement("path",{"d":"M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z","key":1}),React.createElement("path",{"d":"M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z","key":2})]));
	}
	
	ReduxIcon.displayName = "ReduxIcon";
	
	ReduxIcon.defaultProps = {"viewBox":"0 0 100 100"};
	
	module.exports = ReduxIcon;
	
	ReduxIcon.default = ReduxIcon;


/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function GatsbyIcon (props) {
	    return React.createElement("svg",props,[React.createElement("style",{"type":"text/css","key":0},".st0{fill:#639}"),React.createElement("path",{"className":"st0","d":"M600,0C268.6,0,0,268.6,0,600s268.6,600,600,600s600-268.6,600-600S931.4,0,600,0z M266.6,933.3\tC176.1,842.8,131,724.6,129.6,606L594,1070.4C475.4,1069,357.2,1023.9,266.6,933.3z M704.3,1059.4L140.6,495.7\tc47.5-210.1,235-367.1,459.4-367.1c156.9,0,295.5,77,381.2,194.9L915.6,379C845.8,279.5,730.5,214.3,600,214.3\tc-167.7,0-310.3,107.7-363.3,257.5l491.6,491.6c123.4-43.7,218-148.2,247.6-277.6H771.4V600h300\tC1071.4,824.5,914.4,1011.9,704.3,1059.4z","key":1})]);
	}
	
	GatsbyIcon.displayName = "GatsbyIcon";
	
	GatsbyIcon.defaultProps = {"version":"1.1","id":"Ebene_1","x":"0","y":"0","viewBox":"0 0 1200 1200","xmlSpace":"preserve","enableBackground":"new 0 0 1200 1200"};
	
	module.exports = GatsbyIcon;
	
	GatsbyIcon.default = GatsbyIcon;


/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function WebpackIcon (props) {
	    return React.createElement("svg",props,[React.createElement("path",{"fill":"#FFF","d":"M600 0l530.3 300v600L600 1200 69.7 900V300z","key":0}),React.createElement("path",{"fill":"#8ED6FB","className":"st1","d":"M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z","key":1}),React.createElement("path",{"fill":"#1C78C0","d":"M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z","key":2})]);
	}
	
	WebpackIcon.displayName = "WebpackIcon";
	
	WebpackIcon.defaultProps = {"viewBox":"0 0 1200 1200"};
	
	module.exports = WebpackIcon;
	
	WebpackIcon.default = WebpackIcon;


/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function NodejsIcon (props) {
	    return React.createElement("svg",props,[React.createElement("defs",{"key":0},[React.createElement("clipPath",{"id":"a","key":0},React.createElement("path",{"d":"M239.03 226.605l-42.13 24.317c-1.578.91-2.546 2.59-2.546 4.406v48.668c0 1.817.968 3.496 2.546 4.406l42.133 24.336c1.575.907 3.517.907 5.09 0l42.126-24.336c1.57-.91 2.54-2.59 2.54-4.406v-48.668c0-1.816-.97-3.496-2.55-4.406l-42.12-24.317c-.79-.453-1.67-.68-2.55-.68-.88 0-1.76.227-2.55.68"})),React.createElement("linearGradient",{"id":"b","x1":"-.348","x2":"1.251","gradientTransform":"rotate(116.114 53.1 202.97) scale(86.48)","gradientUnits":"userSpaceOnUse","key":1},[React.createElement("stop",{"offset":".3","stopColor":"#3E863D","key":0}),React.createElement("stop",{"offset":".5","stopColor":"#55934F","key":1}),React.createElement("stop",{"offset":".8","stopColor":"#5AAD45","key":2})]),React.createElement("clipPath",{"id":"c","key":2},React.createElement("path",{"d":"M195.398 307.086c.403.523.907.976 1.5 1.316l36.14 20.875 6.02 3.46c.9.52 1.926.74 2.934.665.336-.027.672-.09 1-.183l44.434-81.36c-.34-.37-.738-.68-1.184-.94l-27.586-15.93-14.582-8.39c-.414-.24-.863-.41-1.32-.53zm0 0"})),React.createElement("linearGradient",{"id":"d","x1":"-.456","x2":".582","gradientTransform":"rotate(-36.46 550.846 -214.337) scale(132.798)","gradientUnits":"userSpaceOnUse","key":3},[React.createElement("stop",{"offset":".57","stopColor":"#3E863D","key":0}),React.createElement("stop",{"offset":".72","stopColor":"#619857","key":1}),React.createElement("stop",{"offset":"1","stopColor":"#76AC64","key":2})]),React.createElement("clipPath",{"id":"e","key":4},React.createElement("path",{"d":"M241.066 225.953c-.707.07-1.398.29-2.035.652l-42.01 24.247 45.3 82.51c.63-.09 1.25-.3 1.81-.624l42.13-24.336c1.3-.754 2.19-2.03 2.46-3.476l-46.18-78.89c-.34-.067-.68-.102-1.03-.102-.14 0-.28.007-.42.02"})),React.createElement("linearGradient",{"id":"f","x1":".043","x2":".984","gradientTransform":"translate(192.862 279.652) scale(97.417)","gradientUnits":"userSpaceOnUse","key":5},[React.createElement("stop",{"offset":".16","stopColor":"#6BBF47","key":0}),React.createElement("stop",{"offset":".38","stopColor":"#79B461","key":1}),React.createElement("stop",{"offset":".47","stopColor":"#75AC64","key":2}),React.createElement("stop",{"offset":".7","stopColor":"#659E5A","key":3}),React.createElement("stop",{"offset":".9","stopColor":"#3E863D","key":4})])]),React.createElement("path",{"fill":"#689f63","d":"M218.647 270.93c-1.46 0-2.91-.383-4.19-1.12l-13.337-7.896c-1.992-1.114-1.02-1.508-.363-1.735 2.656-.93 3.195-1.14 6.03-2.75.298-.17.688-.11.993.07l10.246 6.08c.37.2.895.2 1.238 0l39.95-23.06c.37-.21.61-.64.61-1.08v-46.1c0-.46-.24-.87-.618-1.1l-39.934-23.04c-.37-.22-.86-.22-1.23 0l-39.926 23.04c-.387.22-.633.65-.633 1.09v46.1c0 .44.24.86.62 1.07l10.94 6.32c5.94 2.97 9.57-.53 9.57-4.05v-45.5c0-.65.51-1.15 1.16-1.15h5.06c.63 0 1.15.5 1.15 1.15v45.52c0 7.92-4.32 12.47-11.83 12.47-2.31 0-4.13 0-9.21-2.5l-10.48-6.04c-2.59-1.5-4.19-4.3-4.19-7.29v-46.1c0-3 1.6-5.8 4.19-7.28l39.99-23.07c2.53-1.43 5.89-1.43 8.4 0l39.94 23.08c2.58 1.49 4.19 4.28 4.19 7.28v46.1c0 2.99-1.61 5.78-4.19 7.28l-39.94 23.07c-1.28.74-2.73 1.12-4.21 1.12","key":1}),React.createElement("path",{"fill":"#689f63","d":"M230.987 239.164c-17.48 0-21.145-8.024-21.145-14.754 0-.64.516-1.15 1.157-1.15h5.16c.57 0 1.05.415 1.14.978.78 5.258 3.1 7.91 13.67 7.91 8.42 0 12-1.902 12-6.367 0-2.57-1.02-4.48-14.1-5.76-10.94-1.08-17.7-3.49-17.7-12.24 0-8.06 6.8-12.86 18.19-12.86 12.79 0 19.13 4.44 19.93 13.98.03.33-.09.65-.31.89-.22.23-.53.37-.85.37h-5.19c-.54 0-1.01-.38-1.12-.9-1.25-5.53-4.27-7.3-12.48-7.3-9.19 0-10.26 3.2-10.26 5.6 0 2.91 1.26 3.76 13.66 5.4 12.28 1.63 18.11 3.93 18.11 12.56 0 8.7-7.26 13.69-19.92 13.69m48.66-48.89h1.34c1.1 0 1.31-.77 1.31-1.22 0-1.18-.81-1.18-1.26-1.18h-1.38zm-1.63-3.78h2.97c1.02 0 3.02 0 3.02 2.28 0 1.59-1.02 1.92-1.63 2.12 1.19.08 1.27.86 1.43 1.96.08.69.21 1.88.45 2.28h-1.83c-.05-.4-.33-2.6-.33-2.72-.12-.49-.29-.73-.9-.73h-1.51v3.46h-1.67zm-3.57 4.3c0 3.58 2.89 6.48 6.44 6.48 3.58 0 6.47-2.96 6.47-6.48 0-3.59-2.93-6.44-6.48-6.44-3.5 0-6.44 2.81-6.44 6.43m14.16.03c0 4.24-3.47 7.7-7.7 7.7-4.2 0-7.7-3.42-7.7-7.7 0-4.36 3.58-7.7 7.7-7.7 4.15 0 7.69 3.35 7.69 7.7","key":2}),React.createElement("path",{"fill":"#333","fillRule":"evenodd","d":"M94.936 90.55c0-1.84-.97-3.53-2.558-4.445l-42.356-24.37c-.715-.42-1.516-.64-2.328-.67h-.438c-.812.03-1.613.25-2.34.67L2.562 86.105C.984 87.025 0 88.715 0 90.555l.093 65.64c0 .91.47 1.76 1.27 2.21.78.48 1.76.48 2.54 0l25.18-14.42c1.59-.946 2.56-2.618 2.56-4.44V108.88c0-1.83.97-3.52 2.555-4.43l10.72-6.174c.796-.46 1.67-.688 2.56-.688.876 0 1.77.226 2.544.687l10.715 6.172c1.586.91 2.56 2.6 2.56 4.43v30.663c0 1.82.983 3.5 2.565 4.44l25.164 14.41c.79.47 1.773.47 2.56 0 .776-.45 1.268-1.3 1.268-2.21zm199.868 34.176c0 .457-.243.88-.64 1.106l-14.548 8.386c-.395.227-.883.227-1.277 0l-14.55-8.386c-.4-.227-.64-.65-.64-1.106V107.93c0-.458.24-.88.63-1.11l14.54-8.4c.4-.23.89-.23 1.29 0l14.55 8.4c.4.23.64.652.64 1.11zM298.734.324c-.794-.442-1.76-.43-2.544.027-.78.46-1.262 1.3-1.262 2.21v65c0 .64-.34 1.23-.894 1.55-.55.32-1.235.32-1.79 0L281.634 63c-1.58-.914-3.526-.914-5.112 0l-42.37 24.453c-1.583.91-2.56 2.6-2.56 4.42v48.92c0 1.83.977 3.51 2.56 4.43l42.37 24.47c1.582.91 3.53.91 5.117 0l42.37-24.48c1.58-.92 2.56-2.6 2.56-4.43V18.863c0-1.856-1.01-3.563-2.63-4.47zm141.093 107.164c1.574-.914 2.543-2.602 2.543-4.422V91.21c0-1.824-.97-3.507-2.547-4.425l-42.1-24.44c-1.59-.92-3.54-.92-5.13 0l-42.36 24.45c-1.59.92-2.56 2.6-2.56 4.43v48.9c0 1.84.99 3.54 2.58 4.45l42.09 23.99c1.55.89 3.45.9 5.02.03l25.46-14.15c.8-.45 1.31-1.3 1.31-2.22 0-.92-.49-1.78-1.29-2.23l-42.62-24.46c-.8-.45-1.29-1.3-1.29-2.21v-15.34c0-.916.48-1.76 1.28-2.216l13.26-7.65c.79-.46 1.76-.46 2.55 0l13.27 7.65c.79.45 1.28 1.3 1.28 2.21v12.06c0 .91.49 1.76 1.28 2.22.79.45 1.77.45 2.56-.01zm0 0","key":3}),React.createElement("path",{"fill":"#689f63","fillRule":"evenodd","d":"M394.538 105.2c.3-.177.676-.177.98 0l8.13 4.69c.304.176.49.5.49.85v9.39c0 .35-.186.674-.49.85l-8.13 4.69c-.304.177-.68.177-.98 0l-8.125-4.69c-.31-.176-.5-.5-.5-.85v-9.39c0-.35.18-.674.49-.85zm0 0","key":4}),React.createElement("g",{"clipPath":"url(#a)","transform":"translate(-78.306 -164.016)","key":5},React.createElement("path",{"fill":"url(#b)","d":"M331.363 246.793l-118.715-58.19-60.87 124.174L270.49 370.97zm0 0"})),React.createElement("g",{"clipPath":"url(#c)","transform":"translate(-78.306 -164.016)","key":6},React.createElement("path",{"fill":"url(#d)","d":"M144.07 264.004l83.825 113.453 110.86-81.906-83.83-113.45zm0 0"})),React.createElement("g",{"clipPath":"url(#e)","transform":"translate(-78.306 -164.016)","key":7},React.createElement("path",{"fill":"url(#f)","d":"M197.02 225.934v107.43h91.683v-107.43zm0 0"}))]);
	}
	
	NodejsIcon.displayName = "NodejsIcon";
	
	NodejsIcon.defaultProps = {"width":"589.827","height":"361.238","version":"1.2","viewBox":"0 0 442.37 270.929"};
	
	module.exports = NodejsIcon;
	
	NodejsIcon.default = NodejsIcon;


/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function TypescriptIcon (props) {
	    return React.createElement("svg",props,React.createElement("g",null,[React.createElement("polygon",{"fill":"#007ACC","transform":"translate(128.000000, 128.000000) scale(1, -1) translate(-128.000000, -128.000000) ","points":"0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256","key":0}),React.createElement("path",{"d":"M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 L146.658132,223.436863 Z","fill":"#FFFFFF","transform":"translate(101.634640, 176.142993) rotate(-180.000000) translate(-101.634640, -176.142993) ","key":1}),React.createElement("path",{"d":"M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 L172.473933,152.474049 L174.01806,150.198494 C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z","fill":"#FFFFFF","transform":"translate(194.578507, 176.190240) scale(1, -1) translate(-194.578507, -176.190240) ","key":2})]));
	}
	
	TypescriptIcon.displayName = "TypescriptIcon";
	
	TypescriptIcon.defaultProps = {"width":"256px","height":"256px","viewBox":"0 0 256 256","version":"1.1","preserveAspectRatio":"xMidYMid"};
	
	module.exports = TypescriptIcon;
	
	TypescriptIcon.default = TypescriptIcon;


/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function BabelIcon (props) {
	    return React.createElement("svg",props,[React.createElement("path",{"d":"M351 136v-1h-2v1h2zm12 28v1h1l1-2v-1l-2 2zm-47 37l-9-12c0-2 2-4 6-6l13-11c3-4 5-10 5-18v-1c-1-6-5-11-12-14-5-3-13-5-25-5-10 1-22 4-38 10l-15 10v1l2-1 1 1 1-1v1l-10 8 1 1h-1l-1-1-1 1 1 2-2-1-5 3 1-3 5-26v-1l-5-4v-2a705 705 0 0 1-63 76h-4l-1 2h2l-3 1-6 2h-2l-4 1h-4v1-1h-3l-13-15c0-2 3-5 9-8l16-14c4-5 6-13 7-23v-3c-1-7-6-13-17-18-6-4-16-6-32-6-13 1-29 5-50 13l-19 13v1l2-1 1 1h1l1-1v1l-14 11 1 1h-1l-1-1-2 1v1l2 1h-2c-3 0-6 2-9 6l1 2 4-4v2l-2 1 2 2a51 51 0 0 1 10-8l2 1h2c10-7 19-12 29-15v1l-4 4 1 2A882 882 0 0 1 2 301c4 0 6-1 7-2h1v1h4v1l-2 6-5 10h1c6-6 10-12 13-18 16-4 28-9 36-13 9-1 15-3 19-7v-1l-3 1h-1c7-1 11-3 13-4 12-10 21-16 28-20 12-10 21-19 24-27a79 79 0 0 0 2-1h3l1-1h3l5-1s-1 0 0 0h1-1 2v1l-21 35-5 6-2 8v-1l2-1v4l1 1-1 1h1c2-1 2-2 2-3h3l-1 3c8-8 28-38 43-58 0-2 8-5 24-9h1l-4 19-3 10-4 13-6 19-8 32h1l1-1h1l-1-1h3l2-3 1-4 3-10 4-10c2-8 4-12 5-13v1l-2 5-8 29v4h1c7-15 17-45 30-90 1-4 3-7 6-9l-1-1 3-2-4-2 7-28 2-2v2h-1l1 2 8-6 2 1h1c7-6 15-9 22-12v1l-3 3 1 2-10 25a680 680 0 0 1-38 81l5-2h1v1h1l1-1 1 1v1l-2 4-3 7v1h1c4-5 7-9 9-14 12-3 21-7 28-10 6-1 11-3 14-5v-1l-2 1h-1v-1c5 0 8-1 10-3l21-15c14-10 21-21 20-30zm-2 0v4l-1 2-1-7 2 1zM28 170l-1 1v-2h2l1 1h-2zM15 298l-4-1v-2l1-1 1 2 4-4h1c0 4-1 6-3 6zm136-142l-4-6v-2c1 0 3 2 4 6v2zm-2-15v2l-19-8c13 0 19 3 19 6zm-78 67l-2 1-1-1 3-1v1zm-2-40h1v2l-3 3v-2c2-1 2-2 2-3zm-5 13v3h-1v-3h1zm-3 5h1c0 2-1 3-2 3l1-3zm-2 6v1l-1 2h-1v-1l2-2zm-3 6v3h-1v-3h1zm-21 60l-2 7-1-1 3-6zm-4 9l-1 2v-1l1-1zm-1 17h2v1h-2l-1 1 1-2zm56-17c-11 5-17 9-19 11-12 4-18 7-18 8l-21 9-4-1c0-2 1-4 3-5l6 1 10-4v-1h-4l11-5h2l-5 3c0 1 0 2 1 1l4-2c5-1 18-8 40-21v1l-6 5zm-33 11c3 0 6-2 8-4l1 1-8 4h-1v-1zm54-41l-17 13-20 12c-20 11-32 17-37 17h-1l27-54c7-1 19-4 35-10l4-1c8-1 14 1 18 5l1 2c-3 9-7 14-10 16zm-33-19h3v1h-3v-1zm38-6h2l3 2v1c-2 0-4-1-5-3zm5-31c-2 3-6 6-14 11-3 0-12 4-29 11a5 5 0 0 0-3 0v-1l3-9c2-7 3-11 5-12l14-31c-1-2 2-3 8-4l2-1v2l12-1c11-1 16 1 17 6h1v-3h1c3 2 5 4 5 6l-3 7-1-2h-1l-1 4c-5 8-9 12-12 13l-4 4zm9 22l-3-1v-2h1l3 2-1 1zm8 11l2 1h-1v1l-1-2zm1 5v-1h2l-2 1zm4 4l5-1v1l-5 1v-1zm6 2l-6 1 4-2h3v1h-1zm5-1h-2l2-1 1 1h-1zm13-15l3-1v1h-3zm15 91v-1l1-1 1 1v1h-2zm11-87h-1l-5 2h-1l-1-1 7-2 2-1 1 1-2 1zm5-1v-1l1-1 5-1v1l-6 2zm1-10h-4l11-4h1l1 1-9 3zm13-15c-1 6-3 10-6 11l-1-1-3 1-1 1h-2l-1-2 15-20 1 1c0 1 0 5-2 9zm23-20v-1h2v1h-2zm-9 97l-3-1v-2l2 1 2-3 1 1-2 4zm103-108l-3-5v-1l3 5v1zm-1-11l-1 1-14-6c10 1 14 2 15 5zm-60 51h-2v-1h2v1zm-1-31v2l-1 2v-1l1-3zm-4 10v2h-1v-2h1zm-3 4h1l-1 2v-2zm-1 5l-1 2h-1v-1l2-1zm-2 4v2l-1 1v-3h1zm-16 46l-2 5v-1l2-4zm-3 6v1l-1 1v-1l1-1zm-1 14h2l-2 1h-1l1-1zm43-13c-9 4-14 6-15 8l-14 6-15 7-3-1 2-4 4 1 8-3v-1l-3 1 9-5h1v1l-4 2 1 1 3-2 30-16v1l-4 4zm-26 8c3 0 5-1 7-3l1 1-7 3h-1v-1zm41-32l-12 11-16 9-28 13 20-41c6-1 15-3 27-8l3-1c6 0 11 1 14 4v2c-2 6-5 10-8 11zm-24-14h2v1h-2v-1zm28-4h2l2 1v1l-4-2zm4-23l-11 8-21 8h-2v-1c-1-2 0-4 2-7l3-9 11-23c0-2 2-3 6-4h2v2l8-2c9 0 13 1 13 5h1v-2h1c3 1 4 3 4 5l-2 5-1-2h-1v3c-5 7-8 10-10 10l-3 4zm5 15l-1-1h1l3 1-1 1-2-1zm-176 92h-1l-1 1 1 1 1-1v-1zm-4-7l1-1-1 1zm26-64h2l-1-1h-1v1zm344 29l-16 3h3l13-2v-1zm-62 8v1-1zm-7-25h-1l-2 4 3-4zm71 17v1h2v-1h-2zm-78 10l-3-1v2l15-2-12 1zm-7-34h-2l1 1 1-1zm92 17h1v-2c-3 0-4 0-6 2v-1h-3l-1-1h-1l-4 1-1-1-1 1h-6l1 1h5l-10 2h-2v-1h3l3-1v-1l-11 1v-1l9-2v1a2 2 0 0 1 2-1c4 0 5 1 11-1h2l2-2v-1c-11 3-14 2-17 3h-4l-1 1-1-1-10 2v-1c-5 1-4 2-10 2l-2 1v-1l-4 1h-4l-4 1v-1l-1 1h-4l-8 1h-3l-5-1 3-5v1l2-2v-1l-1 1v-3l2-4v1h1v-1l-1-1 2-1h-1v-2l4-10h1l1-1h-1a4 4 0 0 1 0-2c2-2 3-3 2-5h1l3-6 10-25c8-23 8-25 9-30h-1v2l-2-1 3-7 1 3h1l1-4-2-1v1-5h-1l-1-2h-6v-1l3-2 2 1 1-1h2v-1h-6l-1 1v-1l-43 4h-8l-3 1h-7a734 734 0 0 0-2 2h-1l-17 2h-3l-5 1-8 4 1 1 1-1h3v3c-3 1-5 3-5 5l-6 4v1l2-1 1 2v2l-21 45c-12 28-19 43-19 46-5 1-7 3-8 5l4 1v1l-1 2v2c0 2 3 2 9 3l1-1-1 8h1l3-7h1l2 2-8 18v1h1l10-23 38-4h3l1-1 1 1 14-1c3-1 5-2 5-4l6-1h2l6-1c1-2 1-4 3-4l-1-1-4 1h-7l-9 1h-4l-3-1-1 1h-2c12-2 18-3 18-5l1 1 3-1v-1l-29 1h-4l-2 1-2-1-8 2h-18a149 149 0 0 1 18-39h2l4-1h3l14-3h3l3-1 11-1 15-3-1-1-3-1c0-1-1-2-4-2v-1l3-1h8l-1-1h-4v-2h3l1-1-6-1a252 252 0 0 1-44 2v-1l12-24-1 3v1l2-1c3-7 5-10 7-10 9-1-1-2 17-5l2 1 31-5v-1l-7 1v-1l2-1v1l1-1h3l6-1h4l2-2v-1h-4l1-1 8-1 4-1v1l2-1-1 4h-1l-1-1-24 61c-1 5-3 8-4 9l1 1c0 2 0 5-2 7-4 13-7 19-8 20l1 6-1 1h-1l-2-2c-2 2-3 4-3 7h1c1-1 2-2 1-3h3l-1 3 1 1-2 3 1 1 3 1 3-1h13l4-2h10l1-1v1h8v1h-3v1l2-1 1 1-3 1-1-1-2 1h-2l1 1h1l9-1 3-1v1l2-1h3l7-1v-1 1l9-2h4l-1-1h-6l-7 1v-1h4l1-1h1c5 0 7 1 33-4l2-4a2 2 0 0 1-2 0l-7 1-1-1h4l4-1zm-186 3h-2l3-8h1l-2 8zm2-9l1-1-1 1zm24 19h-3 3zm-4-1c0 1-1 2-3 2h-4l-1-1 8-1zm24-110l-2 1v-1l1-1h2l-1 1zm27-5h1v1h-2l1-1zm-7 2h-2l6-2 2 1v1h-6zm4 10l4-1v1h-4zm4-4h2-2zm1-7h-1l1-1 5-1v1l-5 1zm2 11v-2h2l2 1-4 1zm13-18l-3 1h-5l8-1zm-3 12v1h-3l-1-1h4zm6 3l-2-1-4 1h-2l-2-1 4 1 7-2h4v1l-5 1zm39-10h1l4-3c-1 6-3 11-6 13l-2-1 3-9zm-7 11h1l-2 2v-1l1-1zm-4 10l3-7v1c0 4-1 6-2 6v2l-1 3h-1v-3l1-2zm-1 6l-2 4v-2l2-2zm-31 88h1v1l-1-1zm44 1h-3l6-1v1h-3zm-3-1zm0-7l-3 1v-1h3l2-1 1 1 4-1 1 1h-8zm11-1h-3 3s1 0 0 0zm1 0v-1h1v1h-1zm3 0v-1h1c1-1 1 0 2 1h-3zm5-1l2-1v1h-2zm2 0l1-1 1 1v-1 1h-2zm-28 12v-1h-1v1h1zm66-17v-1 1l-1 1h2v-1h-1zm3 2v1h2l-2-1zm-3-2z","key":0}),React.createElement("path",{"d":"M361 161v1h2v-3l-2 2zm-12-28v-1h-1v1h1zm-34 65l-10-12c0-2 2-4 7-6l12-11c3-4 5-10 5-18v-2c0-5-4-10-12-13-5-3-13-5-25-5-9 1-22 4-38 10l-14 10v1l1-1 1 1 1-1h1v1l-11 8 1 1h-1l-1-1-1 1 1 2-2-1-4 3v-3c3-10 4-19 5-26v-1l-5-4v-2a706 706 0 0 1-63 76h-4v2h1l-3 1-6 2h-3 1l-4 1h-4v1-1h-3l-13-15c0-2 3-5 9-8l16-14c4-5 6-13 7-23v-3c-1-7-6-13-16-18-6-4-17-6-32-6-13 1-30 5-51 13l-19 13v1l2-1 1 1 2-1v1l-13 11v1l-2-1-2 1v1l2 1h-2c-3 0-6 2-9 6l1 1 4-3v2l-1 1 1 2a51 51 0 0 1 10-8l3 1h1c10-7 19-12 29-15v1l-3 4v2c1 2-4 13-13 33A882 882 0 0 1 1 299l6-3h1v1h1l2-1 1 1v1l-2 6-5 10h2l12-18c16-4 28-9 37-13 8-1 14-3 19-7v-1l-3 1h-1c6-1 10-3 13-5l27-19c13-10 21-19 25-27l2-1h3v-1h3l5-1h2l1 1-22 35-5 6-2 8v-1l3-1-1 4 1 1-1 1h2c1-1 2-2 1-3h4c-1 1-2 1-2 3h1c8-9 27-38 42-58 0-2 8-5 25-9 1 3-1 9-4 19l-3 10c-2 8-4 12-3 13l-6 19c-4 10-7 21-9 32h2v-1h1v-1h2c1 0 2-1 2-3 0-3 1-4 2-4l3-10 3-10c2-8 4-12 5-13v1l-2 5c-2 12-5 22-8 29l1 4a903 903 0 0 0 36-99l-1-1 4-2-4-2 6-28 3-2v2h-2l2 2 7-6 2 1h1c8-6 15-9 22-12v1l-3 3 1 2-10 25a679 679 0 0 1-37 81l4-2h1v1h1l1-1 1 1v1l-2 4-3 7v1h1l9-14 28-10c7-1 11-3 15-5v-1l-3 1v-1c4 0 8-1 9-3l21-15c15-10 22-21 21-30zm-3 0l1 4-2 2v-7l1 1zM26 167h-1v-1h3v1h-2zM13 295l-4-1v-2l1-1c1 0 2 0 2 2l3-4h2c-1 4-2 6-4 6zm136-143c0 1-2-1-3-5l-1-2c2 0 3 2 4 6v1zm-1-14l-1 2-18-8c12 0 18 2 19 6zm-79 67l-2 1v-2h2v1zm-2-40h1v2l-2 3v-2l1-3zm-5 13v3h-1v-3h1zm-3 5h1l-1 3h-1l1-3zm-2 6h1v1l-2 2h-1v-1l2-2zm-2 6l-1 3-1-3h2zm-21 60l-3 7v-1c0-2 0-4 3-6zm-4 9l-1 2-1-1 2-1zm-2 17h2l1 1h-2l-2 1 1-2zm56-17c-11 5-17 9-19 11-12 4-18 7-18 8l-21 9-3-1c0-2 1-4 3-5l5 1 10-4v-1h-4l12-5h2l-6 3c0 1 0 2 1 1l4-2c5-1 18-8 40-21v1l-6 5zm-33 11c3 0 6-2 8-4l2 1-9 4h-1v-1zm54-41l-17 13-20 12c-20 11-32 17-37 17l26-54c8-1 19-4 35-10l4-1c8-1 15 1 19 5v2c-3 9-7 14-10 16zm-33-19h3v1h-3v-1zm38-6h2c2 0 3 1 3 2v1c-2 0-4-1-5-3zm5-31c-1 3-6 6-14 11-3 0-12 4-29 11a5 5 0 0 0-2 0v-1c-1-3 0-6 3-9 1-7 2-11 4-12l14-31c0-2 3-3 9-4l2-1v2l11-1c11-1 17 1 17 6h1v-3h1c4 2 5 4 6 6l-3 7-2-2h-1v4c-6 8-10 12-12 13l-5 4zm9 22l-3-1v-2h1l3 2-1 1zm9 11l2 1h-1l-1 1v-2zm0 5v-1h2l-2 1zm4 4l6-1-6 2v-1zm6 2l-6 1 5-2h2v1h-1zm5-1l-1-1h1l1 1h-1zm14-15l2-1v1h-2zm15 91v-2l1 1v1h-1zm10-87h-1l-4 1-1 1-2-1 7-2 3-1v1l-2 1zm5-1v-1l1-1 5-1v1l-6 2zm1-10h-3c-1-1 3-2 11-4h1v1l-9 3zm13-15c0 6-2 10-6 11v-1l-4 1-1 1h-2v-2l14-20 1 1c1 1 0 5-2 9zm24-20h-1v-1h2v1h-1zm-10 97l-3-1v-1l1-1 1 1 3-3 1 1-3 4zm103-108l-3-5v-1l3 5v1zm-1-11v1l-14-6c9 1 14 2 14 5zm-59 51h-2v-1h2v1zm-2-31h1v2l-2 2v-1l1-3zm-4 10v2l-1-2h1zm-2 4h1l-2 2 1-2zm-2 5h1l-1 2h-1v-1l1-1zm-1 4l-1 2v1-3h1zm-17 46c0 3-1 5-2 5v-1l2-4zm-3 6v2l-1-1 1-1zm0 14l1-1v1l-1 1h-1l1-1zm42-14l-15 9c-9 3-13 5-13 6-8 3-14 5-16 7l-3-1 2-4 5 1 7-3v-1l-3 1 9-5h1v1l-4 2 1 1 3-2c4-1 14-6 30-16v1l-4 3zm-25 9l6-3 1 1-7 3v-1zm41-32l-13 11-15 9-28 13h-1l20-41c6-1 15-3 27-8l3-1c6 0 11 1 14 4v2c-2 6-5 10-7 11zm-25-14h2v1h-2v-1zm29-4l1-1 2 2v1l-3-2zm3-23l-10 8-22 8h-2v-1c0-2 0-4 2-7l3-9 11-23c0-2 2-3 7-4h1v2l9-2c8 0 12 1 13 5h1l-1-2h1c3 1 4 3 4 5 0 1 0 3-2 5l-1-2h-1v3c-4 7-7 10-9 10l-4 4zm5 15v-1h1l2 1-1 1-2-1zm-176 92h-1l-1 1 1 1 1-1v-1zm-4-7l1-1-1 1zm27-51h1-1zm0-13h1v-1h-1v1zm267 39l-3-1v2l15-2v-1l-12 2zm14-2v1-1zm64-8v1h2v-1h-2zm-2 0c-12 3-13 2-15 2v1h2l13-2v-1zm-69-17h-1l-1 4 2-4zm-14-7h-1v1l1-1zm30 31v-1 1zm62-14h1l1-1-1-1-6 2v-1h-3l-1-1h-1l-4 1v-1l-2 1h-5v1h5l-10 2-1-1v1l-1-1 2-1 2 1 2-1v-1l-11 1v-1l9-2 1 1a2 2 0 0 1 1-1h1c3 0 4 1 11-1h2l1-2v-1c-11 3-14 2-17 3h-4l-1 1v-1h-1l-9 2-1-1c-5 1-3 2-10 2l-1 1-1-1-4 1h-3l-4 1v-1l-1 1h-5l-7 1h-3l-5-1c0-3 1-5 2-5v1h1l1-2v-1l-1 1v-3l2-4v1h1v-2l2-1h-2v-2l4-10h1l1-1h-1a4 4 0 0 1 1-2l2-5 3-6c3-4 6-13 10-25 9-23 8-25 9-30h-1v2l-2-1 3-7 1 3h1l1-4-1-1-1 1v-5h-1l-1-2h-5l-1-1 4-2h5v-1h-6l-1 1v-1l-44 4h-7l-4 1h-6a733 733 0 0 0-2 2h-1l-18 2h-3l-4 1-9 4 1 1 2-1h3l-1 3c-3 1-4 3-5 5l-6 4v1h1l1-1 1 2v2l-21 45-19 46c-4 1-7 3-7 5l3 1v1l-1 2 1 2 9 3v-1l-1 8h1l3-7h1l2 2-8 18 1 1 11-23 38-4 1-1v1h2l1-1v1l14-1c4-1 5-2 5-4l6-1h2l7-1 2-4v-1l-4 1h-8l-9 1h-4l-3-1-1 1h-2c12-2 18-3 18-5l1 1 4-1v-1l-30 1h-4l-2 1-1-1-8 2h-18a149 149 0 0 1 17-39h2l5-1h2l14-3h3l4-1 10-1 15-3v-1l-3-1c0-1-2-2-5-2v-1l3-1h8v-1h-5v-2h3l1-1-6-1a252 252 0 0 1-43 2l-1-1c7-16 11-24 13-24l-1 3v1l1-1c3-7 5-10 7-10 9-1-1-2 18-5l1 1 31-5v-1l-7 1v-1l2-1v1l2-1h2l6-1h5l1-2v-1h-4l1-1 8-1 4-1v1l2-1h1l-2 4h-1l-1-1c-10 27-14 40-23 61l-5 9 1 1c1 2 0 5-2 7l-8 20 1 6-1 1h-1l-2-2-3 7h1l2-3h3l-1 3v1l-1 3v1l4 1 3-1h12l4-2h11v-1 1h8v1h-2v1l2-1v1l-3 1-1-1-2 1h-2l1 1h2l8-1 3-1 1 1 1-1h3l7-1v-1 1l10-2h3v-1h-7l-7 1v-1h4l2-1c6 0 8 1 33-4l2-4a2 2 0 0 1-1 0l-7 1-1-1h4l4-1h-1zm-186 3h-1c-1-1 0-3 2-8h2l-3 8zm2-9l2-1-2 1zm24 19h-3 3zm-3-1c0 1-1 2-3 2h-5v-1l8-1zm23-110l-1 1v-1l1-1h2l-2 1zm27-5h1v1h-2l1-1zm-6 2h-3l7-2 1 1v1h-5zm3 10l4-1v1h-4zm5-4h2-2zm0-7v-1l5-1v1l-5 1zm3 10v-1h2l1 1h-3zm12-17l-2 1h-6l8-1zm-2 12v1h-4v-1h4zm6 3l-3-1-3 1h-3l-1-1h3l8-1h3v1l-4 1zm38-10h1l5-3c-2 6-4 10-7 13l-2-1 3-9zm-6 11l-2 2v-1l2-1zm-5 10l3-7v1c0 4-1 6-2 6v2l-1 3h-1v-3l1-2zm-1 6l-1 4h-1v-2l2-2zm-31 88h1v1l-1-1zm44 1h-3l6-1v1h-3zm-3-1zm0-7l-3 1v-1h3l3-1v1l4-1 1 1h-8zm12-1h-4l3-1v1h1zm0 0v-1h1l1 1h-2zm3 0v-1h2l1 1h-3zm5-1v-1h2v1h-2zm3 0v-1l1 1v-1l1 1h-2zm37-5zm1 0l-1-1v1l-1 1h2v-1zm2 2v1h2l-2-1z","fill":"#F9DC3E","key":1})]);
	}
	
	BabelIcon.displayName = "BabelIcon";
	
	BabelIcon.defaultProps = {"viewBox":"0 0 512 460","preserveAspectRatio":"xMinYMin meet"};
	
	module.exports = BabelIcon;
	
	BabelIcon.default = BabelIcon;


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function GaIcon (props) {
	    return React.createElement("svg",props,[React.createElement("style",{"key":0},".st0{fill:url(#SVGID_1_)}.st1{fill:url(#SVGID_2_)}.st2{clip-path:url(#SVGID_4_)}.st3{fill:#f57c00}.st4{fill:#ffc107}.st5{clip-path:url(#SVGID_6_);fill:url(#SVGID_7_)}.st6,.st7,.st8,.st9{opacity:.2;clip-path:url(#SVGID_9_);fill:#fff;enable-background:new}.st7,.st8,.st9{clip-path:url(#SVGID_11_)}.st8,.st9{clip-path:url(#SVGID_13_)}.st9{clip-path:url(#SVGID_15_);fill:#bf360c}.st10{fill:url(#SVGID_16_)}"),React.createElement("linearGradient",{"id":"SVGID_1_","gradientUnits":"userSpaceOnUse","y1":"77.32","x2":"152.1","y2":"77.32","gradientTransform":"matrix(1 0 0 -1 0 153.32)","key":1},[React.createElement("stop",{"offset":"0","stopColor":"#fff","stopOpacity":".1","key":0}),React.createElement("stop",{"offset":"1","stopColor":"#fff","stopOpacity":"0","key":1})]),React.createElement("path",{"className":"st0","d":"M139.8 0h-27.7c-6.7 0-12.2 5.5-12.2 12.2V48H59.8C53.3 48 48 53.3 48 59.9V100H11.9C5.3 100 0 105.3 0 111.9v28c0 6.6 5.3 11.9 11.9 12.1h128c6.7 0 12.2-5.5 12.2-12.2V12.2C152 5.5 146.5 0 139.8 0z","key":2}),React.createElement("linearGradient",{"id":"SVGID_2_","gradientUnits":"userSpaceOnUse","y1":"77.32","x2":"152.1","y2":"77.32","gradientTransform":"matrix(1 0 0 -1 0 153.32)","key":3},[React.createElement("stop",{"offset":"0","stopColor":"#fff","stopOpacity":".1","key":0}),React.createElement("stop",{"offset":"1","stopColor":"#fff","stopOpacity":"0","key":1})]),React.createElement("path",{"className":"st1","d":"M139.8 0h-27.7c-6.7 0-12.2 5.5-12.2 12.2V48H59.8C53.3 48 48 53.3 48 59.9V100H11.9C5.3 100 0 105.3 0 111.9v28c0 6.6 5.3 11.9 11.9 12.1h128c6.7 0 12.2-5.5 12.2-12.2V12.2C152 5.5 146.5 0 139.8 0z","key":4}),React.createElement("defs",{"key":5},React.createElement("path",{"id":"SVGID_3_","d":"M139.8 0h-27.5c-6.7 0-12.2 5.5-12.2 12.2V48h-40c-6.6 0-12 5.4-12 12v40H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h127.8c6.7 0 12.2-5.5 12.2-12.2V12.2C152 5.5 146.5 0 139.8 0z"})),React.createElement("clipPath",{"id":"SVGID_4_","key":6},React.createElement("use",{"xlinkHref":"#SVGID_3_","overflow":"visible"})),React.createElement("g",{"className":"st2","key":7},[React.createElement("path",{"className":"st3","d":"M139.8 0h-27.5c-6.7 0-12.2 5.5-12.2 12.2V152h39.7c6.7 0 12.2-5.5 12.2-12.2V12.2C152 5.5 146.5 0 139.8 0z","key":0}),React.createElement("image",{"width":"125","height":"129","xlinkHref":"D219C75C03CDCBF6.png","transform":"translate(-9 39)","overflow":"visible","opacity":".2","key":1}),React.createElement("path",{"className":"st4","d":"M48 60v40H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h88V48H60c-6.6 0-12 5.4-12 12z","key":2})]),React.createElement("defs",{"key":8},React.createElement("path",{"id":"SVGID_5_","d":"M139.8 0h-27.5c-6.7 0-12.2 5.5-12.2 12.2V48h-40c-6.6 0-12 5.4-12 12v40H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h127.8c6.7 0 12.2-5.5 12.2-12.2V12.2C152 5.5 146.5 0 139.8 0z"})),React.createElement("clipPath",{"id":"SVGID_6_","key":9},React.createElement("use",{"xlinkHref":"#SVGID_5_","overflow":"visible"})),React.createElement("linearGradient",{"id":"SVGID_7_","gradientUnits":"userSpaceOnUse","x1":"74.25","y1":"79.07","x2":"148.36","y2":"4.96","gradientTransform":"matrix(1 0 0 -1 0 153.32)","key":10},[React.createElement("stop",{"offset":"0","stopColor":"#bf360c","stopOpacity":".2","key":0}),React.createElement("stop",{"offset":"1","stopColor":"#bf360c","stopOpacity":".02","key":1})]),React.createElement("path",{"className":"st5","d":"M100 48v104h39.7c6.7 0 12.2-5.5 12.2-12.2V100L100 48z","key":11}),React.createElement("g",{"key":12},[React.createElement("defs",{"key":0},React.createElement("path",{"id":"SVGID_8_","d":"M139.8 0h-27.5c-6.7 0-12.2 5.5-12.2 12.2V48h-40c-6.6 0-12 5.4-12 12v40H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h127.8c6.7 0 12.2-5.5 12.2-12.2V12.2C152 5.5 146.5 0 139.8 0z"})),React.createElement("clipPath",{"id":"SVGID_9_","key":1},React.createElement("use",{"xlinkHref":"#SVGID_8_","overflow":"visible"})),React.createElement("path",{"className":"st6","d":"M60 49h40v-1H60c-6.6 0-12 5.4-12 12v1c0-6.6 5.4-12 12-12z","key":2})]),React.createElement("g",{"key":13},[React.createElement("defs",{"key":0},React.createElement("path",{"id":"SVGID_10_","d":"M139.8 0h-27.5c-6.7 0-12.2 5.5-12.2 12.2V48h-40c-6.6 0-12 5.4-12 12v40H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h127.8c6.7 0 12.2-5.5 12.2-12.2V12.2C152 5.5 146.5 0 139.8 0z"})),React.createElement("clipPath",{"id":"SVGID_11_","key":1},React.createElement("use",{"xlinkHref":"#SVGID_10_","overflow":"visible"})),React.createElement("path",{"className":"st7","d":"M12 101h36v-1H12c-6.6 0-12 5.4-12 12v1c0-6.6 5.4-12 12-12z","key":2})]),React.createElement("g",{"key":14},[React.createElement("defs",{"key":0},React.createElement("path",{"id":"SVGID_12_","d":"M139.8 0h-27.5c-6.7 0-12.2 5.5-12.2 12.2V48h-40c-6.6 0-12 5.4-12 12v40H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h127.8c6.7 0 12.2-5.5 12.2-12.2V12.2C152 5.5 146.5 0 139.8 0z"})),React.createElement("clipPath",{"id":"SVGID_13_","key":1},React.createElement("use",{"xlinkHref":"#SVGID_12_","overflow":"visible"})),React.createElement("path",{"className":"st8","d":"M139.8 0h-27.5c-6.7 0-12.2 5.5-12.2 12.2v1c0-6.7 5.5-12.2 12.2-12.2h27.5c6.7 0 12.2 5.5 12.2 12.2v-1C152 5.5 146.5 0 139.8 0z","key":2})]),React.createElement("g",{"key":15},[React.createElement("defs",{"key":0},React.createElement("path",{"id":"SVGID_14_","d":"M139.8 0h-27.5c-6.7 0-12.2 5.5-12.2 12.2V48h-40c-6.6 0-12 5.4-12 12v40H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h127.8c6.7 0 12.2-5.5 12.2-12.2V12.2C152 5.5 146.5 0 139.8 0z"})),React.createElement("clipPath",{"id":"SVGID_15_","key":1},React.createElement("use",{"xlinkHref":"#SVGID_14_","overflow":"visible"})),React.createElement("path",{"className":"st9","d":"M139.8 151H12c-6.6 0-12-5.4-12-12v1c0 6.6 5.4 12 12 12h127.7c6.7 0 12.2-5.5 12.2-12.2v-1c.1 6.7-5.4 12.2-12.1 12.2z","key":2})]),React.createElement("linearGradient",{"id":"SVGID_16_","gradientUnits":"userSpaceOnUse","x1":"50.969","y1":"102.289","x2":"149.295","y2":"3.963","gradientTransform":"matrix(1 0 0 -1 0 153.32)","key":16},[React.createElement("stop",{"offset":"0","stopColor":"#fff","stopOpacity":".1","key":0}),React.createElement("stop",{"offset":"1","stopColor":"#fff","stopOpacity":"0","key":1})]),React.createElement("path",{"className":"st10","d":"M139.8 0h-27.5c-6.7 0-12.2 5.5-12.2 12.2V48h-40c-6.6 0-12 5.4-12 12v40H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h127.8c6.7 0 12.2-5.5 12.2-12.2V12.2C152 5.5 146.5 0 139.8 0z","key":17})]);
	}
	
	GaIcon.displayName = "GaIcon";
	
	GaIcon.defaultProps = {"id":"Analytics","viewBox":"0 0 152.1 152","width":"2500","height":"2498"};
	
	module.exports = GaIcon;
	
	GaIcon.default = GaIcon;


/***/ })

};;
//# sourceMappingURL=1.render-page.js.map