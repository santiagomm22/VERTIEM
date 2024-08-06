import Image from "next/image";
import Link from "next/link";
import "@/styles/LatMenu.css";
import { MdDashboard } from "react-icons/md";

export default function LatMenu() {
  return (
    <div>
      <aside className="latmenu">
        <div className="latmenu_top">
          <Link href="/paginas/P1">
            <Image
              src="/images/Logo.jpg"
              width={80}
              height={80}
              className="latmenu_logo"
              alt="logo"
            />
          </Link>
        </div>
        <ul className="latmenu_list">
          <li className="latmenu_item">
            <Link href="#" className="latmenu_link">
              <span className="latmenu_icon">
                <MdDashboard />
              </span>
              <span className="latmenu_name">Inicio</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
