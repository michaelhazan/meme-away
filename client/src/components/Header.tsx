import '../styles/header.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header-logo header-image">
        <img
          src="/elmoFlames.jpeg"
          alt="Elmo with his hands up surrounded by flames"
        />
      </div>
      <div className="header-text">
        <div className="room-name">Room Name</div>
        <div className="game-phase">Game Phase</div>
      </div>
      <div className="header-profile header-image">
        <img src="/planeProfilePic.jpeg" alt="Profile picture" />
      </div>
    </div>
  );
};
