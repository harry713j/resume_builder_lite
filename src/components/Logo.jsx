import logo from "../assets/ResumeLite.svg";

function Logo({ width = "100%" }) {
  return (
    <div>
      <img src={logo} alt="logo" width={width} />
    </div>
  );
}

export default Logo;
