import "./Home.css";
const Home = ({ onChange, val }) => {
  return (
    <div>
      <div className="container">
        <label>Height</label>
        <input
          type="number"
          min="1"
          value={val.height}
          onChange={(e) => onChange("height", e.target.value)}
          required
        />
        in cm <br />
        <br/>
        <label>Weight</label>
        <input
          type="number"
          min="1"
          value={val.weight}
          onChange={(e) => onChange("weight", e.target.value)}
          required
        />
        in kg's
      </div>
    </div>
  );
};

export default Home;
