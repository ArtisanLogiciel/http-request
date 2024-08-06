import { Header } from "../components/Header";
import { useTheme } from "../hooks/useTheme";

export const Home = () => {
  const { theme } = useTheme();
  return (
    <>
      <Header />
      <div
        className={
          theme === "light"
            ? "w-full h-screen flex justify-center items-center"
            : "w-full h-screen flex justify-center items-center text-white bg-black"
        }
      >
        <h1 className="text-4xl font-bold">Hello World</h1>
      </div>
    </>
  );
};
