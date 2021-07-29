import React, { useState } from 'react';
import { Formik } from 'formik';
import cx from 'classnames'; 
import { Form } from 'semantic-ui-react';
import { PartListModel } from '../../store/partslisthome/types';


export interface PartCardProps {
  part: PartListModel; 
  handleSubmittingQtyUpdate: (id: number, quantity: string, partName: string) => void; 
}

export const PartCard: React.FunctionComponent<PartCardProps> = (props: PartCardProps) => {

  const [updatedQty, setUpdatedQty] = useState('');

  const initialValues = {
    quantity: '',
  }

  const handleSubmit = async (values: any) => {
    props.handleSubmittingQtyUpdate(props.part.id, values.quantity, props.part.part_file.file_name)
    setUpdatedQty("")
  }
  console.log(props.part)
  const partName = props.part.part_file.file_name; 
  const partQty = props.part.quantity; 
  return (
    <div className='part-card'>
      <div className="part-name-container">
        <div className="label">Part Name</div>
        <div className="part-name">{partName}</div>
      </div>      
      <div className={cx("part-quantity-container", { "hidden" : updatedQty === "" })}>
        <div className="label">Original Qty</div>
        <div className="part-quantity">{partQty}</div>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        {props => {
          return (
            <Form className="part-card-form" onSubmit={props.submitForm}>
              <Form.Input
                name="quantity"
                className="quantity-input"
                label="Quantity"
                value={updatedQty}
                onChange={(e, d) => {
                  props.setFieldValue('quantity', d.value)
                  setUpdatedQty(d.value)
                }}
                />
                <button className="submit-button" type="submit">Save Quantity</button>
            </Form>
          )
        }}
      </Formik>
  </div>
  )
}