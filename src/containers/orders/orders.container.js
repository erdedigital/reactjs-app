import React from 'react'

import {
    connect,
    useSelector
} from 'react-redux'

const Orders = () => {
    const userLogin = useSelector(state => state.userLogin || null);
    return (
        <div>
            <div>Halaman Orders {userLogin ? userLogin.email : ''} {userLogin ? userLogin.plan : ''}  </div>
        </div>
    )
}

export default connect()(Orders)