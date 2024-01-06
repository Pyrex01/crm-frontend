export default function Dashboard() {
	return (
		<div className="dashboard" style={{"marginTop": "120px"} }>
		<div className="container my-12 mx-auto p-6">
			<h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>
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
						{/* Sample User Data */}
						<tr className="cursor-pointer hover:bg-blue-100">
							<td className="py-3 px-4">
								<img
									src="https://via.placeholder.com/40"
									alt="User Profile"
									className="rounded-full h-8 w-8"
								/>
							</td>
							<td className="py-3 px-4">John</td>
							<td className="py-3 px-4">Doe</td>
							<td className="py-3 px-4">john.doe@example.com</td>
							<td className="py-3 px-4">85</td>
						</tr>
						{/* Sample User Data */}
						<tr className="cursor-pointer hover:bg-blue-100">
							<td className="py-3 px-4">
								<img
									src="https://via.placeholder.com/40"
									alt="User Profile"
									className="rounded-full h-8 w-8"
								/>
							</td>
							<td className="py-3 px-4">Jane</td>
							<td className="py-3 px-4">Smith</td>
							<td className="py-3 px-4">jane.smith@example.com</td>
							<td className="py-3 px-4">72</td>
						</tr>
						{/* Add more rows for other users */}
					</tbody>
				</table>
			</div>
		</div>
		</div>

	);
}
