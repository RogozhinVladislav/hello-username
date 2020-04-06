import React, { useEffect, useContext, useMemo } from "react";
import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "../../actions";
import { List, Avatar, PageHeader, Button } from "antd";

import { AuthContext } from "../../contexts/auth-context";

import styles from "./Home.module.css";

function Home({ fetchUsers, users, deleteUser }) {
  const authHook = useContext(AuthContext);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const currentUser = useMemo(
    () => users && users.find((user) => user.id === authHook.userId),
    [users, authHook.userId]
  );

  return (
    <div className={`site-page-header-ghost-wrapper ${styles.homeWrap}`}>
      <PageHeader
        title={`Привет, ${currentUser && currentUser.username}!`}
        extra={[
          <Button key="1" type="primary" onClick={authHook.logout}>
            Выйти из аккаунта
          </Button>,
          <Button
            key="1"
            type="primary"
            onClick={() =>
              deleteUser({
                id: currentUser.id,
                onSuccess: () => authHook.logout(),
              })
            }
          >
            Удалить аккаунт
          </Button>,
        ]}
      ></PageHeader>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(item) => (
          <List.Item
            actions={[
              currentUser && currentUser.id !== item.id && (
                <a key="list-remove" onClick={() => deleteUser({ id: item.id })}>
                  Удалить
                </a>
              ),
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<span>{item.username}</span>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps, { fetchUsers, deleteUser })(Home);
