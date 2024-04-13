"use client";
import  Arrows  from "@/components/widgets/arrows";
import  SliderItem  from "@/components/widgets/slider-item";
import  SliderThumbnailItem from "@/components/widgets/slider-thumbnail-item";
import { useState } from "react";

export default function Home() {

  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const onPrev = () => {
    setItemActive(itemActive - 1);
  if(itemActive === 1){
    setItemActive(countItems)
  }
}

const onNext = ()=> {
  setItemActive(itemActive + 1);
  if(itemActive >= countItems){
    setItemActive(1)
  }
}

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
      <Arrows onClickPrev={() => onPrev()} onClickNext={() => onNext()} /> 
      <ul className="absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto">
        <SliderThumbnailItem 
        itemActive={itemActive} 
        image="/imgs/1.jpg" 
        id={1} 
        name="Adidas" 
        onClick={() => setItemActive(1)} 
        />

         <SliderThumbnailItem 
        itemActive={itemActive} 
        image="/imgs/2.jpg" 
        id={2} 
        name="Nike" 
        onClick={() => setItemActive(2)}
        />
         <SliderThumbnailItem 
        itemActive={itemActive} 
        image="/imgs/3.jpg" 
        id={3} 
        name="Nike" 
        onClick={() => setItemActive(3)}
        />
         <SliderThumbnailItem 
        itemActive={itemActive} 
        image="/imgs/4.jpg" 
        id={4} 
        name="Nike" 
        onClick={() => setItemActive(4)}
        />
         <SliderThumbnailItem 
        itemActive={itemActive} 
        image="/imgs/5.jpg" 
        id={5} 
        name="Nike" 
        onClick={() => setItemActive(5)}
        />
      </ul>
    </div>
  );
}
