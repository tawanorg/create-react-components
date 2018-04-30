"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paginator = require("./Paginator");

var _Paginator2 = _interopRequireDefault(_Paginator);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _Page = require("./Page");

var _Page2 = _interopRequireDefault(_Page);

var _Flex = require("../Flex");

var _Flex2 = _interopRequireDefault(_Flex);

var _Box = require("../Box");

var _Box2 = _interopRequireDefault(_Box);

var _PaginationFlex = require("./PaginationFlex");

var _PaginationFlex2 = _interopRequireDefault(_PaginationFlex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "isFirstPageVisible",
    value: function isFirstPageVisible(has_previous_page) {
      var _props = this.props,
          hideDisabled = _props.hideDisabled,
          hideNavigation = _props.hideNavigation,
          hideFirstLastPages = _props.hideFirstLastPages;

      if (hideFirstLastPages || hideDisabled && !has_previous_page) return false;
      return true;
    }
  }, {
    key: "isPrevPageVisible",
    value: function isPrevPageVisible(has_previous_page) {
      var _props2 = this.props,
          hideDisabled = _props2.hideDisabled,
          hideNavigation = _props2.hideNavigation;

      if (hideNavigation || hideDisabled && !has_previous_page) return false;
      return true;
    }
  }, {
    key: "isNextPageVisible",
    value: function isNextPageVisible(has_next_page) {
      var _props3 = this.props,
          hideDisabled = _props3.hideDisabled,
          hideNavigation = _props3.hideNavigation;

      if (hideNavigation || hideDisabled && !has_next_page) return false;
      return true;
    }
  }, {
    key: "isLastPageVisible",
    value: function isLastPageVisible(has_next_page) {
      var _props4 = this.props,
          hideDisabled = _props4.hideDisabled,
          hideNavigation = _props4.hideNavigation,
          hideFirstLastPages = _props4.hideFirstLastPages;

      if (hideFirstLastPages || hideDisabled && !has_next_page) return false;
      return true;
    }
  }, {
    key: "buildPages",
    value: function buildPages() {
      var pages = [];
      var _props5 = this.props,
          itemsCountPerPage = _props5.itemsCountPerPage,
          pageRangeDisplayed = _props5.pageRangeDisplayed,
          activePage = _props5.activePage,
          prevPageText = _props5.prevPageText,
          nextPageText = _props5.nextPageText,
          firstPageText = _props5.firstPageText,
          lastPageText = _props5.lastPageText,
          totalItemsCount = _props5.totalItemsCount,
          onChangePage = _props5.onChangePage,
          activeClass = _props5.activeClass,
          itemClass = _props5.itemClass,
          itemClassFirst = _props5.itemClassFirst,
          itemClassPrev = _props5.itemClassPrev,
          itemClassNext = _props5.itemClassNext,
          itemClassLast = _props5.itemClassLast,
          activeLinkClass = _props5.activeLinkClass,
          disabledClass = _props5.disabledClass,
          hideDisabled = _props5.hideDisabled,
          hideNavigation = _props5.hideNavigation,
          linkClass = _props5.linkClass,
          linkClassFirst = _props5.linkClassFirst,
          linkClassPrev = _props5.linkClassPrev,
          linkClassNext = _props5.linkClassNext,
          linkClassLast = _props5.linkClassLast,
          hideFirstLastPages = _props5.hideFirstLastPages,
          getPageUrl = _props5.getPageUrl;


      var paginationInfo = new _Paginator2.default(itemsCountPerPage, pageRangeDisplayed).build(totalItemsCount, activePage);

      for (var i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
        pages.push(_react2.default.createElement(_Page2.default, {
          isActive: i === activePage,
          key: i,
          href: getPageUrl(i),
          pageNumber: i,
          pageText: i + "",
          onClick: onChangePage,
          itemClass: itemClass,
          linkClass: linkClass,
          activeClass: activeClass,
          activeLinkClass: activeLinkClass
        }));
      }

      this.isPrevPageVisible(paginationInfo.has_previous_page) && pages.unshift(_react2.default.createElement(_Page2.default, {
        key: "prev" + paginationInfo.previous_page,
        pageNumber: paginationInfo.previous_page,
        onClick: onChangePage,
        pageText: prevPageText,
        isDisabled: !paginationInfo.has_previous_page,
        itemClass: (0, _classnames2.default)(itemClass, itemClassPrev),
        linkClass: (0, _classnames2.default)(linkClass, linkClassPrev),
        disabledClass: disabledClass
      }));

      this.isFirstPageVisible(paginationInfo.has_previous_page) && pages.unshift(_react2.default.createElement(_Page2.default, {
        key: "first",
        pageNumber: 1,
        onClick: onChangePage,
        pageText: firstPageText,
        isDisabled: !paginationInfo.has_previous_page,
        itemClass: (0, _classnames2.default)(itemClass, itemClassFirst),
        linkClass: (0, _classnames2.default)(linkClass, linkClassFirst),
        disabledClass: disabledClass
      }));

      this.isNextPageVisible(paginationInfo.has_next_page) && pages.push(_react2.default.createElement(_Page2.default, {
        key: "next" + paginationInfo.next_page,
        pageNumber: paginationInfo.next_page,
        onClick: onChangePage,
        pageText: nextPageText,
        isDisabled: !paginationInfo.has_next_page,
        itemClass: (0, _classnames2.default)(itemClass, itemClassNext),
        linkClass: (0, _classnames2.default)(linkClass, linkClassNext),
        disabledClass: disabledClass
      }));

      this.isLastPageVisible(paginationInfo.has_next_page) && pages.push(_react2.default.createElement(_Page2.default, {
        key: "last",
        pageNumber: paginationInfo.total_pages,
        onClick: onChangePage,
        pageText: lastPageText,
        isDisabled: paginationInfo.current_page === paginationInfo.total_pages,
        itemClass: (0, _classnames2.default)(itemClass, itemClassLast),
        linkClass: (0, _classnames2.default)(linkClass, linkClassLast),
        disabledClass: disabledClass
      }));

      return pages;
    }
  }, {
    key: "render",
    value: function render() {
      var _props6 = this.props,
          itemsCountPerPage = _props6.itemsCountPerPage,
          pageRangeDisplayed = _props6.pageRangeDisplayed,
          totalItemsCount = _props6.totalItemsCount,
          activePage = _props6.activePage,
          name = _props6.name,
          itemsPerPageRange = _props6.itemsPerPageRange,
          onChangeItemsPerPage = _props6.onChangeItemsPerPage;


      var pages = this.buildPages();

      var _build = new _Paginator2.default(itemsCountPerPage, pageRangeDisplayed).build(totalItemsCount, activePage),
          first_result = _build.first_result,
          last_result = _build.last_result,
          total_results = _build.total_results;

      return _react2.default.createElement(
        _PaginationFlex2.default,
        { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "span",
            null,
            "Show"
          ),
          _react2.default.createElement(
            "select",
            { onChange: onChangeItemsPerPage },
            itemsPerPageRange.map(function (val, index) {
              return _react2.default.createElement(
                "option",
                {
                  value: val,
                  selected: itemsCountPerPage === val
                },
                val === 0 ? 'Show All' : val
              );
            })
          ),
          _react2.default.createElement(
            "span",
            null,
            name,
            " Per Page"
          )
        ),
        _react2.default.createElement(
          "span",
          null,
          "Showing Rows ",
          first_result + 1,
          "-",
          last_result + 1,
          " of ",
          total_results
        ),
        _react2.default.createElement(
          "ul",
          { className: (0, _classnames2.default)(this.props.innerClass, 'm-0 p-0') },
          pages
        )
      );
    }
  }]);

  return Pagination;
}(_react2.default.Component);

