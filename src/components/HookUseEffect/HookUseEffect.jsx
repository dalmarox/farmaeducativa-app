import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

const products = [
    {
        id: 1,
        titulo: "ADACEL",
        img: "./public/vacunatorio/ADACEL (2).jpg",
        descripcion:"Vacuna con toxoide diftérico y tetánico",
        categoria: "Vacunas para niños y adolescentes",
        
        stock: 8
    },
    {
        id: 2,
        titulo: "ISTIVAC E INFLUVAC",
        img: "./public/vacunatorio/ANTIGRIPALES TETRAVALENTES.png",
        descripcion:"Vacunas antigripales tetravalentes",
        categoria: "Vacunas para adultos",
            
        stock:  18
    },
    {
        id: 3,
        titulo: "BUSTRIX",
        img: "./public/vacunatorio/BUSTRIX ACELULAR.jpg",
        descripcion: "VACUNA COMBINADA DIFTERIA, TÉTANOS Y PERTUSIS ACELULAR",
        categoria:"Vacunas para niños y adolescentes",
             
        stock: 9
    },
    {
        id: 4,
        titulo: "GAMMATET T-250",
        img: "./public/vacunatorio/Gammaglobulina-Antitetánica 250.webp",
        descripcion: "Gammaglobulina antitetánica 250",
        categoria:"Vacunas para niños y adolescentes",
            
        stock: 3
    },
    {
        id: 5,
        titulo: "GARDASIL",
        img: "./public/vacunatorio/Gardasil.jpg",
        descripcion: "Vacuna monovalente frente al virus del papiloma humano",
        categoria:"Vacunas para niños y adolescentes",
        stock: 2
    },
    {
        id: 6,
        titulo: "HEXAXIM",
        img: "./public/vacunatorio/Hexaxim-vacuna.jpg",
        descripcion: "Difteria, tétanos, Pertusis, Hepatitis B, Haemófilis influenza, Poliomielitis",
        categoria:"Vacunas para niños y adolescentes",
            
        stock: 0
    },
    {
        id: 7,
        titulo: "MENACTRA",
        img: "./public/vacunatorio/MENACTRA.jpg",
        descripcion: "Vacuna antimeningocóccica polisacárda contra serogrupos A, C y W-135, conjugada con toxoide diftérico",
         categoria:"Vacunas para niños y adolescentes",
            
        stock: 4
    },
    {
        id: 8,
        titulo: "MENVEO",
        img: "./public/vacunatorio/Menveo.jpg",
        descripcion: "Vacuna antimeningocócica contra serogrupos A, C, W-135 e Y",
        categoria:"Vacunas para niños y adolescentes",

    
        stock: 1
    },
    {
        id: 9,
        titulo: "NEUMOVAX-23",
        img: "./public/vacunatorio/Neumovax-23.jpg",
        descripcion: "Vacuna antineumocóccica 23",
        categoria:"Vacunas para adultos",
            
        
        stock: 1
    },
    {
        id: 10,
        titulo: "PREVENAR",
        img: "./public/vacunatorio/PREVENAR 13.jpg",
        descripcion:"Vacuna antineumocóccina conjugada 13 valente",
        categoria:"Vacunas para niños y adolescentes",
            
        stock: 5
    },
    {
        id: 11,
        titulo: "ROTARIX",
        img: "./public/vacunatorio/ROTARIX.jpg",
        descripcion: "Vacuna contra Rotavirus",
        categoria: "Vacunas para niños y adolescentes",
            
        stock: 9
        
    },
    {
        id: 12,
        titulo: "ROTATEC",
        img: "./public/vacunatorio/rotatec.jpg",
        descripcion: "Vacuna contra rotavirus",
        categoria: "Vacunas para niños y adolescentes",
            
        stock: 6
    },
    {
        id: 13,
        titulo: "INFLUVAC TRIVALENTE",
        imagen: "./public/vacunatorio/vacuna-antigripal TRIVALENTE.jpg",
        descripcion: "Vacuna antigripal tres cepas",
        categoria: "Vacunas para adultos",
        
        stock: 23
    },
    {
        id: 14,
        titulo: "VARILRIX",
        img: "./public/vacunatorio/VARILRIX.jpg",
        descripcion: "Vacuna anti varicela",
        categoria: "Vacunas para niños y adolescentes",
            
        stock: 12
    },
    {
        id: 15,
        titulo: "VARIVAX",
        img: "./public/vacunatorio/varicela.jpg",
        descripcion: "Vacuna anti varicela",
        categoria: "Vacunas para niños y adolescentes",
            
        stock: 3
    }
]


export const HookUseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

const handleCount1 = () => {
    setCount(count + 1);
  };
  const handleCount2 = () => {
    setCount2(count2 + 1);
  };

  useEffect(() => {
    console.log("Se modifico el contador 1");
  }, [count]);

  useEffect(() => {
    console.log("Se modifico el contador 2");
  }, [count2]);

  return (
    <>
      <div>HookUseEffect</div>
      <Button text={`Count ${count}`} functionClick={handleCount1}/>
      <Button text={`Count ${count2}`} variant="btn-success" functionClick={handleCount2}/>
    </>
  );
}
