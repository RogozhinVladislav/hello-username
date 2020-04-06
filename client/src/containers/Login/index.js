import React, { useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { AuthContext } from "../../contexts/auth-context";
import { login } from "../../actions";

import styles from "./Login.module.css";

function Login({ login }) {
  const authHook = useContext(AuthContext);

  const onFinish = async (values) => login({ values, authHook });

  return (
    <div className={styles.loginWrap}>
      <h2 level={2}>Авторизация</h2>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Пожалуйста, введите логин!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Логин"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Пожалуйста, введите пароль!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={`login-form-button ${styles.loginButton}`}
          >
            Войти
          </Button>
          или <Link to="/register">создать аккаунт</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, {
  login,
})(Login);
