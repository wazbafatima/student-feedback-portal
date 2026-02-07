import FeedbackItem from "./Feedbackitem";
import { FaRegCommentDots } from "react-icons/fa";

const FeedbackList = ({ feedbacks, deleteFeedback, setEditData }) => {
  const cardWidth = "w-full"; // Inside parent max-w-xl, so width matches form

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {feedbacks.length === 0 ? (
        <div
          className={`${cardWidth} bg-white p-6 rounded shadow-lg text-center flex flex-col items-center justify-center`}
        >
          <FaRegCommentDots className="text-6xl mb-4 text-gray-300 animate-bounce" />
          <h3 className="text-xl font-semibold text-gray-400">No feedback yet</h3>
        </div>
      ) : (
        feedbacks.map((item) => (
          <div key={item.id} className={`${cardWidth}`}>
            <FeedbackItem
              item={item}
              deleteFeedback={deleteFeedback}
              setEditData={setEditData}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default FeedbackList;
