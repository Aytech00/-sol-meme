import gif1 from "../../assets/200.gif";
import gif2 from "../../assets/2003.gif";
import gif3 from "../../assets/nokia-demon.gif";
import img1 from "../../assets/646da2034c3a4.webp";
import img2 from "../../assets/nokia1.webp";
import img3 from "../../assets/meme.webp";
import img4 from "../../assets/giphy.gif";
import Sound from 'react-sound'
import tone from "../../assets/ring.mp3";
import { useState } from "react";
import { useSoundContx } from "../../store/SoundContx";

export default function Cards() {

       const {isPlaying, setIsPlaying} = useSoundContx()

console.log(isPlaying);
  return (
    <div className="px-7  md:px-5 flex justify-center  py-10">
      <div className="grid md:gap-4  grid-cols-1 md:grid-cols-4  ">
        <div className=" col-span-1 ">
          <img
            className="w-full mb-5 md:w-[400px] border-4 border-primary"
            src={img3}
            alt=""
          />
          <img
            className="w-full mb-5 md:w-[400px] border-4 border-primary"
            src={img1}
            alt=""
          />
          <img
            className="w-full md:w-[400px] border-4 border-primary"
            src={gif1}
            alt=""
          />
        </div>

        <div className=" col-span-1  md:col-span-2">
         
          {/* <button
            onClick={() => setIsPlaying((prev)=> !prev)}
            className="w-full text-2xl md:text-3xl bg-yellow-300 py-3"
          >
            {!isPlaying ? "play nokia ring tone 🤳" : "stop ring tone"}
          </button> */}
          <div className="mb-5">
            <img
              className=" md:w-full h-full mb-5  border-4 border-primary"
              src={gif3}
              alt=""
            />
      
          </div>

          <div className="mb-5 md:mb-0">
            <Sound
              url={tone}
              playStatus={
                isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
              }
              
              playFromPosition={300 /* in milliseconds */}
            />

          {/* <audio src={tone} autoPlay={true}> </audio> */}

            {/* <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-full text-2xl md:text-3xl bg-yellow-300 py-3"
            >
              {!isPlaying ? "play nokia ring tone" : "stop ring tone"}
            </button> */}
          </div>
        </div>
        <div className="col-span-1">
          <img
            className="w-full  md:w-[400px] mb-5 border-4  border-primary"
            src={img4}
            alt=""
          />

          <img
            className="w-full md:w-[400px] mb-5 border-4 border-primary"
            src={img2}
            alt=""
          />
          <img
            className="w-full md:w-[400px] border-4 border-primary"
            src={gif2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
