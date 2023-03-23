import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/*Card*/}
      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Verdict's out, Time To Go All Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1576437957780-1f21b8bcdbde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Cake Shops</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1480217741525-f06b2728f650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Party Platters Too</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
