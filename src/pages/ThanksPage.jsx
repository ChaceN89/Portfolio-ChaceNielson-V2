import { Link } from "react-router-dom";
const ThanksPage = () => {
  return (
    <div className='space-x-4'>
      <h1>Thanks Page</h1>
      <Link className='hover:text-accent' to="/">Open Home</Link>

    </div>
  );
};

export default ThanksPage;