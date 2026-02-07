import { useState, useEffect } from "react";
import RatingStars from "./Ratingstars";
import { FaPaperPlane } from "react-icons/fa";

const FeedbackForm = ({ addFeedback, updateFeedback, editData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    semester: "",
    department: "",
    instructor: "",
    rating: 0,
    feedback: "",
  });

  useEffect(() => {
    if (editData) setFormData(editData);
  }, [editData]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.rating || !formData.instructor || !formData.feedback) {
      return alert("Please fill all mandatory fields!");
    }
    editData ? updateFeedback(editData.id, formData) : addFeedback(formData);

    setFormData({
      name: "",
      email: "",
      studentId: "",
      semester: "",
      department: "",
      instructor: "",
      rating: 0,
      feedback: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-lg mb-6 w-full flex flex-col items-center"
    >
      {/* Name */}
      <div className="mb-4 w-full">
        <label className="block font-semibold mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border p-2 rounded w-full focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Email */}
      <div className="mb-4 w-full">
        <label className="block font-semibold mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="youremail@gmail.com"
          className="border p-2 rounded w-full focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Optional fields */}
      <div className="grid md:grid-cols-3 gap-4 mb-4 w-full">
        <div>
          <label className="block font-semibold mb-1">Student ID</label>
          <input
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            placeholder="12345"
            className="border p-2 rounded w-full focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Semester</label>
          <input
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            placeholder="1, 2, 3..."
            className="border p-2 rounded w-full focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Department</label>
          <input
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Computer Science"
            className="border p-2 rounded w-full focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {/* Instructor */}
      <div className="mb-4 w-full">
        <label className="block font-semibold mb-1">
          Instructor <span className="text-red-500">*</span>
        </label>
        <input
          name="instructor"
          value={formData.instructor}
          onChange={handleChange}
          placeholder="Dr. John Doe"
          className="border p-2 rounded w-full focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {/* Rating */}
      <div className="mb-4 w-full">
        <label className="block font-semibold mb-1">
          Select Rating <span className="text-red-500">*</span>
        </label>
        <RatingStars
          rating={formData.rating}
          setRating={(n) => setFormData({ ...formData, rating: n })}
        />
        {formData.rating > 0 && (
          <p className="mt-1 text-gray-700">{formData.rating}/5</p>
        )}
      </div>

      {/* Feedback */}
      <div className="mb-4 w-full">
        <label className="block font-semibold mb-1">
          Feedback <span className="text-red-500">*</span>
        </label>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          placeholder="Write your feedback here..."
          className="w-full border p-2 rounded focus:ring-2 focus:ring-indigo-400"
        ></textarea>
      </div>

      {/* Submit Button Centered */}
      <div className="w-full flex justify-center mt-4">
        <button className="bg-indigo-600 text-white px-5 py-3 rounded flex items-center gap-2 hover:bg-indigo-700 transition-all font-bold text-lg shadow-lg">
          {editData ? "Update Feedback" : "Submit Feedback"} <FaPaperPlane />
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
