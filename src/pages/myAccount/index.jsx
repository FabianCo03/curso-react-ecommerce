import Layout from '../../components/layout'

const MyAccount = () => {
  return (
    <Layout>
      <h2 className="font-medium text-xl">Mi cuenta</h2>
      <div className="w-80 mx-auto mt-8">
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Tenemos tu info!</h3>
            <p className="font-light">Fabián Orjuela</p>
            <p className="font-light">fabianormo@outlook.com</p>
            <p className="font-light">Cll 130</p>
            <div className="flex justify-center items-center">
              <img
                className="w-10"
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt="profile photo"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MyAccount
