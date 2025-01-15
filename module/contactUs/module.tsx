import BaseLayout from '@/components/layouts/baseLayout'
import React from 'react'
import Jumbotron from './jumbotron'
import Form from './form'

const ContactUsModule = () => {
    return (
        <BaseLayout>
            <Jumbotron />
            <Form />
        </BaseLayout>
    )
}

export default ContactUsModule