Pagination.propTypes = {
  activeClass: _propTypes2.default.string,
  activeLinkClass: _propTypes2.default.string,
  activePage: _propTypes2.default.number,
  disabledClass: _propTypes2.default.string,
  firstPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  getPageUrl: _propTypes2.default.func,
  hideDisabled: _propTypes2.default.bool,
  hideFirstLastPages: _propTypes2.default.bool,
  hideNavigation: _propTypes2.default.bool,
  innerClass: _propTypes2.default.string,
  itemClass: _propTypes2.default.string,
  itemClassFirst: _propTypes2.default.string,
  itemClassLast: _propTypes2.default.string,
  itemClassNext: _propTypes2.default.string,
  itemClassPrev: _propTypes2.default.string,
  itemsCountPerPage: _propTypes2.default.number,
  itemsPerPageRange: _propTypes2.default.object,
  lastPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  linkClass: _propTypes2.default.string,
  linkClassFirst: _propTypes2.default.string,
  linkClassLast: _propTypes2.default.string,
  linkClassNext: _propTypes2.default.string,
  linkClassPrev: _propTypes2.default.string,
  name: _propTypes2.default.string,
  nextPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  onChangeItemsPerPage: _propTypes2.default.func,
  onChangePage: _propTypes2.default.func.isRequired,
  pageRangeDisplayed: _propTypes2.default.number,
  prevPageText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  totalItemsCount: _propTypes2.default.number.isRequired
};

Pagination.defaultProps = {
  activeLinkClass: "active",
  activePage: 1,
  firstPageText: "First",
  getPageUrl: function getPageUrl(i) {
    return "#";
  },
  hideFirstLastPages: false,
  innerClass: "pagination",
  itemClass: "page-item",
  itemsCountPerPage: 10,
  itemsPerPageRange: Array.from(new Array(10), function (val, index) {
    return index * 5;
  }),
  lastPageText: "Last",
  linkClass: "page-link",
  name: null,
  nextPageText: "Next",
  onChangeItemsPerPage: null,
  pageRangeDisplayed: 5,
  prevPageText: "Previous"
};

exports.default = Pagination;