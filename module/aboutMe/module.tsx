import BaseLayout from '@/components/layouts/baseLayout'
import React from 'react'
import Jumbotron from './Desription'
import Experience from './experience'


const AboutMeModule = () => {
    return (
        <BaseLayout>
            <Jumbotron />
            <Experience />
        </BaseLayout>
    )
}

export default AboutMeModule