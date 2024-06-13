import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div className="container-xl text-center">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-5xl text-slate-300 font-bold">404! Not found!</h1>
          <Link href="/">
            <button className="btn btn-primary mt-6">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
