const FeedbackItem = ({ item, deleteFeedback, setEditData }) => {
  return (
    <div className="bg-white p-4 rounded shadow-lg w-full flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-indigo-600">{item.name}</h3>
        <p className="text-gray-600 text-sm">{item.email}</p>
      </div>

      <p className="text-gray-700">{item.feedback}</p>

      <p className="text-yellow-500 font-semibold">Rating: {"⭐".repeat(item.rating)}</p>

      <div className="flex gap-3 mt-2 justify-end">
        <button
          onClick={() => setEditData(item)}
          className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 transition-colors"
        >
          Edit
        </button>

        <button
          onClick={() => deleteFeedback(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackItem;
