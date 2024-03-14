import { useNavigate } from "react-router-dom";

function SignInScreen() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Form'un varsayılan submit işlemini engeller.
    // Burada giriş doğrulama işlemlerinizi gerçekleştirebilirsiniz.
    // Doğrulama başarılı ise, kullanıcıyı Home ekranına yönlendirin.
    navigate("/home");
  };

  return (
    <>
      <div className="bg-orange-100 min-h-screen flex items-center justify-center p-10">
        <div className="p-5 rounded-lg bg-red-200 my-8 max-w-lg w-full">
          <div className="text-center mb-8">
            <h1 className="font-bold text-3xl mb-2">MANAGE COURSES</h1>
            <h3 className="font-bold text-xl">SIGN IN</h3>
            <p className="text-xs text-gray-700">
              Enter your credentials to access your account
            </p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-bold text-sm">Email</label>
              <input
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-bold">Password</label>
              <input
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <button
              onSubmit={handleSubmit}
              type="submit"
              className="mt-4 px-4 py-2 bg-red-400 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignInScreen;
