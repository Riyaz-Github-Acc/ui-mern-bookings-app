import "./MailList.scss";

const MailList = () => {
  return (
    <div className="mailList">
      <h2 className="title">Save time, save money!</h2>
      <p className="desc">Sign up and we&apos;ll send the best deals to you</p>

      <div className="subForm">
        <input type="text" placeholder="Your Email Address" />
        <button className="btn">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
