"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Button from "@/components/Button/Button";
import { selectCartModule } from "@/redux/features/cart/selector";

export default function Header() {
  const cart = useSelector((state) => selectCartModule(state));
  return (
    <header className={styles.header}>
      <Link href="/">Билетопоиск</Link>
      <Link href={cart.amount? "/cart" : "/"}className={styles.basket}>
        {Boolean(cart.amount) && (
          <Button type="" text={cart.amount} />
        )}
        <Image src="/basket.svg" alt="cart" width="32" height="32" />
      </Link>
    </header>
  );
}
