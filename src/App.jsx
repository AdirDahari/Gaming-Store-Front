import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <Layout>
      {/* <HomePage /> */}
      <ShopPage />
    </Layout>
  );
}

export default App;
