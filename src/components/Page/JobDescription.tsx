import React from 'react'
import { JobDescriptionHeader } from '../Molecules/JobDescriptionHeader'
import { JobDescription as Body } from '../Molecules/JobDescription'

export const JobDescription = () => {
    return (
        <div>
            <JobDescriptionHeader />
            <Body />
        </div>
    )
}
