import { useTheme } from "../hooks/useTheme";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={
        theme === "light"
          ? "w-full flex justify-between fixed top-0 bg-white"
          : "bg-black w-full text-white flex justify-between fixed top-0"
      }
    >
      <h1 className="text-3xl font-bold">HTTP Request</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 transition-all duration-200 text-white font-bold py-2 px-4 mx-4 my-2 rounded-lg"
        onClick={toggleTheme}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};
