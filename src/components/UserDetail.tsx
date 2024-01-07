export default function UserDetail() {
	return (
		<div className="min-h-screen p-6 bg-gray-200 flex items-center justify-center">
			<div className="container max-w-screen-lg mx-auto">
				<div>
					<h2 className="font-semibold text-xl text-gray-600">User Information</h2>
					<p className="text-gray-500 mb-6 text-sm">In Detail:</p>
					<div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
						{/* <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
						<div class="text-gray-600">
							<p class="font-medium text-lg">Personal Details</p>
							<p>User Details</p>
						</div> */}
						<div className="lg:col-span-2">
							<h2 className="text-2xl font-semibold mb-4">User Details</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-8">
								<div>
									<p className="text-gray-700 font-semibold">First Name Last Name</p>
									<p className="text-gray-600">John Doe</p>
								</div>
								<div>
									<p className="text-gray-700 font-semibold">Email</p>
									<p className="text-gray-600">johndoe@example.com</p>
								</div>
								<div>
									<p className="text-gray-700 font-semibold">Score</p>
									<p className="text-gray-600">85</p>
								</div>
								<div>
									<p className="text-gray-700 font-semibold">Address</p>
									<p className="text-gray-600">123 Main St, City</p>
								</div>
								<div className="col-span-2">
									<p className="text-gray-700 font-semibold">Description</p>
									<p className="text-gray-600">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante sit amet
										arcu placerat volutpat non eu libero.
									</p>
								</div>
								<div className="col-span-2">
									<p className="text-gray-700 font-semibold">Note</p>
									<p className="text-gray-600">Some additional notes or comments go here...</p>
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
				</div>
			</div>
		</div>
	);
}
