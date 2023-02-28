import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import room from "../images/room.jpeg";
import swim from "../images/pool.jpg";
import food from "../images/foods.jpg";
import gym from "../images/gym.jpg";
import mosque from "../images/mosque.jpg";
import theater from "../images/theater.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const data = [
  {
    id: 1,
    name: "sleep Room",
    desriprion: "peace full sleep",
    small_des: "with rest",
    image: room,
  },
  {
    id: 2,
    name: "swimming pool",
    desriprion: "have well path",
    small_des: "with fresh water",
    image: swim,
  },
  {
    id: 3,
    name: "food",
    desriprion: "Test the delicious",
    small_des: "food kinds",
    image: food,
  },
  {
    id: 4,
    name: "mosque",
    desriprion: "Never forget your duties",
    small_des: "pray for Allah",
    image: mosque,
  },
  {
    id: 5,
    name: "gym",
    desriprion: "build your body",
    small_des: "with latest materials",
    image: gym,
  },
  {
    id: 6,
    name: "theater",
    desriprion: "Have your own show",
    small_des: "and ceremonies",
    image: theater,
  },
];

export const Explore = () => {
  const [fullData, SetData] = useState(data);
  const full = "100%";
  const backdroundImage =
    "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <section>
      <div className="row">
        <h2 style={{ textAlign: "center", marginBottom: "5px" }}>
          The Things you will <span className="special">explore</span>
        </h2>
        <div className="line"></div>
        <div className="container">
          {fullData.map((e) => {
            return (
              <div className="content" key={e.id}>
                <div className="image_holder">
                  <LazyLoadImage
                    src={e.image}
                    alt=""
                    effect="blur"
                    height={250}
                    placeholderSrc={backdroundImage}
                  />
                  <div className="info">
                    <h2>{e.desriprion}</h2>
                    <h5>{e.small_des}</h5>
                    <button className="Usually_btn">More</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
