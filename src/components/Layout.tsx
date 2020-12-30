import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-28 md:mt-36 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;