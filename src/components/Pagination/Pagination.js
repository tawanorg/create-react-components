import React, { Component } from "react";
import PropTypes from "prop-types";
import paginator from "./Paginator";
import cn from "classnames";

import Page from "./Page";
import Flex from '../Flex'
import Box from '../Box'
import PaginationFlex from './PaginationFlex'

class Pagination extends React.Component {
  isFirstPageVisible(has_previous_page) {
    const { hideDisabled, hideNavigation, hideFirstLastPages } = this.props;
    if (hideFirstLastPages || (hideDisabled && !has_previous_page)) return false;
    return true;
  }

  isPrevPageVisible(has_previous_page) {
    const { hideDisabled, hideNavigation } = this.props;
    if (hideNavigation || (hideDisabled && !has_previous_page)) return false;
    return true;
  }

  isNextPageVisible(has_next_page) {
    const { hideDisabled, hideNavigation } = this.props;
    if(hideNavigation || (hideDisabled && !has_next_page)) return false;
    return true;
  }

  isLastPageVisible(has_next_page) {
    const { hideDisabled, hideNavigation, hideFirstLastPages } = this.props;
    if (hideFirstLastPages || (hideDisabled && !has_next_page)) return false;
    return true;
  }

  buildPages() {
    const pages = [];
    const {
      itemsCountPerPage,
      pageRangeDisplayed,
      activePage,
      prevPageText,
      nextPageText,
      firstPageText,
      lastPageText,
      totalItemsCount,
      onChangePage,
      activeClass,
      itemClass,
      itemClassFirst,
      itemClassPrev,
      itemClassNext,
      itemClassLast,
      activeLinkClass,
      disabledClass,
      hideDisabled,
      hideNavigation,
      linkClass,
      linkClassFirst,
      linkClassPrev,
      linkClassNext,
      linkClassLast,
      hideFirstLastPages,
      getPageUrl
    } = this.props;

    const paginationInfo = new paginator(
      itemsCountPerPage,
      pageRangeDisplayed
    ).build(totalItemsCount, activePage);

    for (
      let i = paginationInfo.first_page;
      i <= paginationInfo.last_page;
      i++
    ) {
      pages.push(
        <Page
          isActive={i === activePage}
          key={i}
          href={getPageUrl(i)}
          pageNumber={i}
          pageText={i + ""}
          onClick={onChangePage}
          itemClass={itemClass}
          linkClass={linkClass}
          activeClass={activeClass}
          activeLinkClass={activeLinkClass}
        />
      );
    }

    this.isPrevPageVisible(paginationInfo.has_previous_page) &&
      pages.unshift(
        <Page
          key={"prev" + paginationInfo.previous_page}
          pageNumber={paginationInfo.previous_page}
          onClick={onChangePage}
          pageText={prevPageText}
          isDisabled={!paginationInfo.has_previous_page}
          itemClass={cn(itemClass, itemClassPrev)}
          linkClass={cn(linkClass, linkClassPrev)}
          disabledClass={disabledClass}
        />
      );

    this.isFirstPageVisible(paginationInfo.has_previous_page) &&
      pages.unshift(
        <Page
          key={"first"}
          pageNumber={1}
          onClick={onChangePage}
          pageText={firstPageText}
          isDisabled={!paginationInfo.has_previous_page}
          itemClass={cn(itemClass, itemClassFirst)}
          linkClass={cn(linkClass, linkClassFirst)}
          disabledClass={disabledClass}
        />
      );

    this.isNextPageVisible(paginationInfo.has_next_page) &&
      pages.push(
        <Page
          key={"next" + paginationInfo.next_page}
          pageNumber={paginationInfo.next_page}
          onClick={onChangePage}
          pageText={nextPageText}
          isDisabled={!paginationInfo.has_next_page}
          itemClass={cn(itemClass, itemClassNext)}
          linkClass={cn(linkClass, linkClassNext)}
          disabledClass={disabledClass}
        />
      );

    this.isLastPageVisible(paginationInfo.has_next_page) &&
      pages.push(
        <Page
          key={"last"}
          pageNumber={paginationInfo.total_pages}
          onClick={onChangePage}
          pageText={lastPageText}
          isDisabled={
            paginationInfo.current_page === paginationInfo.total_pages
          }
          itemClass={cn(itemClass, itemClassLast)}
          linkClass={cn(linkClass, linkClassLast)}
          disabledClass={disabledClass}
        />
      );

    return pages;
  }

  render() {
    const {
      itemsCountPerPage,
      pageRangeDisplayed,
      totalItemsCount,
      activePage,
      name,
      itemsPerPageRange,
      onChangeItemsPerPage,
    } = this.props
    
    const pages = this.buildPages();

    const { first_result, last_result, total_results } = new paginator(
      itemsCountPerPage,
      pageRangeDisplayed
    ).build(totalItemsCount, activePage);

    return (
      <PaginationFlex flexDirection="row" justifyContent="space-between" alignItems="center">
        <div>
          <span>Show</span>
          <select onChange={onChangeItemsPerPage}>
          {
            itemsPerPageRange.map((val, index) => {
              return (
                <option
                  value={val} 
                  selected={itemsCountPerPage === val}
                >
                  {val === 0 ? 'Show All' : val}
                </option>
              )  
            })
          }
          </select>
          <span>{name} Per Page</span>
        </div>
        <span>Showing Rows {first_result + 1}-{last_result + 1} of {total_results}</span>
        <ul className={cn(this.props.innerClass, 'm-0 p-0')}>{pages}</ul>
      </PaginationFlex>
    )
  }
}

Pagination.propTypes = {
  activeClass: PropTypes.string,
  activeLinkClass: PropTypes.string,
  activePage: PropTypes.number,
  disabledClass: PropTypes.string,
  firstPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  getPageUrl: PropTypes.func,
  hideDisabled: PropTypes.bool,
  hideFirstLastPages: PropTypes.bool,
  hideNavigation: PropTypes.bool,
  innerClass: PropTypes.string,
  itemClass: PropTypes.string,
  itemClassFirst: PropTypes.string,
  itemClassLast: PropTypes.string,
  itemClassNext: PropTypes.string,
  itemClassPrev: PropTypes.string,
  itemsCountPerPage: PropTypes.number,
  itemsPerPageRange: PropTypes.object,
  lastPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  linkClass: PropTypes.string,
  linkClassFirst: PropTypes.string,
  linkClassLast: PropTypes.string,
  linkClassNext: PropTypes.string,
  linkClassPrev: PropTypes.string,
  name: PropTypes.string,
  nextPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onChangeItemsPerPage: PropTypes.func,
  onChangePage: PropTypes.func.isRequired,
  pageRangeDisplayed: PropTypes.number,
  prevPageText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  totalItemsCount: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  activeLinkClass: "active",
  activePage: 1,
  firstPageText: "First",
  getPageUrl: (i) => "#",
  hideFirstLastPages: false,
  innerClass: "pagination",
  itemClass: "page-item",
  itemsCountPerPage: 10,
  itemsPerPageRange: Array.from(new Array(10), (val, index) => index * 5),
  lastPageText: "Last",
  linkClass: "page-link",
  name: null,
  nextPageText: "Next",
  onChangeItemsPerPage: null,
  pageRangeDisplayed: 5,
  prevPageText: "Previous",
};

export default Pagination
