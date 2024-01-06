export default function Form() {
	return (
		<div className="min-h-screen p-6 bg-gray-200 flex items-center justify-center" style={{"marginTop": "70px"}}>
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
											type="number"
											name="score"
											id="score"
											className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
											defaultValue=""
											placeholder={"100"}
										/>
									</div>
									<div className="md:col-span-3">
										<label htmlFor="address">Address / Street</label>
										<input
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
											<button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded">
												Reset
											</button>
											<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded">
												Submit
											</button>
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
