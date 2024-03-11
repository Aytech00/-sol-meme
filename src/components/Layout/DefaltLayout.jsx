import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import Sound from "react-sound";
import tone from "../../assets/ring.mp3";

import { useSoundContx } from "../../store/SoundContx";
export default function DefaltLayout() {



  const {isPlaying, setIsPlaying}= useSoundContx()


  return (
    <div
      onClick={() => setIsPlaying(true)}
      className={`  ${!isPlaying ? "   cursor-pointer bg-black blur-md" : ""}`}
    >
      <div>
        <Nav />
      </div>

      <main>
        <Outlet />
      </main>

      <div>
        <Footer />
      </div>

      <ScrollRestoration />
    </div>
  );
}
