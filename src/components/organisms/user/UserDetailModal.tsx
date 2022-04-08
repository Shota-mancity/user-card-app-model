import React, { VFC, memo, useState, useEffect, ChangeEvent } from "react";
import {
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter
} from "@chakra-ui/react";
import {User} from "../../../types/api/user"
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  isAdmin?: boolean;
};

export const UserDetailModal: VFC<Props> = memo(props => {
  const { isOpen, onClose, user, isAdmin=false } = props;
  const [username, setUserName]=useState("")
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")

  useEffect(()=>{
    setUserName(user?.username ?? "")
    setName(user?.name ?? "")
    setEmail(user?.email ?? "")
    setPhone(user?.phone ?? "")
  }, [user])

  const onChangeUserName=(e: ChangeEvent<HTMLInputElement>)=>{
    // inputの型はreactのChangeEventに対してHTMLInpitElementを渡してあげる
    setUserName(e.target.value)
  }
  const onChangeName=(e: ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }
  const onChangeEmail=(e: ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }
  const onChangePhone=(e: ChangeEvent<HTMLInputElement>)=>{
    setPhone(e.target.value)
  }

  const onClickAttribute=()=>{
    alert()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>User info</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value={username} onChange={onChangeUserName} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>Mail</FormLabel>
              <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
            </FormControl>
            {
              isAdmin &&
              <ModalFooter>
              <PrimaryButton onClick={onClickAttribute} >Attribute</PrimaryButton>
              </ModalFooter>
              }
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
