const Body = () => {
  return (
    <main className="bg-[#FAFAF8]  py-8">
      <div className="container mx-auto">
        <form className="flex space-x-4 items-center justify-center">
          <input
            type="text"
            placeholder="e.g. oregano"
            className="border-2 border-gray-400 rounded-md flex-grow px-4 py-2 min-w-32 max-w-lg shadow-sm"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white py-2 rounded-md px-4 capitalize shadow-sm"
          >
           + Add ingredient
          </button>
        </form>
      </div>
    </main>
  );
};

export default Body;
