import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { useHttp } from '../../hooks'
import { AuthContext } from '../../contexts/auth-context'

import styles from './styles'

function Login() {
  const { loading, error, request } = useHttp();
  const auth = useContext(AuthContext)

  const onFinish = async values => {
    console.log('Received values of form: ', values);
    try {
      const data = await request('/auth/login', 'POST', { ...values })
    } catch (error) {
      
    }
  };

  return (
    <div css={styles.page}>
      <h2 level={2}>Авторизация</h2>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Пожалуйста, введите логин!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Войти
        </Button>
        или <Link to="/register">создать аккаунт</Link>
      </Form.Item>
    </Form>
    </div>
  )
}

export default Login
