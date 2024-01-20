import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { adminEndpoints } from "../utils/endpoints";
import { useRouter } from "next/router";

export default function useAuth() {
  const [cookies, setCookie, removeCookie] = useCookies(["isocks_store_admin"]);
  const [token, setToken] = useState(cookies.isocks_store_admin);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { getAdminProfile } = adminEndpoints;
  const { push } = useRouter();

  function activeSession() {
    if (!token) {
      return false;
    }

    return true;
  }

  function logOut() {
    removeCookie("isocks_store_admin", {
      path: "/",
      maxAge: 3600 * 24 * 3,
    });

    push("/store/login");
  }

  function deleteCookie() {
    removeCookie("isocks_store_admin", {
      path: "/",
      maxAge: 3600 * 24 * 3,
    });
  }

  useEffect(() => {
    async function getUserProfile() {
      try {
        const response = await axios.get(getAdminProfile, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        if (error.response.status === 401) {
          deleteCookie();
          push("/store");
        }
        setUser(null);
        setLoading(false);
        setError(true);
      }
    }

    getUserProfile();
  }, [token]);

  return {
    token,
    activeSession: activeSession(),
    user,
    loading,
    error,
    logOut,
  };
}
