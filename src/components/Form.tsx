import { useState } from "react";
import { createUser } from "../Network/customer-data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Form() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [note, setNote] = useState<string>("");

  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setDescription("");
    setScore(0);
    setNote("");
  };

  const submit = async () => {
	if(!firstName){
		toast.warning('First Name cannot be empty!',{
			position:"bottom-right"
		})
		return;
	}
	if(!lastName){
		toast.warning('Last Name cannot be empty!',{
			position:"bottom-right"
		})
		return;
	}
	if(!email){
		toast.warning('Email cannot be empty!',{
			position:"bottom-right"
		})
		return;
	}
	if(!address){
		toast.warning('Address cannot be empty!',{
			position:"bottom-right"
		})
		return;
	}
    try {
      await createUser({
        address,
        description,
        email,
        firstName,
        lastName,
        note,
        score,
      });
      reset();
    } catch (error) {
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="min-h-screen p-6 bg-gray-200 flex items-center justify-center"
      style={{ marginTop: "70px" }}
    >
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">User Creation</h2>
          <p className="text-gray-500 mb-6 text-sm">Enter User Details:</p>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                {/* <p class="font-medium text-lg">Personal Details</p> */}
                <p>Please fill out all the fields.</p>
              </div>
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="Harry"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="Potter"
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="email">Email Address</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      name="email"
                      id="email"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="harry@domain.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="score">Score</label>
                    <input
                      value={score}
                      onChange={(e) =>
                        e
                          ? setScore(parseInt(e.target.value))
                          : setScore(parseInt(0))
                      }
                      type="number"
                      name="score"
                      id="score"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      defaultValue=""
                      placeholder={"100"}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label htmlFor="address">Address / Street</label>
                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      type="text"
                      name="address"
                      id="address"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      defaultValue=""
                      placeholder="Number 4 Privet Drive"
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="city">Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="resize-none border rounded-md w-full h-32 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter user description..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="city">Note</label>
                    <textarea
                      className="resize-none border rounded-md w-full h-32 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Add Note here"
                      defaultValue={""}
                    />
                  </div>
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <input
                        type="button"
                        value={"Reset"}
                        onClick={reset}
                        className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded"
                      />

                      <input
                        type="button"
                        value={"Submit"}
                        onClick={submit}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
