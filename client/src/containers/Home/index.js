import React, { useEffect, useContext, useMemo } from "react";
import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "../../actions";
import { List, Avatar } from "antd";
import { PageHeader, Button, Descriptions } from "antd";

import { AuthContext } from "../../contexts/auth-context";

function Home({ fetchUsers, users, deleteUser }) {
  const authHook = useContext(AuthContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  const currentUser = useMemo(
    () => users && users.find((user) => user.id === authHook.userId),
    [users]
  );

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        title={`Привет, ${currentUser && currentUser.username}`}
        extra={[
          <Button key="1" type="primary" onClick={authHook.logout}>
            Выйти из аккаунта
          </Button>,
        ]}
      ></PageHeader>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="list-remove" onClick={() => deleteUser(item.id)}>
                Удалить
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="javascript:void(0)">{item.username}</a>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

const mapStateToProps = ({ users }) => {
  console.log('users', users)
  return {
    users,
  };
};

export default connect(mapStateToProps, { fetchUsers, deleteUser })(Home);
