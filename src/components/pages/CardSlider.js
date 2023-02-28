import React, { useState } from "react";
import family from "../images/familyRoom.jpg";
import couple from "../images/couble.jpg";
import single from "../images/single.jpg";
import yammyfood from "../images/yammyFood.jpg";
import wedding from "../images/wedding.jpg";
import confrence from "../images/confrence.jpg";
import internet from "../images/internet.jpg";
import pool from "../images/pool.jpg";
import gym from "../images/gym.jpg";
import "./card.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdChevronLeft, MdChevronRight, MdStarRate } from "react-icons/md";
const serviceData = [
  {
    id: 1,
    name: "family room",
    condition: "Only parents and their child's",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Explicabo Odit Illum Doloremque, Laudantium, Vel Temporibus Minus Ratione, Iure Dolore Aliquam Ullam Cumque Deleniti ",
    image: family,
  },
  {
    id: 2,
    name: "couple room",
    condition: "marriage certificate",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Explicabo Odit Illum Doloremque, Laudantium, Vel Temporibus Minus Ratione, Iure Dolore Aliquam Ullam Cumque Deleniti ",
    image: couple,
  },
  {
    id: 3,
    name: "single room",
    condition: "18+",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Explicabo Odit Illum Doloremque, Laudantium, Vel Temporibus Minus Ratione, Iure Dolore Aliquam Ullam Cumque Deleniti ",
    image: single,
  },
  {
    id: 4,
    name: "delicious food",
    condition: "no condition",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Explicabo Odit Illum Doloremque, Laudantium, Vel Temporibus Minus Ratione, Iure Dolore Aliquam Ullam Cumque Deleniti ",
    image: yammyfood,
  },
  {
    id: 5,
    name: "wedding hall",
    condition: "no condition",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Explicabo Odit Illum Doloremque, Laudantium, Vel Temporibus Minus Ratione, Iure Dolore Aliquam Ullam Cumque Deleniti ",
    image: wedding,
  },
  {
    id: 6,
    name: "conference hall",
    condition: "permission letter from the government",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Explicabo Odit Illum Doloremque, Laudantium, Vel Temporibus Minus Ratione, Iure Dolore Aliquam Ullam Cumque Deleniti ",
    image: confrence,
  },
  {
    id: 7,
    name: "high speed internet",
    condition: "no condition",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Explicabo Odit Illum Doloremque, Laudantium, Vel Temporibus Minus Ratione, Iure Dolore Aliquam Ullam Cumque Deleniti ",
    image: internet,
  },
  {
    id: 8,
    name: "swimming pool",
    condition: "no condition",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Explicabo Odit Illum Doloremque, Laudantium, Vel Temporibus Minus Ratione, Iure Dolore Aliquam Ullam Cumque Deleniti ",
    image: pool,
  },
  {
    id: 9,
    name: "gym",
    condition: "18+",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Explicabo Odit Illum Doloremque, Laudantium, Vel Temporibus Minus Ratione, Iure Dolore Aliquam Ullam Cumque Deleniti ",
    image: gym,
  },
];
export const CardSlider = () => {
  const [data, setData] = useState(serviceData);
  const slideLeft = () => {
    let slide = document.getElementById("slider");
    slide.scrollLeft = slide.scrollLeft + 500;
  };
  const slideRight = () => {
    let slide = document.getElementById("slider");
    slide.scrollLeft = slide.scrollLeft - 500;
  };
  return (
    <div className="main_content">
      <MdChevronLeft
        size={40}
        className="icons icon-left"
        onClick={slideRight}
      />
      <div id="slider">
        {data.map((e) => {
          return (
            <div className="card-content">
              <div className="card" key={e.id}>
                <div className="image">
                  <LazyLoadImage
                    src={e.image}
                    alt=""
                    effect="blur"
                    width={250}
                  />
                </div>
                <h3>{e.name}</h3>
                <small>{e.condition}</small>
                <p>{e.description}</p>
                <div className="rating">
                  <MdStarRate style={{ color: "orangered" }} />
                  <MdStarRate style={{ color: "orangered" }} />
                  <MdStarRate style={{ color: "orangered" }} />
                  <MdStarRate style={{ color: "orangered" }} />
                  <MdStarRate style={{ color: "orangered" }} />
                </div>
                <div className="btns">
                  <button className="btn seemore">See more</button>
                  <button className="btn book">Book</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <MdChevronRight
        size={40}
        className="icons icon-right"
        onClick={slideLeft}
      />
    </div>
  );
};
