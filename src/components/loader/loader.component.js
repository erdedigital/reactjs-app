import React from 'react'
import { LoaderWrapper } from './loader.style'

const Loader = () => {
    return (
        <LoaderWrapper>
            <img src={require('../../assets/images/loader.gif')} alt="loader" />
        </LoaderWrapper>
    )
}

export default Loader