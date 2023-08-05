import { Kanit } from "next/font/google";
import { BiSearch } from "react-icons/bi";
import { IoPersonCircle } from "react-icons/io5";
import NavigationContainer from "./Container/Navigation";

const roboto = Kanit({
  weight: ["600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <ul className="flex h-full  items-center justify-between space-x-4 bg-blue-400">
        <p className={`${roboto.className} text-ita text-2xl italic`}>
          Ticktock
        </p>
        <div className="w-full bg-green-500 lg:pl-4">
          <div className="relative max-w-[400px]">
            <BiSearch className="absolute left-3 top-2.5 cursor-pointer" />
            <input
              className="w-full rounded-3xl px-8 py-1"
              placeholder="搜尋活動"
            ></input>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li className="whitespace-nowrap">訂單建立</li>
            <li className="whitespace-nowrap">建立活動</li>
            <li className="whitespace-nowrap">選擇組織</li>
          </ul>
          <IoPersonCircle className="h-8 w-8" />
        </div>
      </ul>
    </NavigationContainer>
  );
}
