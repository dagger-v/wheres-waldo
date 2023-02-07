import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div>
        <a href="#about">GitHub</a>
      </div>
      <span className={props.winner ? "winner" : "none"}>You Found Waldo!</span>
    </div>
  );
};

export default Header;
