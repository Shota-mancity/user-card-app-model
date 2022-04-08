import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        if (res.data) {
            const isAdmin=res.data.id===10? true: false
          setLoginUser({...res.data, isAdmin});
          showMessage({ title: "Login successful", status: "success" });
          navigate("/home");
        } else {
          showMessage({ title: "User not found", status: "error" });
          setLoading(false);
        }
      })
      .catch(() => {
        showMessage({ title: "Can not login", status: "error" });
        setLoading(false);
      });
  }, []);

  return { login, loading };
  // カスタムフックから返却する変数
};
