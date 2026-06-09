import logoImg from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logoImg} alt="logo image" />
      <h1>Welcome to the Quiz application.</h1>
    </header>
  );
};

export default Header;
