import Link from "next/link";
import "../../styles/TwoNav.css";

function Navbar() {
  return (
    <div>
      <Link href="/">
        <button type="button" className="btn-close" aria-label="Close" />
      </Link>
    </div>
  );
}

export default Navbar;
