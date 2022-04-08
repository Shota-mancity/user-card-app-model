import React, { VFC, memo } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Button
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
  onClickLogout: ()=>void;
};

export const MenuDrawer: VFC<Props> = memo(props => {
  const { onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting, onClickLogout } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickHome} >TOP</Button>
            <Button w="100%" onClick={onClickUserManagement} >Users List</Button>
            <Button w="100%" onClick={onClickSetting} >Setting</Button>
            <Button w="100%" onClick={onClickLogout} >Logout</Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
