const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center px-4">
      <form
        className="bg-white rounded-3xl shadow-xl max-w-md w-full p-10"
        onSubmit={(e) => {
          e.preventDefault();
          // Add login logic here
          alert("Logging in...");
        }}
      >
        <h2 className="text-4xl font-extrabold text-blue-800 mb-8 text-center drop-shadow-md">
          Welcome Back
        </h2>

        <div className="mb-8">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-semibold text-blue-700"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            className="w-full px-5 py-3 rounded-xl border border-blue-300 bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div className="mb-10">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-semibold text-blue-700"
          >
            Your Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            className="w-full px-5 py-3 rounded-xl border border-blue-300 bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-2xl py-3 shadow-lg shadow-blue-300/50 transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
