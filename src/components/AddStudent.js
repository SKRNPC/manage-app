function AddStudent() {
  return (
    <div class="bg-orange-100 min-h-screen flex items-center justify-center p-10">
      <div class="p-5 rounded bg-red-200 my-8 max-w-lg w-full">
        <div class="text-center mb-8">
          <h1 class="font-bold text-3xl mb-2">ADD NEW STUDENT</h1>
          <h3 class="font-bold text-xl">SAVE</h3>
          <p class="text-xs text-gray-700">Enter Student Information</p>
        </div>
        <form class="flex flex-col gap-4">
          <div>
            <label class="block text-sm font-bold">First Name</label>
            <input
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label class="block font-bold text-sm">Last Name</label>
            <input
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label class="block font-bold text-sm">Email</label>
            <input
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label class="block text-sm font-bold">Password</label>
            <input
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label class="block font-bold text-sm ">Phone</label>
            <input
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="text"
              name="phone"
              placeholder="Enter your phone"
            />
          </div>
          <div>
            <label class="block font-bold text-sm ">Age</label>
            <input
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              type="number"
              name="age"
              placeholder="Enter your age"
            />
          </div>
          <button
            type="submit"
            class="mt-4 px-4 py-2 bg-red-400 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
