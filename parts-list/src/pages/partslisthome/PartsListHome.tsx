/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { getPartsList, updatePageNumber, updatePartQuantity } from '../../store/partslisthome/actions';
import { PartListModel, UpdatePartsQuantityModel } from '../../store/partslisthome/types';
import { RootState } from '../../store/RootState';
import { PaginationHelper } from '../../utils/paginationHelper';
import { Pagination } from '../common/Pagination';
import { PartCard } from '../common/PartCard';

export interface PartsListHomeProps {
    isLoading: boolean,
    isError: boolean, 
    partsList: PartListModel[],
    pageSize: number,
    currentPage: number, 
    totalCount: number,  
    updatedQuantityModel: UpdatePartsQuantityModel, 
    getPartsList: () => void, 
    updatePageNumber: (page: number) => void, 
    updatePartQuantity: (id: number, quantity: number, partName: string) => void
}



export class PartsListHome extends React.Component<PartsListHomeProps>{
  constructor (props: PartsListHomeProps) {
    super(props);
    this.state = {

    }
  }

  componentDidMount () {
    this.getData();
  }

  componentDidUpdate (prevProps: PartsListHomeProps) {
    if(prevProps.currentPage !== this.props.currentPage){
      this.getData(); 
    }
  }

  getData () {
    this.props.getPartsList(); 
  }


  handleUpdatingPartQuantity = (id: number, quantity: string, partName: string) => {
    const qtyInt = parseInt(quantity)
    this.props.updatePartQuantity(id, qtyInt, partName)
  }

  handlePageChange = (activePage: number) => {
    this.props.updatePageNumber(activePage)
  }

  render () {
    const { partsList, isLoading, isError,  pageSize, currentPage, totalCount, updatedQuantityModel } = this.props; 
    const { id, quantity, partName } = updatedQuantityModel; 
    const pagingStatus = PaginationHelper(pageSize, currentPage, totalCount);
    return (
        <div className='parts-list-container'>
          {isLoading && <Dimmer active inverted><Loader inverted content='Loading' /></Dimmer>}
          <h1 className="header">Fast Radius Parts List</h1>
          <Pagination
              pagingStatus={pagingStatus}
              pageSize={pageSize}
              currentPage={currentPage}
              totalCount={totalCount}
              onPageChange={this.handlePageChange}
            />  
          {!isLoading && partsList && partsList.map((part: PartListModel) => {
          return (  
            <div key={part.id} className='part-card-container'>
              <PartCard part={{id: part.id, part_file: part.part_file, quantity: part.quantity}} handleSubmittingQtyUpdate={this.handleUpdatingPartQuantity} />
            </div> 
          )      
          })}
          { id !== -1 &&
            <div className='part-qty-update-success-message'>
                <div className='success-message'>{`Part Number: ${partName} quantity successfully changed to ${quantity}`}</div>
            </div>
          }
          { isError &&
            <div className='part-qty-update-error-message'>
              <div className='error-message'>{`Error in updating quantity`}</div>
            </div>
          }
        </div>
    )
  }
}


const mapStateToProps = (state: RootState) => {
  return ({
    isLoading: state.PartsListHomeState.partsListHome.isLoading,
    isError: state.PartsListHomeState.partsListHome.isError, 
    partsList: state.PartsListHomeState.partsListHome.partsList, 
    pageSize: state.PartsListHomeState.partsListHome.pageSize,
    currentPage: state.PartsListHomeState.partsListHome.currentPage, 
    totalCount: state.PartsListHomeState.partsListHome.totalCount,  
    updatedQuantityModel: state.PartsListHomeState.updatedQuantityModel
  })
};

const mapDispatchToProps = (dispatch: any) => ({
  getPartsList: () => dispatch(getPartsList()), 
  updatePageNumber: (page: number) => dispatch(updatePageNumber(page)), 
  updatePartQuantity: (id: number, quantity: number, partName: string) => dispatch(updatePartQuantity(id, quantity, partName))
});


export default connect(mapStateToProps, mapDispatchToProps)(PartsListHome);
