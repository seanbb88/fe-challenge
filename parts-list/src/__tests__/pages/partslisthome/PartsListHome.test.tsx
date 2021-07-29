/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, ShallowWrapper } from 'enzyme';
import { PartsListHome, PartsListHomeProps } from '../../../pages/partslisthome/PartsListHome';


configure({ adapter: new Adapter() });

describe('Parts List Home ', () => {

  const defaultProps: PartsListHomeProps = {
    isLoading: true, 
    isError: false, 
    partsList: [], 
    pageSize: 5, 
    currentPage: 1,
    totalCount: 20, 
    updatedQuantityModel: {
        id: -1, 
        quantity: 33, 
        partName: 'part'
    }, 
    getPartsList: jest.fn(), 
    updatePageNumber: jest.fn(), 
    updatePartQuantity: jest.fn()
  }

  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<PartsListHome {...defaultProps} />);
  });

  it('Shows a dimmer if loading', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('Loader')).toContain('something')
  })

})
