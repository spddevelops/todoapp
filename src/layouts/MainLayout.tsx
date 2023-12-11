import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TodoContainer from "../components/TodoContainer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <TodoContainer />
      <Footer />
    </div>
  );
};

export default MainLayout;
