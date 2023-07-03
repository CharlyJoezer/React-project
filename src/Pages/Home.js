import { useEffect } from "react";

export default function Home() {
  useEffect(function(){
    document.title = 'Home'
  })
  return (
    <section>
      <h1>Selamat datang di website saya</h1>
      <p>Halo semua, ini Website Blog pertama saya menggunakan React JS</p>
    </section>
  );
}
