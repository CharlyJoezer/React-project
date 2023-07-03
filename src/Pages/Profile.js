import { useEffect } from "react";

export default function Profile() {
  useEffect(function(){
    document.title = 'Profile'
  })
  return (
    <section>
      <h2>Profile</h2>
      <p>Hai nama saya Charly, saya adalah Web Developer</p>
    </section>
  );
}
