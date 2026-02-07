import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import Filter from "./components/Filter";
import { FaComments } from "react-icons/fa";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editData, setEditData] = useState(null);
  const [filter, setFilter] = useState("all");

  // Add new feedback
  const addFeedback = (data) =>
    setFeedbacks([...feedbacks, { id: Date.now(), ...data }]);

  // Delete feedback
  const deleteFeedback = (id) =>
    setFeedbacks(feedbacks.filter((f) => f.id !== id));

  // Update existing feedback
  const updateFeedback = (id, updated) => {
    setFeedbacks(feedbacks.map((f) => (f.id === id ? { ...f, ...updated } : f)));
    setEditData(null);
  };

  // Filter feedbacks based on rating
  const filteredFeedbacks =
    filter === "all"
      ? feedbacks
      : feedbacks.filter((f) => (filter === "4" ? f.rating >= 4 : f.rating === 5));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6 flex flex-col items-center">
      {/* Main Portal Heading */}
      <h1 className="text-3xl font-extrabold text-center mb-6 text-indigo-600 drop-shadow-lg">
        Student Feedback Portal
      </h1>

      {/* Container for Form + Feedback Section */}
      <div className="w-full max-w-xl flex flex-col items-center gap-8">

        {/* Feedback Form */}
        <FeedbackForm
          addFeedback={addFeedback}
          updateFeedback={updateFeedback}
          editData={editData}
        />

        {/* All Feedbacks Section */}
        <div className="w-full max-w-xl flex flex-col items-center relative">

          {/* Heading */}
          <h2 className="text-2xl font-extrabold text-indigo-600 drop-shadow-lg flex items-center gap-2 mb-1 justify-center w-full">
            <FaComments className="text-blue-500" />
            All Feedbacks Here
          </h2>

          {/* Total Count */}
          <span className="text-gray-700 font-semibold mb-2 sm:absolute sm:top-0 sm:right-0">
            Total: {feedbacks.length}
          </span>

          {/* Filter Buttons */}
          <div className="mb-6 w-full flex justify-center">
            <Filter setFilter={setFilter} />
          </div>

          {/* Feedback List */}
          <FeedbackList
            feedbacks={filteredFeedbacks}
            deleteFeedback={deleteFeedback}
            setEditData={setEditData}
          />

        </div>
      </div>
    </div>
  );
}

export default App;
