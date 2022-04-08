import React, { VFC, memo, useEffect, useCallback } from "react";
import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure
} from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { UseAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = UseAllUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();
  // isOpen: boolean, onClose, onOpen: 関数
  const { onSelectUser, selectedUser } = useSelectUser();
  const {loginUser}=useLoginUser()

  console.log(loginUser)

  useEffect(() => {
    getUsers();
  }, []);

  const onClickModal = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  }, [users, onSelectUser, onOpen]);
  // propsとして渡す関数は毎回再作成すると効率が悪いためメモ化
  // 第２引数に[]を設定する場合、関数を最初に作成した時点の内容を保持されるのでusersはずっと空配列のまま
  // usersを第２引数に設定した場合は、一覧取得時にusersが更新されるタイミングでonClick内のusersも最新化

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }} justify="center" >

          {users.map(user => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                name={user.username}
                fullName={user.name}
                onClick={onClickModal}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} user={selectedUser} isAdmin={loginUser?.isAdmin} />
    </>
  );
});
