import axios from "axios";
import { useState, useCallback } from "react";
import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const UseAllUsers = () => {
  const [users, setUsers] = useState<Array<User>>([]);
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({
          title: "failed to get user infomation",
          status: "error"
        });
      })
      .finally(() => setLoading(false));
  }, []);
  return { getUsers, users, loading };
};
