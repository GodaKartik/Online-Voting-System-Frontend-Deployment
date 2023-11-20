function Features() {
  const heading_style = "mt-5 p-2 text-3xl w-fit mx-auto";
  const content_style = "text-xl m-3 w-7/12 mx-auto text-center";
  return (
    <div>
      <div>
        <h1 className={heading_style}>Democracy... Now Digital</h1>
        <p className={content_style}>
          As everything in our lives moves online, so should our democracy. Now conduct elections online without the
          hassle of stepping out of your home with <strong>"U CHOOSE !!"</strong>. Create polls, conduct surveys, or
          gather reviews all with a few clicks.
        </p>
        <img src="democracy.jpg" alt="democracy" height="100px" className="w-7/12 mx-auto" />
      </div>
      <div>
        <h1 className={heading_style}>Don't Worry, Your Data is Safe</h1>
        <p className={content_style}>
          Your passwords and mail ids are hashed and stored securely. Even the database and election administrators can
          not know your credentials. Vote worry-free
        </p>
        <img src="safety.png" alt="democracy" height="100px" className="w-7/12 mx-auto" />
      </div>
      <div>
        <h1 className={heading_style}>Even a Baby Can Vote</h1>
        <p className={content_style}>Not saying they should, but the UX is easy enough for a toddler to use.</p>
      </div>
    </div>
  );
}

export default Features;
