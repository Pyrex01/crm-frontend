import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APIStatus } from "../Network/api-handler";
import {
  CustomerDetailPayLoad,
  deleteCustomer,
  fetchCustomer,
  updateCustomer,
} from "../Network/customer-data";
import { ClipLoader } from "react-spinners";

export default function CustomerDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [state, setState] = useState<APIStatus>(APIStatus.LOADING);
  const [customer, setCustomer] = useState<CustomerDetailPayLoad>();
  const [edit, setEdit] = useState<boolean>(false);
  const [valuesChagnged, setValuesChagnged] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [score, setScore] = useState<number>();
  const [note, setNote] = useState<string>();

  useEffect(() => {
    fetchCustomer(id!)
      .then((data) => {
        setData(data);
        setState(APIStatus.COMPLETED);
      })
      .catch(() => {
        navigate("/dashboard");
      });
  }, [navigate, id]);

  const setData = (data: CustomerDetailPayLoad) => {
    setCustomer(data);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
    setAddress(data.address);
    setDescription(data.description);
    setScore(data.score);
    setNote(data.note);
  };

  useEffect(() => {
    let isChanges = false;
    isChanges = customer?.firstName !== firstName || isChanges;
    isChanges = customer?.lastName !== lastName || isChanges;
    isChanges = customer?.email !== email || isChanges;
    isChanges = customer?.address !== address || isChanges;
    isChanges = customer?.description !== description || isChanges;
    isChanges = customer?.score !== score || isChanges;
    isChanges = customer?.note !== note || isChanges;
    if (isChanges != valuesChagnged) {
      setValuesChagnged(isChanges);
    }
  }, [
    firstName,
    lastName,
    email,
    address,
    description,
    score,
    note,
    customer,
    valuesChagnged,
  ]);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const goBack = () => {
    navigate("/dashboard");
  };

  const onDelete = async () => {
    try {
      await deleteCustomer(id!);
    } catch (error) {
      /* empty */
    }
    navigate("/dashboard");
  };

  const onUpdate = async () => {
    console.log("updating customer....");
    try {
      const data = await updateCustomer({
        address,
        description,
        id,
        note,
        score,
      });
      setData(data);
      setEdit(false);
    } catch (error) {
      navigate("/dashboard");
    }
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
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={"text-gray-600 border-hidden outline-none"}
                        readOnly
                      />
                    </div>
                    <div>
                      <p className="text-gray-700 font-semibold">Last Name</p>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={"text-gray-600 border-hidden outline-none"}
                        readOnly
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Email</p>
                    <input
                      type="text"
                      value={email}
                      className={"text-gray-600 border-hidden outline-none"}
                      readOnly
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Score</p>
                    <input
                      type="number"
                      value={score}
                      onChange={(e) => setScore(parseInt(e.target.value))}
                      className={
                        edit
                          ? "text-gray-600 border border-gray-300 rounded px-2 mx-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          : "text-gray-600 border-hidden outline-none"
                      }
                      readOnly={!edit}
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Address</p>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className={
                        edit
                          ? "text-gray-600 border border-gray-300 rounded px-2 mx-1"
                          : "text-gray-600 border-hidden outline-none"
                      }
                      readOnly={!edit}
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-700 font-semibold">Description</p>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className={
                        edit
                          ? "text-gray-600 border border-gray-300 rounded px-2 mx-1"
                          : "text-gray-600 border-hidden outline-none"
                      }
                      readOnly={!edit}
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-700 font-semibold">Note</p>
                    <input
                      type="text"
                      value={
                        note
                          ? note
                          : "Some additional notes or comments go here..."
                      }
                      onChange={(e) => setNote(e.target.value)}
                      className={
                        edit
                          ? "text-gray-600 border border-gray-300 rounded px-2 mx-1"
                          : "text-gray-600 border-hidden outline-none"
                      }
                      readOnly={!edit}
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
                        disabled={!valuesChagnged}
                        type="button"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mx-1 rounded"
                        value={"Update"}
                        onClick={onUpdate}
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
