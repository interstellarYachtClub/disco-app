const AppHeader = () => {
  return (
    <header className="app-header">
      <div>
        <span className="logo-icon">
          <img
            src="kvinyls-svgrepo-com.svg"
            alt="discoglogo"
            className="logo"
          ></img>
          react-disco-app
        </span>
        <h1 className="heading">
          <span className="heading-primary">Discographies</span>
          <span className="heading-secondary">marc fife favorites</span>
        </h1>
      </div>
    </header>
  );
};

export default AppHeader;
