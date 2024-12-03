import useStorage from "../hooks/useStorage"; 

const LocalStorage = () => {
  const [name, setName, removeName] = useStorage("name", "Default Name", "session");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white">
      <div className="bg-gray-600 p-8 rounded-xl shadow-xl w-full max-w-lg text-center space-y-6">
        <h1 className="text-3xl font-semibold mb-4 text-black">LocalStorage Example</h1>
        
        <p className="text-xl mb-6 text-black">Stored Name: <span className="font-bold text-blue-600">{name}</span></p>
        
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 mb-6 w-full rounded-md border border-gray-800 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
        />

        <div className="space-x-4">
          <button
            onClick={removeName}
            className="bg-red-500 text-black p-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 ease-in-out"
          >
            Remove Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocalStorage;
