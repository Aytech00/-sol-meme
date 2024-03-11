
export default function Footer() {
  return (
    <div className="container bg-yellow-300 rounded-tl-3xl rounded-tr-3xl border-4 border-yellow-300 text-center py-5">
      <div>
        <div className=" grid grid-cols-3 py-3 text-black">
          <p className="text-xl font-semibold">$nokia</p>
          <p className="text-xl font-semibold">$nokia</p>
          <p className="text-xl font-semibold">$nokia</p>
        </div>

        <ul className="flex justify-center gap-10 mt-10 py-5 text-yellow-300">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Information</li>
        </ul>

        <div className="italic  bg-yellow-300 md:text-xl  py-3 text-black">
          <p className="">
            @2024 $Nokia. We Are Not Affiliated With The Official Nokia.
          </p>
        </div>
      </div>
    </div>
  );
}
