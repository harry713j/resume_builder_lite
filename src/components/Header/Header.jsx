import { Link, NavLink } from "react-router-dom";
import { Button, Logo } from "../index";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user-details/profile");
  };
  return (
    <header className="px-[120px]">
      <div className="flex justify-between items-center py-5">
        <div>
          <Link to="/">
            <Logo width="150px" />
          </Link>
        </div>
        <nav className="flex gap-16 items-center">
          <div>
            <NavLink
              to="/templates"
              className={({ isActive }) => `${
                isActive ? "text-customYellow" : "text-lightBlue-default"
              }
              font-lato font-medium text-lg hover:text-customYellow hover:underline duration-300 py-1 px-2 `}
            >
              Templates
            </NavLink>
          </div>
          <div>
            <Button
              type="button"
              onClick={handleClick}
              className="bg-lightBlue-default text-base hover:bg-lightBlue-dark focus:ring-lightBlue-dark py-1.5 px-4"
            >
              Create Resume
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
