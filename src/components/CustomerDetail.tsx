import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIStatus } from "../Network/api-handler";
import { CustomerDetailPayLoad, fetchCustomer } from "../Network/customer-data";
import { ClipLoader } from "react-spinners";

export default function CustomerDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [state, setState] = useState<APIStatus>(APIStatus.LOADING);
  const [customer, setCustomer] = useState<CustomerDetailPayLoad>();
  useEffect(() => {
    fetchCustomer(id!)
      .then((data) => {
        setCustomer(data);
        setState(APIStatus.COMPLETED);
      })
      .catch(() => {
        navigate("/dashboard");
      });
  }, [navigate]);
  return (
    <div className="min-h-screen p-6 bg-gray-200 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            User Information
          </h2>
          <p className="text-gray-500 mb-6 text-sm">In Detail:</p>
          {state === APIStatus.COMPLETED ? (
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">User Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
                  <div>
                    <p className="text-gray-700 font-semibold">
                      {customer?.firstName}
                    </p>
                    <p className="text-gray-600">{customer?.lastName}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Email</p>
                    <p className="text-gray-600">{customer?.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Score</p>
                    <p className="text-gray-600">{customer?.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Address</p>
                    <p className="text-gray-600">{customer?.address}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-700 font-semibold">Description</p>
                    <p className="text-gray-600">
                      {customer?.description}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-700 font-semibold">Note</p>
                    <p className="text-gray-600">
                      {customer?.description ? customer.description : "Some additional notes or comments go here..."}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded">
                      Back
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <ClipLoader
                color="blue"
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
