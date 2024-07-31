export function Page5() {
  return (
    <>
      <div className="page5 w-screen h-screen z-20 bg-blue-950">
        <div className="p5-container container mx-auto h-full grid place-items-center">
          <div className="form w-7/12 p-44 aspect-square grid place-items-center bg-slate-950 bg-opacity-60 rounded-full text-sky-50 text-lg gap-5">
            <span className="text-2xl font-medium">Send Us a Message!</span>
            <div className="name-input flex flex-col w-full items-start">
              <label>Your Name : </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-1/3 rounded-md bg-blue-100 text-slate-950"
              ></input>
            </div>
            <div className="text-area w-full">
              <label>Message : </label>
              <textarea className="w-full rounded-md bg-blue-100 text-slate-950" rows={10}></textarea>
            </div>
            <button className="submit bg-white text-slate-950 px-4 py-1.5 rounded-md border-blue-950 border-2 bg-blue-100">Submit!</button>
          </div>
        </div>
      </div>
    </>
  );
}
