import { useUser } from "../context/UserContext";
import { DefaultHeader } from "./DefaultHeader";
import { Navbar } from "./Navbar";

export function Header() {
  const { user } = useUser();
  return (
    <div>
      {/* {user ? <Navbar /> : <DefaultHeader />} */}
      <Navbar />
    </div>
  );
}
