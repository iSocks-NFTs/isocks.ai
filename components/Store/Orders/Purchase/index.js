import axios from "axios";
import { useEffect, useState } from "react";
import { endpoints } from "../../../../utils/endpoints";
import useAuth from "../../../../hooks/useAuth";
import Toast from "awesome-toast-component";

const PurchaseOrder = ({ id }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { token } = useAuth();

  useEffect(() => {
    async function callGetOrder() {
      try {
        const { getOrderById } = endpoints;
        const response = await axios.get(getOrderById + id, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if(response && response.status === 200){
          setData(response.data);
        }
      } catch (error) {
        console.error(error);
        if (error && !error.response) {
          new Toast("Server Connection Failure...");
        }

        if (error && error.response) {
          const { status } = error.response;

          if (status === 404) {
            new Toast("Purchase Order Could not be located...");
          }

          if (status === 500) {
            new Toast("Server Failure... Something went wrong...");
          }
        }
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    callGetOrder();
  }, []);

  return (
    <div className="rounded-md bg-white text-[--primary-brand] py-3 md:w-4/6 w-5/6">
      <div className="w-full border-b p-2">
        <h3 className="text-2xl font-semibold">Purchase Record</h3>
      </div>
      {!loading ? <></> : <>Loading...</>}
      {error.response.status === 404 && (
        <div className="w-full h-[100px] flex items-center justify-center">
          <p className="text-xl font-semibold">
            Purchase Order Could not be located...
          </p>
        </div>
      )}
    </div>
  );
};

export default PurchaseOrder;
