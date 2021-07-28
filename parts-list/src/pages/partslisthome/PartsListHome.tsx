import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store/RootState';
import { PartCard } from '../common/PartCard';

export interface PartsListHomeProps {
    isLoading: boolean
}



export class PartsListHome extends React.Component<PartsListHomeProps>{
  constructor (props: PartsListHomeProps) {
    super(props);
    this.state = {

    }
  }

//   componentDidMount () {
//     this.getData();
//   }

//   componentDidUpdate (prevProps: PartsListProps) {

//   }

//   componentWillUnmount () {

//   }

//   getData () {

//   }


  render () {
    return (
      <Fragment>
          <h1 className="header">Parts List</h1>
          <PartCard />
      </Fragment>
    )
  }
}


const mapStateToProps = (state: RootState) => {
  return ({
    isLoading: state.PartsListHomeState.partsListModel.isLoading
  })
};

const mapDispatchToProps = (dispatch: any) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(PartsListHome);
