const Create = () => {
  return (
    <div className="create">
      <h2>Add a new thing</h2>
      <form>
        <label>Title:</label>
        <input type="text" required />
        <label>Body:</label>
        <textarea>required</textarea>
        <label>Author:</label>
        <select>
          <option value="jess">jess</option>
          <option value="keith">keith</option>
        </select>
      </form>
    </div>
  );
};

export default Create;
