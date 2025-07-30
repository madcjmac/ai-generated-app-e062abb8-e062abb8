export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-6">Profile</h1>
      <div className="glass-effect rounded-xl p-6">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-700"></div>
          <div className="ml-4">
            <h2 className="text-white text-xl font-bold">User Name</h2>
            <p className="text-gray-400">user@example.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="glass-effect rounded-lg p-4">
            <p className="text-white font-medium">Songs Uploaded</p>
            <p className="text-2xl text-white font-bold">24</p>
          </div>
          <div className="glass-effect rounded-lg p-4">
            <p className="text-white font-medium">Playlists Created</p>
            <p className="text-2xl text-white font-bold">3</p>
          </div>
        </div>
      </div>
    </div>
  )
}