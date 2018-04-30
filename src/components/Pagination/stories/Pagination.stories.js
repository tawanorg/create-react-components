import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

// components
import Pagination from '../Pagination';

const story = storiesOf('Pagination', module);

const PER_PAGE = 10;
const TOTAL_COUNT = 100;

class PaginationExample extends React.Component {
  constructor(props) {
    super();
    this.state = {
      activePage: 1,
      itemsCountPerPage: PER_PAGE,
      totalItemsCount: TOTAL_COUNT,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleOnChangeItemsPerPage = this.handleOnChangeItemsPerPage.bind(this)
  }

  handleOnChangeItemsPerPage(event) {
    event.preventDefault()
    const pageNo = Number(event.target.value) || 0
    this.setState({
      itemsCountPerPage: pageNo === 0 ? this.state.totalItemsCount : pageNo
    });
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <Pagination
        activePage={this.state.activePage}
        itemsCountPerPage={this.state.itemsCountPerPage}
        totalItemsCount={this.state.totalItemsCount}
        onChangePage={this.handlePageChange}
        onChangeItemsPerPage={this.handleOnChangeItemsPerPage}
      />
    )
  }
}

story.add('Basic', () => (
  <React.Fragment>
    <PaginationExample />
  </React.Fragment>
));
