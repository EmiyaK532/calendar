const Header = () => {
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon">&lt;</div>
        <div className="calendar-header-value">2025 年 3 月</div>
        <div className="calendar-header-icon">&gt;</div>
        <button className="calendar-header-btn">today</button>
      </div>
    </div>
  );
};

export default Header;
