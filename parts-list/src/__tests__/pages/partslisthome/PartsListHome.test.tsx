/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { PartsListHome, PartsListHomeProps } from '../../../pages/partslisthome/PartsListHome';

import {render, screen } from '@testing-library/react'

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

test('shows loader on mount', () => {
  render(<PartsListHome {...defaultProps}  />)
  expect(screen.getByTestId('loader')).toHaveTextContent("Loading")
})

test('shows correct paging status', () => {
  render(<PartsListHome {...defaultProps}  />)
  expect(screen.getByTestId('paging-status')).toHaveTextContent("1 - 5 of 20")
})