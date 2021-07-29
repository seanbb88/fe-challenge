/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { PartCard, PartCardProps } from '../../../pages/common/PartCard';

import {render, screen } from '@testing-library/react'

const defaultProps: PartCardProps = {
    part: {
        id: 1, 
        part_file: { id: 1, file_name: 'test.txt', units: '2'}, 
        quantity: "2"
    },
   handleSubmittingQtyUpdate: jest.fn()
}

test('renders the proper part name', () => {
  render(<PartCard {...defaultProps}  />)
  expect(screen.getByTestId('part-name')).toHaveTextContent("test.txt")
})

test('renders the proper part QTY', () => {
  render(<PartCard {...defaultProps}  />)
  expect(screen.getByTestId('part-qty')).toHaveTextContent("2")
})