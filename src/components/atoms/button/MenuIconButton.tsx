import React, { VFC, memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props={
    onOpen: ()=> void;
    // onOpenは引数と返却値の無いただの関数
}

export const MenuIconButton: VFC<Props>=memo((props)=>{
    const {onOpen}=props
    return(
        <IconButton
        aria-label="menu button"
        icon={<HamburgerIcon />}
        size="sm"
        variant="unstyled"
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
      />

    )
})