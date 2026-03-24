import admin from '../../public/admin.svg'

const Admin = () => {
  return (
    <div className="flex bg-gray-100 p-6 rounded-xl shadow-md justify-between items-center mb-4 relative overflow-hidden">
      {/* Text Section */}
      <div className="z-10">
        <h1 className="text-3xl font-bold text-gray-800">Hello SmartFuture 👋</h1>
        <p className="text-gray-500 mt-2 text-sm">It's good to see you again</p>
      </div>

      {/* Image Section */}
      <div className="shrink-0 z-10">
        <img
          src={admin}
          alt="admin"
          className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white"
        />
      </div>

      {/* Optional Background Circle for Style */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-30"></div>
    </div>
  )
}

export default Admin;