const RatingStars = ({ rating, setRating }) => (
  <div className="flex gap-2 text-2xl cursor-pointer">
    {[1, 2, 3, 4, 5].map((n) => (
      <span
        key={n}
        onClick={() => setRating(n)}
        className={n <= rating ? "text-yellow-500" : "text-gray-400"}
      >
        ⭐
      </span>
    ))}
  </div>
);

export default RatingStars;
