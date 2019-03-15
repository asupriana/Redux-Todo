// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import TodoContainer from './containers/TodoContainer';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
	import TodoContainer from './containers/TodoContainer';
	import './App.css';
	
	class App extends Component {
	  render() {
	    return (
	      <div className="app">
	        <header>
	          <h1>Welcome to Todo</h1>
	        </header>
	
	        <TodoContainer />
	      </div>
	    );
	  }
	}
	
	export default App;