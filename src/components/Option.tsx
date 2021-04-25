import React from 'react'
import { OptionsGroupCreationResponse } from '../PostsClient'

export default function Option(props: { optionData:  any}) {
    return (
        <div>
            Option Name: {props.optionData.body}
        </div>
    )
}
