import './navbar.css'

export function Navbar() {
  return (
    <div className="navbar fixed top-0 z-10 w-full h-auto grid place-items-center text-slate-100 text-xl font-medium">
      <div className="nav-wrapper w-4/6 py-4 px-12 flex items-center text-blue-100 justify-between rounded-full overflow-hidden relative before:h-full before:w-full before:rounded-full before:bottom-0 before:left-0 before:absolute before:border-blue-500 before:border-opacity-70 before:blur-lg">
        <div className="nav-icon">
          <div className="icon-wrapper h-14 flex items-center text-blue-200 text-2xl font-bold">
            <span className="random-text">heeee</span>
            <span className="studio">Studio</span>
          </div>
        </div>
        <div className="navigates flex justify-around gap- items-center w-1/3 h-14 min-w-max">
          <div className="navigate-item px-7 h-12 flex items-center justify-center relative rounded-full overflow-hidden before:absolute before:bottom-0 before:rounded-full before:w-full before:h-2/3 before:border-b before:border-blue-600">
            <div className="nav-button-effect"></div>
            <span className="">How We Started?</span>
          </div>
          <div className="navigate-item px-7 h-12 flex items-center justify-center relative rounded-full overflow-hidden before:absolute before:bottom-0 before:rounded-full before:w-full before:h-2/3 before:border-b before:border-blue-600">
            <span>Products</span>
          </div>
          <div className="navigate-item px-7 h-12 flex items-center justify-center relative rounded-full overflow-hidden before:absolute before:bottom-0 before:rounded-full before:w-full before:h-2/3 before:border-b before:border-blue-600">
            <span>Who We Are</span>
          </div>
        </div>
        <div className="nav-menu h-14 grid content-center">Menu</div>
      </div>
    </div>
  );
}
