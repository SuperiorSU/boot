import React, { useEffect, useState } from "react";
import Acoordian from "./Acoordian";
import Carid from "./Card";
import { Container } from "react-bootstrap";

function Main({products , setProducts ,addHandle }) {
  const filter = [
    {
      No: 0,
      title: "Category",
      category: [
        "T-Shirt",
        "Boxer",
        "Vest",
        "Shirt",
        "Joggers",
        "Shorts",
        "Sweatshirt",
        "Hoodies",
        "Pyjama",
        "Jeans",
        "Jacket",
        "Co-Ordinates",
        "Track Pant",
        "Sweater",
        "Trousers",
        "Casual Pants",
        "Pant",
        "Tracksuit",
        "Kurta",
        "Protective Outdoor Mask",
        "Sweatshirt & Jogger Set",
        "Cloth Mask",
      ],
    },
    {
      No: 1,
      title: "Sizes",
      category: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    },
    {
      No: 2,
      title: "Brand",
      category: [
        "Bewakoof®",
        "Bewakoof Air® 1.0",
        "Campus Sutra",
        "Xyxx",
        "Rigo",
        "Bewakoof Heavy Duty® 1.0",
        "Urban Scottish",
        "Bushirt",
        "What's Down",
        "The Daily Outfits",
        "Indiclub",
        "Rodamo",
        "Door 74",
        "Bewakoof American Pima",
        "Difference Of Opinion",
        "Flynoff",
        " Mad Over Print",
        "Shopolics",
        "Dillinger",
        "Chkokko",
        "Dripcult",
        "East Coast Way",
        "Old Grey",
        "Smugglerz",
        "The Dry State",
        "Harpita",
        "Dimeh",
        "Olavi",
        "Kranium",
        "Trends Tower",
        "7 Shores",
        "Fans Army",
        "Urban Legends",
        "Brown Mocha",
        "Kotty",
        "Showoff",
        "Vyve",
        "Blanck",
        "Botnia",
        "Dropout Society",
        "The Bargain Street",
        "Weezy",
        "Belliskey",
        "Brown Brothers",
        "Truebuyworld",
        "Vibebling",
      ],
    },
    {
      No: 3,
      title: "Color",
      category: ["red", "blue", "black"],
    },
    {
      No: 4,
      title: "Design",
      category: [
        "Graphic Print",
        "Solid",
        "Printed",
        "Aop",
        "Typography",
        "Color Block",
        "Checked",
        "Striped",
        "Washed",
        "Self Design",
        "Tie & Dye",
        "Camouflage",
        "Textured",
        "Ombre",
        "Abstract",
        "Embroidered",
        " Floral Print",
        "Polka Print",
        "Geometric Print",
        "Paisley",
        "Ethnic Motifs",
        "Polka Dots",
      ],
    },
  ];

 

  const Reduce = (title, event) => {
    console.log(title);
    console.log(event);
    var items;
    switch (title) {
      case "Color":
        items = products.filter((e) => {
          if (e.color == event) {
            return e;
          }
        });
        setProducts(items);
        break;
      case "Sizes":
        items = products.filter((e) => {
          if (e.size == event) {
            return e;
          }
        });
        setProducts(items);
        break;
      case "sunflower":
        console.log("Sunflowers are yellow");
        break;
      default:
        console.log("Please select another flower");
    }
  };
//   if (products.length < 7) {
//     document.querySelector(".filters").classList.add("filters2");
//   }
  return (
    <div>
      <Container className="w-100 mens">
        <h2>
          Mens Clothing{" "}
          <span className="text-secondary">({products.length})</span>
        </h2>
      </Container>
      <Container className="container-div">
        <div className="filters">
          <p className="para">Filters</p>
          <Acoordian action={Reduce} data={filter} />
        </div>
        <div className="Output-div">
           {products.map((row , index) => {
            return <Carid key={index} id={row.id} data={row} addHandle={addHandle} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default Main;
