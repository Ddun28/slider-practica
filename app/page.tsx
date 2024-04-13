"use client";
import  Arrows  from "@/components/widgets/arrows";
import  SliderItem  from "@/components/widgets/slider-item";
import { useState } from "react";

export default function Home() {

  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  return (
    <div className="h-screen relative">
      <ul>
        <SliderItem 
        itemActive={itemActive} 
        id={1} 
        image="/imgs/1.jpg"
        brand="Adidas"
        name="Campus"
        desc="Diseñado en colaboración con Human Made, el equipo adidas Campus es pionero en lo que respecta a calzado urbano. Destaca con tu par perfecto.
        "
        />
          <SliderItem 
        itemActive={itemActive} 
        id={2} 
        image="/imgs/2.jpg"
        brand="Nike"
        name="Campus"
        desc="Diseñado en colaboración con Human Made, el equipo adidas Campus es pionero en lo que respecta a calzado urbano. Destaca con tu par perfecto.
        "
        />
          <SliderItem 
        itemActive={itemActive} 
        id={3} 
        image="/imgs/3.jpg"
        brand="Adidas"
        name="Campus"
        desc="Diseñado en colaboración con Human Made, el equipo adidas Campus es pionero en lo que respecta a calzado urbano. Destaca con tu par perfecto.
        "
        />
          <SliderItem 
        itemActive={itemActive} 
        id={4} 
        image="/imgs/4.jpg"
        brand="Adidas"
        name="Campus"
        desc="Diseñado en colaboración con Human Made, el equipo adidas Campus es pionero en lo que respecta a calzado urbano. Destaca con tu par perfecto.
        "
        />
         <SliderItem 
        itemActive={itemActive} 
        id={5} 
        image="/imgs/5.jpg"
        brand="Adidas"
        name="Campus"
        desc="Diseñado en colaboración con Human Made, el equipo adidas Campus es pionero en lo que respecta a calzado urbano. Destaca con tu par perfecto.
        "
        />
      </ul>
      <Arrows onClickPrev={() => {}} onClickNext={() => {}} /> 
    </div>
  );
}
