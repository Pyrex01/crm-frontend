import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIStatus } from "../Network/api-handler";
import {
  CustomerDetailPayLoad,
  deleteCustomer,
  fetchCustomer,
} from "../Network/customer-data";
import { ClipLoader } from "react-spinners";

export default function CustomerDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [state, setState] = useState<APIStatus>(APIStatus.LOADING);
  const [customer, setCustomer] = useState<CustomerDetailPayLoad>();
  const [edit, setEdit] = useState<boolean>(false);
  const [valuesChagnged, setValuesChagnged] = useState<boolean>(false);

  const [fistName, setFistName] = useState<boolean>(false);
  const [lastName, setLastName] = useState<boolean>(false);
  const [email, setEmail] = useState<boolean>(false);
  const [address, setAddress] = useState<boolean>(false);
  const [description, setDescription] = useState<boolean>(false);
  const [score, setScore] = useState<boolean>(false);
  const [note, setNote] = useState<boolean>(false);

  useEffect(() => {
    fetchCustomer(id!)
      .then((data) => {
        setCustomer(data);
        setState(APIStatus.COMPLETED);
      })
      .catch(() => {
        navigate("/dashboard");
      });
  }, [navigate, id]);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const goBack = () => {
    navigate("/dashboard");
  };

  const onDelete = async () => {
    try {
      await deleteCustomer(id!);
    } catch (error) { /* empty */ }
    navigate("/dashboard");
  };
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
                  <div className="flex ">
                    <div>
                      <p className="text-gray-700 font-semibold">First Name</p>
                      <input
                        type="text"
                        value={customer?.firstName}
                        className={
                          edit
                            ? "text-gray-600 border border-gray-300 rounded px-2 mx-1 px-2 mx-1"
                            : "text-gray-600 border-hidden outline-none"
                        }
                      />
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold">Last Name</p>
                      <input
                        type="text"
                        value={customer?.lastName}
                        className={
                          edit
                            ? "text-gray-600 border border-gray-300 rounded px-2 mx-1"
                            : "text-gray-600 border-hidden outline-none"
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Email</p>
                    <input
                      type="text"
                      value={customer?.email}
                      className={
                        edit
                          ? "text-gray-600 border border-gray-300 rounded px-2 mx-1"
                          : "text-gray-600 border-hidden outline-none"
                      }
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Score</p>
                    <input
                      type="text"
                      value={customer?.score}
                      className={
                        edit
                          ? "text-gray-600 border border-gray-300 rounded px-2 mx-1"
                          : "text-gray-600 border-hidden outline-none"
                      }
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Address</p>
                    <input
                      type="text"
                      value={customer?.address}
                      className={
                        edit
                          ? "text-gray-600 border border-gray-300 rounded px-2 mx-1"
                          : "text-gray-600 border-hidden outline-none"
                      }
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-700 font-semibold">Description</p>
                    <input
                      type="text"
                      value={customer?.description}
                      className={
                        edit
                          ? "text-gray-600 border border-gray-300 rounded px-2 mx-1"
                          : "text-gray-600 border-hidden outline-none"
                      }
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-700 font-semibold">Note</p>
                    <input
                      type="text"
                      value={
                        customer?.description
                          ? customer.description
                          : "Some additional notes or comments go here..."
                      }
                      className={
                        edit
                          ? "text-gray-600 border border-gray-300 rounded px-2 mx-1"
                          : "text-gray-600 border-hidden outline-none"
                      }
                    />
                  </div>
                </div>
                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-center">
                    <input
                      type="button"
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-1 rounded"
                      value={"Delete"}
                      onClick={onDelete}
                    />
                    <input
                      type="button"
                      className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded"
                      value={"Back"}
                      onClick={goBack}
                    />

                    <input
                      type="button"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded"
                      value={"Edit"}
                      onClick={toggleEdit}
                    />
                    {valuesChagnged ? (
                      <input
                        disabled={valuesChagnged}
                        type="button"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-1 rounded"
                        value={"Update"}
                        onClick={toggleEdit}
                      />
                    ) : (
                      <></>
                    )}
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
