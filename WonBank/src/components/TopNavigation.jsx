export default function TopNavigation({
    title,
    onBack,
    rightText,
    onRight,
  }) {
    return (
      <header className="topNav">
        <button
          className="topNav__left"
          onClick={onBack}
          aria-label="뒤로가기"
        >
          ←
        </button>
  
        <div className="topNav__title">{title}</div>
  
        {rightText ? (
          <button className="topNav__right" onClick={onRight}>
            {rightText}
          </button>
        ) : (
          <div className="topNav__rightPlaceholder" />
        )}
      </header>
    );
  }