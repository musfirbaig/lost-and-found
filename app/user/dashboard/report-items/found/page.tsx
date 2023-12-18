export default function ReportFoundItem() {
    return (
        <div>
            <div className="grid grid-cols-12 w-4/5 mx-auto mt-8 p-6 bg-white rounded shadow-md">
      {/* <form onSubmit={handleSubmit}> */}
      <form className="col-span-12">
        <h2 className="text-2xl font-semibold mb-4">Report Found Item</h2>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 text-sm font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-600 text-sm font-semibold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-600 text-sm font-semibold mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            // value={image}
            // onChange={(e) => setImage(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ownerName" className="block text-gray-600 text-sm font-semibold mb-2">
            Owner Name
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            // value={}
            // onChange={(e) => setOwnerName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
        </div>
    );
  }
  