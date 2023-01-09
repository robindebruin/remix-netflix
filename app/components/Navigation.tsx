import { NavLink } from "@remix-run/react";

const activeStyle = {
  textDecoration: "font-semibold",
};

const Navigation = () => (
  <nav className="flex items-center justify-between bg-gradient-to-b from-gray-800 to-transparent px-4 py-3">
    <div className="mr-6 flex flex-shrink-0 items-center text-white">
      <img src="/logo.png" className="h-8 w-8" alt="Logo" />
      <span className="text-xl font-semibold tracking-tight">Netflix</span>
    </div>
    <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
      <div className="text-sm lg:flex-grow">
        <NavLink
          to="browse"
          className="mt-4 mr-4 block text-gray-100 hover:text-gray-400 lg:mt-0 lg:inline-block"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Browse
        </NavLink>
        <NavLink
          to="/series"
          className="mt-4 mr-4 block text-gray-100 hover:text-gray-400 lg:mt-0 lg:inline-block"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Series
        </NavLink>
        <NavLink
          to="/movies"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mt-4 mr-4 block text-gray-100 hover:text-gray-400 lg:mt-0 lg:inline-block"
        >
          Movies
        </NavLink>
        <NavLink
          to="/my-list"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="mt-4 block text-gray-100 hover:text-gray-400 lg:mt-0 lg:inline-block"
        >
          My List
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/idk"
          className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
        >
          Sign In
        </NavLink>
        <NavLink
          to="/idk"
          className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  </nav>
);

export default Navigation;
