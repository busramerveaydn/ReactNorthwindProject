import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from "yup";
import { Button } from 'semantic-ui-react';
import KodlamaioTextInput from '../utilities/customFormcontrols/KodlamaioTextInput';

export default function ProductAdd() {

    const initialValues = { productName: "", unitPrice: 10 }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")
    })

    return (
        //formik ile form oluşturucaz
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                <Form className="ui form">
                    <KodlamaioTextInput name="productName" placeholder="Ürün Adı"/>
                    <KodlamaioTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
                    
                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
