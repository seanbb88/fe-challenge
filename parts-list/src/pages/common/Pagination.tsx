import React from 'react';
import cx from 'classnames'; 
import { Icon } from 'semantic-ui-react';

export interface PaginationProps {
  pagingStatus: string;
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
}

export const Pagination: React.FunctionComponent<PaginationProps> = (props: PaginationProps) => {

  const handlePageLeft = () => {
    if (props.currentPage > 1) {
      props.onPageChange(props.currentPage - 1);
    }
  }

  const handlePageRight = () => {
    if (props.currentPage * props.pageSize < props.totalCount) {
      props.onPageChange(props.currentPage + 1);
    }
  }

  return (
    <div className="pagination-container">
      <div className="paging-status">{props.pagingStatus}</div>
      <Icon id="pagination-left" 
        className={cx('pagination', { 'disabled' : props.currentPage === 1})}
        onClick={handlePageLeft}
        value='page-left'
        name="angle left" />
      <Icon id="pagination-right" className={cx('pagination', { 'disabled' : props.currentPage * props.pageSize >= props.totalCount})}
        value='page-right'
        onClick={handlePageRight}
        name="angle right" />
    </div>
  )
}

export default Pagination;
