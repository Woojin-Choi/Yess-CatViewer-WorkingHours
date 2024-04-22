import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CatViewer from "./pages/CatViewer";
import WorkingHours from "./pages/WorkingHours";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <div className="App">
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          <ul>
            <li>
              <Link to="/cat-viewer">CatViewer</Link>
            </li>
            <li>
              <Link to="/working-hour">WorkingHours</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/cat-viewer"
            element={
              <QueryClientProvider client={queryClient}>
                <CatViewer />
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            }
          />
          <Route path="/working-hour" element={<WorkingHours />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
