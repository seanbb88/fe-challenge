import React from 'react';
import { Formik } from 'formik';
import *  as yup from 'yup';
import { Form } from 'semantic-ui-react';



// export interface PartCardProps {

// }


export class PartCard extends React.Component{

  handleSubmit = async (values: any) => {
      console.log(values)
  }


  render () {

    const initialValues = {
      quantity: '',
    }

    return (
      <div className='part-card-container'>
          <div>Its a Part</div>
          <Formik
            initialValues={initialValues}
            validateOnMount={true}
            //validationSchema={this.getSchema(dataTypeId)}
            onSubmit={(values) => this.handleSubmit(values)}
          >
            {props => {
              const { setFieldValue } = props;

              return (
                <Form className="part-card-forms" onSubmit={props.submitForm}>
 
                </Form>
              )
            }}
          </Formik>
      </div>
    )
  }
}


// const mapStateToProps = (state: RootState) => ({

// })




// const mapDispatchToProps = (dispatch: any) => ({

// });

export default (PartCard);
