import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CustomerRow, fetchCustomers } from "../Network/customer-data";

export default function Dashboard() {
  const navigate = useNavigate();
  const pageSize = 10;
  const [rowData, setRowData] = useState<CustomerRow[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchCustomers(currentPage, pageSize).then(setRowData);
  }, [navigate, currentPage]);

  const goToNext = () => {
    console.log("updating page");
    setCurrentPage(currentPage + 1);
  };
  const goToPrev = () => {
    console.log("updating page prev");
    setCurrentPage(currentPage - 1);
  };

  const gotoCreateUser = () => {
    navigate('/form')
  }

  return (
    <div className="dashboard" style={{ marginTop: "120px" }}>
      <div className="container my-12 mx-auto p-6">
        <div className="flex justify-between py-2">
        <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>
        <input
          type="button"
          disabled={rowData.length < pageSize}
          value={"Create User"}
          className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none"
          onClick={gotoCreateUser}
        />
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="w-full min-w-full">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Profile</th>
                <th className="py-3 px-4 text-left">First Name</th>
                <th className="py-3 px-4 text-left">Last Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {rowData.map((row) => (
                <Row customerRow={row} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8">
        <input
          type="button"
          disabled={currentPage === 1}
          value={"Prev"}
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none"
          onClick={goToPrev}
        />
        <div className="mx-4">{currentPage}</div>
        <input
          type="button"
          disabled={rowData.length < pageSize}
          value={"Next"}
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none"
          onClick={goToNext}
        />
      </div>
    </div>
  );
}

function Row({ customerRow }) {
  const navigate = useNavigate();
  const gotoCustomerDetail = () =>{
    navigate(`/customer/${customerRow.id}`)
  }
  return (
    <tr className="cursor-pointer hover:bg-blue-100" onClick={gotoCustomerDetail}>
      <td className="py-3 px-4">
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          className="rounded-full h-8 w-8"
        />
      </td>
      <td className="py-3 px-4">{customerRow.firstName}</td>
      <td className="py-3 px-4">{customerRow.lastName}</td>
      <td className="py-3 px-4">{customerRow.email}</td>
      <td className="py-3 px-4">{customerRow.score}</td>
    </tr>
  );
}
