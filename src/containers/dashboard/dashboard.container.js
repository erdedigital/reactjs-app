import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

import {
    connect,
    useSelector
} from 'react-redux'


import { DashboardWrapper } from './dashboard.style'

const Dashboard = () => {
    const userLogin = useSelector( state => state.userLogin || null);
    
    const history = useHistory();

    useEffect(() => {
        !userLogin && history.push("/login");
    }, [])

    return (
        <DashboardWrapper>
            <div>Selamat Datang {userLogin ? userLogin.email : ''} {userLogin ? userLogin.plan : ''}  </div>
        </DashboardWrapper>
    )
}

export default connect()(Dashboard)