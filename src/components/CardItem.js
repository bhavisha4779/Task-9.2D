function CardItem({ title, description, rating, author, img }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", width: "200px", textAlign: "center" }}>
      <img src={img} alt={title} style={{ width: "100%", height: "120px", objectFit: "cover" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>⭐ {rating} by {author}</p>
    </div>
  );
}
export default CardItem;
