function Header() {
  const FEATURES_CAPTION_STYLE = "text-gray-400 mb-2 text-lg";
  return (
    <div className="bg-stone-50">
      <h1 className="text-center font-bold text-4xl ">
        <a href="/">U Choose !!</a>
      </h1>
      <h2 className="text-center font-medium text-2xl mb-5">An Online Election System</h2>
      <div className="flex justify-evenly">
        <div className={FEATURES_CAPTION_STYLE}>❖</div>
        <div className={FEATURES_CAPTION_STYLE}>Elections</div>
        <div className={FEATURES_CAPTION_STYLE}>❖</div>
        <div className={FEATURES_CAPTION_STYLE}>Surveys</div>
        <div className={FEATURES_CAPTION_STYLE}>❖</div>
        <div className={FEATURES_CAPTION_STYLE}>Reviews</div>
        <div className={FEATURES_CAPTION_STYLE}>❖</div>
      </div>
    </div>
  );
}

export default Header;
