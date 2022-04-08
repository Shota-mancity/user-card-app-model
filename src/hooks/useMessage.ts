import { useCallback } from "react";
import { useToast } from "@chakra-ui/toast";

type Props={
    title: string;
    status: "info" | "warning" | "success" | "error";
}

export const useMessage=()=>{
    const toast=useToast()
    const showMessage=useCallback((props: Props)=>{
        const {title, status}=props

        toast({
            title,
            status,
            // toastではstatusの種類によって文字色等が変化する
            position: "top",
            duration: 2000,
            isClosable: true
        })
    }, [])

    return {showMessage}
}