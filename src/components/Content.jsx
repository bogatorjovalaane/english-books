const Content = () => {
  return (
    <main className="content-container">
      <img
        src={`${import.meta.env.BASE_URL}/images/main_content.png`}
        alt="content"
        className="content-image"
      />
      <div className="content-text">
        <h1>Lessons in Literature</h1>
        <h2>
          Exploring stories that open windows to other cultures — learning how
          <br />
          literature connects us and helps us understand each other.
        </h2>
      </div>
    </main>
  );
};

export default Content;
