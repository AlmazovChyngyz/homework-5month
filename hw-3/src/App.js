import React from 'react';
import AboutPage from "./pages/aboutPage/AboutPage";
import "./App.css";

// const App = () => {
//     return (
//         <Provider store={store}>
//             <AboutPage/>
//         </Provider>
//     );
// };
//
// export default App;

function App() {
    return (
        <div className="App">
            <h1>best employees
            </h1>
            <AboutPage></AboutPage>
        </div>
    );
}

export default App;