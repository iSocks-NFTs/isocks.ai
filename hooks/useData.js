import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAdminAuth";
import { default as useAuthBuyer } from "./useAuth";
import { adminEndpoints, endpoints } from "../utils/endpoints";
import { useRouter } from "next/router";
import Toast from "awesome-toast-component";

export function useGallery() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { token } = useAuth();

  const { getGallery: endpoint } = adminEndpoints;

  useEffect(() => {
    async function getGallery() {
      try {
        const response = await axios.get(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Failed to Retrieve Gallery", error);
        if (error.response) {
          if (error.response.status === 500) {
            console.error("Server Error");
          }

          if (error.response.status === 401) {
            console.error("No Bearer Token");
          }
        }

        if (error && !error.response) {
          console.error("Server Unavailable");
        }

        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getGallery();
  }, []);

  return {
    data,
    setData,
    loading,
    error,
  };
}

export function useGetProductById() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const { query } = useRouter();
  const { id } = query;
  const { getProductById } = adminEndpoints;

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await axios.get(`${getProductById + id}`);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Failed to Retrieve Product", error);
        if (error.response) {
          if (error.response.status === 500) {
            console.error("Server Error");
          }

          if (error.response.status === 401) {
            console.error("No Bearer Token");
          }

          if (error.response.status === 404) {
            console.error("Product Not Found");
          }
        }

        if (error && !error.response) {
          console.error("Server Unavailable");
        }

        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, []);

  async function refreshData() {
    try {
      const response = await axios.get(`${getProductById + id}`);

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Failed to Retrieve Product", error);
      if (error.response) {
        if (error.response.status === 500) {
          console.error("Server Error");
        }

        if (error.response.status === 401) {
          console.error("No Bearer Token");
        }

        if (error.response.status === 404) {
          console.error("Product Not Found");
        }
      }

      if (error && !error.response) {
        console.error("Server Unavailable");
      }

      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { loading, data, error, refreshData, id };
}

export function useProduct() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const { getProducts } = adminEndpoints;

  useEffect(() => {
    async function getProductsCall() {
      try {
        const response = await axios.get(getProducts);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Failed to Retrieve Products", error);
        if (error.response) {
          if (error.response.status === 500) {
            console.error("Server Error");
          }

          if (error.response.status === 401) {
            console.error("No Bearer Token");
          }
        }

        if (error && !error.response) {
          console.error("Server Unavailable");
        }

        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getProductsCall();
  }, []);

  async function refreshTable() {
    try {
      const response = await axios.get(getProducts);

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Failed to Retrieve Products", error);
      if (error.response) {
        if (error.response.status === 500) {
          console.error("Server Error");
        }

        if (error.response.status === 401) {
          console.error("No Bearer Token");
        }
      }

      if (error && !error.response) {
        console.error("Server Unavailable");
      }

      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, refreshTable };
}

export function useGetOrder() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const { getOrders } = endpoints;
  const { token } = useAuthBuyer();

  async function getOrderCall() {
    try {
      const response = await axios.get(getOrders, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error("Failed to Retrieve Orders", error);
      if (error.response) {
        if (error.response.status === 500) {
          console.error("Server Error");
        }

        if (error.response.status === 401) {
          console.error("No Bearer Token");
        }
      }

      if (error && !error.response) {
        console.error("Server Unavailable");
      }

      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOrderCall();
  }, []);

  function refreshData() {
    getOrderCall();
  }

  return {
    loading,
    data,
    error,
    refreshData,
  };
}

export function useGetOrderById(id) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  const { getOrderById } = endpoints;
  const { token } = useAuthBuyer();

  useEffect(() => {
    async function getOrderByIdCall() {
      try {
        const response = await axios.get(getOrderById + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          setData(data);
        }
      } catch (error) {
        console.error("Failed to Retrieve Orders", error);
        if (error.response) {
          if (error.response.status === 500) {
            console.error("Server Error");
          }

          if (error.response.status === 401) {
            console.error("No Bearer Token");
          }
        }

        if (error && !error.response) {
          console.error("Server Unavailable");
        }

        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getOrderByIdCall();
  }, []);

  return {
    loading,
    data,
    error,
  };
}

export function useGetAddress(id) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();
  const { token } = useAuthBuyer();
  const { getBillingAddressById } = endpoints;

  async function apiCall() {
    try {
      const response = await axios.get(getBillingAddressById + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error(error);
      if (error && !error.response) {
        new Toast("Server Error");
      }

      if (error && error.response) {
        if (error.response.status === 404) {
          new Toast("Address Not Found");
        }
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    apiCall();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
