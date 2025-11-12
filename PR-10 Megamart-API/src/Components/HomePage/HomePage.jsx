import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import { Link } from "react-router";


const HomePage = () => {
  const menuItems = [
    { name: "Men", path: "/Men" },
    { name: "Women", path: "#" },
    { name: "Kids", path: "#" },
    { name: "Footwear", path: "#" },
    { name: "Innerwear", path: "#" },
    { name: "Accessories", path: "#" },
    { name: "Brands", path: "#" },
  ];

  return (
    <>
      <section className="menu-bar">
        <Container>
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-link">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <Banner />
    </>
  );
};
export default HomePage;
