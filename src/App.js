import React from "react";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", backgroundColor: '#171717' }}>
      <div className="App" style={{ width: "35%", color: '#fff' }}>

        <div style={{ position: 'sticky', top: 0, backgroundColor: '#171717', zIndex: 1000, padding: '10px 0' }}>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',fontSize:'18px',margin:'20px' }}>
            <div style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
              <img
                  src="https://test.create.diagnal.com/images/Back.png"
                alt="Logo"
                style={{ width: '24px', height: '24px', marginRight: '5px' }} // Adjust size as needed
              />
              Romantic Comedy
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src="https://test.create.diagnal.com/images/search.png"
                alt="Logo"
                style={{ width: '24px', height: '24px', marginRight: '5px' }} // Adjust size as needed
              />
            </div>
          </div>
        </div>

        <MovieList />
      </div>
    </div>
  );
}

export default App;
