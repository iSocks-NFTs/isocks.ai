import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { endpoints } from "../utils/endpoints";
import { useRouter } from "next/router";

export default function useAuth() {
  const [cookies, setCookie, removeCookie] = useCookies(["isocks_store_user"]);
  const [token, setToken] = useState(cookies.isocks_store_user);
  const [user, setUser] = useState();
  const [billingInfo, setBillingInfo] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { getUser } = endpoints;
  const { push } = useRouter();

  function activeSession() {
    if (!token) {
      return false;
    }

    return true;
  }

  function logOut() {
    removeCookie("isocks_store_user", {
      path: "/",
      maxAge: 3600 * 24 * 3,
    });

    push("/store/login");
  }

  async function refreshData() {
    try {
      const response = await axios.get(getUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const { data } = response;

      const billingData = data.billingInfo;

      const remapData = billingData.map((address) => ({
        ...address,
        selected: address.isDefault ? true : false,
      }));

      setUser(response.data);
      setBillingInfo(remapData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setUser(null);
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    async function getUserProfile() {
      try {
        const response = await axios.get(getUser, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const billingData = response?.data?.billingInfo;
        const remapData = billingData?.map((address) => ({
          ...address,
          selected: address.isDefault ? true : false,
        }));

        setUser(response.data);
        setBillingInfo(remapData);
      } catch (error) {
        console.error(error);
        setUser(null);
        setError(true);
      } finally {
        setLoading(false);
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
    billingInfo,
    refreshData,
    logOut,
  };
}
