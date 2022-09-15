import "./styles.css";

/*
  1. Select day, Turn it bold (default "M")
  2. Create a state for each day's tomatoes 🍅 
  3. Increment / decrement should work based
     which day is selected 
*/

const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];

export default function App() {
  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        {days.map((day) => (
          <div key={day} className="tomato-box">
            <h3>{day}</h3>
            <div className="tomato-day-box"></div>
          </div>
        ))}
        <div className="buttons-container">
          <div className="button">-</div>
          <div className="button">+</div>
        </div>
      </div>
    </div>
  );
}
