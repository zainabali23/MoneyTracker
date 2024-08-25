import { Form, Input, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../resources/authentication.css'
import Spinner from '../components/Spinner'
import axios from 'axios'

const Register = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const onFinish = async (value)=>{
        try {
            setLoading(true)
            await axios.post('/api/users/register',value)
            message.success('Registration Successfull')
            setLoading(false)
        } catch (error) {
            message.error('something went wrong')
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('expense-tracker')){
             navigate('/')
        }
    },[])

    return (
        <div className='register'>
           {loading && <Spinner/>}
            <div className='row justify-content-center align-items-center w=100,h=100'>
                <div className='col-md-5'>
                   <div className='lottie'>
                      <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_06a6pf9i.json" background="transparent" speed="1" loop autoplay></lottie-player>
                   </div>
                </div>
                <div className='col-md-5'>
                    <Form layout='vertical' onFinish = {onFinish}>
                        <h1>EXPENCE TRACKER / REGISTER</h1>
                        <hr></hr>
                        <Form.Item label='name' name='name'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='Email' name='email'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='password' name='password'>
                            <Input type='password'/>
                        </Form.Item>

                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to='/login'>Already Register , Click Here To Login</Link>
                            <button className='primary' type = 'submit'>REGISTER</button>
                        </div>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default Register