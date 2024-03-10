

export default function Header() {
  return (
    <div className="text-center ">
      <div className="flex container mb-5 text-white  bg-primary gap-5 md:gap-10 py-5 justify-center  items-center">
        <button className="py-1 px-5 border   bg-primary">
          Twitter
        </button>
        <h2 className="text-xl hidden md:block text-yellow-300">$nokia</h2>
        <button className=" py-1 px-5 border   bg-primary">Telegram</button>
        <h2 className="text-xl hidden md:block text-yellow-300">$nokia</h2>
        <button className=" border px-4 py-1  bg-primary">Chart</button>
      </div>
      <form className="bg-yellow-300 footer  py-10 px-10" action="">
        <div className="flex justify-between mb-5 text-yellow-300">
          <p>$Nokia</p>
          <p>$Nokia</p>
          <p>$Nokia</p>
        </div>
        <input
          className=" w-full md:w-[700px] py-2 outline-none px-3 border-4 border-yellow-300"
          type="text"
          placeholder="$nokia"
        />
      </form>
    </div>
  );
}
