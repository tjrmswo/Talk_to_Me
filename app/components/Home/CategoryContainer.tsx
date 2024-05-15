interface CategoryContainerType {
  Interests: string[];
}
const CategoryContainer: React.FC<CategoryContainerType> = ({ Interests }) => {
  return (
    <div className="CategoryContainer">
      {Interests.slice(0, 6).map((interest, i) => (
        <span className="category" key={i}>
          {interest}
        </span>
      ))}
    </div>
  );
};

export default CategoryContainer;
