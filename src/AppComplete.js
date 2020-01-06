import React from 'react';
import Collapsible from './components/CollapsibleComplete';
import './components/Modal.css';
import FetchData from './components/FetchData';

function App() {
  return (
    <FetchData url="https://swapi.co/api/people/1/">
      {({ loading, data, error }) => (
        <Collapsible>
          {({ isOpen, closeCollapsible, openCollapsible }) =>
            <>
              <button onClick={openCollapsible}>open</button>
              {isOpen &&
                <div className="modal-overlay">
                  <div className="modal">
                    {loading ? "loading..." : data.name}
                <button onClick={closeCollapsible}>close</button>
                  </div>
                </div>
              }
            </>
          }
        </Collapsible>
      )}
    </FetchData>
  );
}

export default App;
