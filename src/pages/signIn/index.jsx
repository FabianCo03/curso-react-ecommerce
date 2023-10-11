import Layout from "../../components/layout";

const SignIn = () => {
  return (
    <Layout>
      <div className="w-80 mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Iniciar Sesión
        </h2>
        <form>
          <div className="mb-4">
            <label className="block">Usuario:</label>
            <input
              type="text"
              className="rounded-lg border border-gray-300 w-full p-4 focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block">Contraseña:</label>
            <input
              type="password"
              className="rounded-lg border border-gray-300 w-full p-4 focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gray-300 text-gray-900 rounded-lg px-4 py-2 hover:bg-gray-200 focus:outline-none"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
