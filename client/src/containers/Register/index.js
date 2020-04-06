import React, { useContext } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { register } from "../../actions";

function Register({ register }) {
  const history = useHistory();

  const onFinish = async (values) => {
    register({ values, onSuccess: () => history.push("/login") });
  };

  return (
    <div>
      <h2 level={2}>Регистрация</h2>
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
        <Form.Item
          name="repeat_password"
          rules={[
            { required: true, message: "Пожалуйста, повторите пароль!" },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("Введённые пароли не совпадают!");
              },
            }),
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Повторите пароль"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Создать аккаунт
          </Button>
          или <Link to="/login">войти</Link>
        </Form.Item>
      </Form>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, {
  register,
})(Register);
