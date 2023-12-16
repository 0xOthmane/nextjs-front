import Link from "next/link";

export default function Login() {
  interface formDataType {
    [key: string]: FormDataEntryValue;
  }
  const responseBody: formDataType = {};

  const inputChangeHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData);
    formData.forEach(
      (value, property: string) => (responseBody[property] = value)
    );
    console.log(JSON.stringify(responseBody));
    //Form submission happens here
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(responseBody),
      });
      if (response.ok) {
        console.log(response);
      } else {
        // Handle form submission error
        console.log("Error");
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">Logo</h1>
        <form onSubmit={inputChangeHandler} className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800"
          >
            Email
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </label>
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
          >
            Password
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </label>
          <Link
            href="/forget"
            className="text-xs text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
          <button
            type="submit"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-700">
          Don&apos;t have an account?
          <Link
            href="/signup"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
