import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { actionsServices } from '../../services'
import {
    connect,
    useDispatch,
    useSelector
} from 'react-redux'
import { setIsLoading, setUserLogin } from '../../redux/actions'
import { LoginWrapper, LoginBox, LoginIcon } from './login.style'
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const userLogin = useSelector( state => state.userLogin || null);

    // state
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmit, setIsSubmit] = useState(false)
    const [loginMessage, setLoginMessage] = useState('')

    // console.log(persiststore.getState())



    const handleOnLogin = async(e) => {
        e.preventDefault()

        if(isSubmit === false) {
            setIsSubmit(true)
            await dispatch(setIsLoading(true))
            const params = { url: '/gtw/login', payload: {email, password} }
            await actionsServices.POST(params)
            .then( async user => {
                console.log('user', user);
                await dispatch(setUserLogin(user))
                await dispatch(setIsLoading(false))
                history.push("/dashboard");
            } )
            .catch(err => {
                if(err) console.log('[err]', err)
                dispatch(setIsLoading(false))
                setIsSubmit(false)
                if(err.status === 'error'){
                    setLoginMessage(err.message)
                }
                else{
                    if(err.message){
                        setLoginMessage(err.message)
                    }
                    setLoginMessage('Periksa sambungan internet anda!') 
                }
            })
        }
    }

    useEffect(() => {
        userLogin && history.push("/dashboard");
    })

    // console.log('[email]', email)
    // console.log('[password]', password)
    // console.log('[isSubmit]', isSubmit)
    // console.log('[env]', process.env)

    return (
        <LoginWrapper>
            <LoginBox>
                <LoginIcon src={`${process.env.PUBLIC_URL}/femisale.png`} />
                <Form onSubmit={handleOnLogin}>
                    {
                        loginMessage !== '' && (
                            <Alert color="danger" isOpen={true} toggle={() => setLoginMessage('')}>
                                {loginMessage}
                            </Alert>
                        )
                    }
                    <FormGroup>
                        <Label for="hendleEmail">Email</Label>
                        <Input type="email" name="email" id="hendleEmail" required  placeholder="email" value={email} onChange={({ target }) => setEmail(target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="hendlePassword">Password</Label>
                        <Input type="password" name="password" id="hendlePassword" required placeholder="password" value={password} onChange={({ target }) => setPassword(target.value)}/>
                    </FormGroup>
                    <Button className="float-right" type="submit">Submit</Button>
                </Form>
            </LoginBox>
        </LoginWrapper>
    )
}

export default connect()(Login)