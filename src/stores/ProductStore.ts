import { defineStore } from "pinia";

const useProductStore = defineStore('ProductStore', {
    state:() => {
        return{
            products:[
                {
                    id:1,
                    image:'/images/blackValorSofa.png',
                    name:'Black Valor Sofa',
                    price:'N100k',
                    category:'Living Room',
                    type:'Sofa',
                    size:'100cm x 120cm x 50cm',
                    material:'Veneer',
                    country:'Sweden',
                    // colors:['black','grey'],
                    productCode:10000,
                    large:true

                },
                {
                    id:2,
                    image:'/images/blueValorChair.png',
                    name:'Blue Valor Chair',
                    price:'N35k',
                    category:'Living Room',
                    type:'Chair',
                    size:'60cm x 61cm x 26cm',
                    material:'Veneer',
                    country:'Italia',
                    // colors:['blue','grey'],
                    productCode:12572,

                },
                {
                    id:3,
                    image:'/images/blueNolanChair.png',
                    name:'Blue Nolan Chair',
                    price:'N40k',
                    category:'Living Room',
                    type:'Chair',
                    size:'60cm x 75cm x 26cm',
                    material:'Array',
                    country:'Italia',
                    // colors:['blue','grey'],
                    productCode:15673,

                },
                {
                    id:4,
                    image:'/images/blueNolanChair.png',
                    name:'Blue Nolan Chair',
                    price:'N46k',
                    category:'Living Room',
                    type:'Chair',
                    size:'35cm x 75cm x 86cm',
                    material:'Array',
                    country:'Italia',
                    // colors:['blue','grey'],
                    productCode:15973,

                },
                {
                    id:5,
                    image:'/images/navyBlueValorChair.png',
                    name:'Navy Blue Valor Chair',
                    price:'N35k',
                    category:'Living Room',
                    type:'Chair',
                    size:'35cm x 75cm x 86cm',
                    material:'Woven Seat',
                    country:'Poland',
                    // colors:['blue','grey'],
                    productCode:14673,

                },
                {
                    id:6,
                    image:'/images/greenNolanSofa.png',
                    name:'Green Nolan Sofa',
                    price:'N105k',
                    category:'Living Room',
                    type:'Sofa',
                    size:'100cm x 120cm x 50cm',
                    material:'Veneer',
                    country:'Sweden',
                    // colors:['black','grey'],
                    productCode:15985,

                },
                {
                    id:7,
                    image:'/images/bedsideTableStand.png',
                    name:'Bedside Table Stand',
                    price:'N25K',
                    productCode:13587,
                    bestSeller:true,
                    category:'bedroom',
                    size:'50cm x 50cm x 20cm',
                    material:'Mahagony Wood',
                    country:'Sweden',
                },
                {
                    id:8,
                    image:'/images/greyNolanSofa.png',
                    name:'Grey Nolan Sofa',
                    price:'N115k',
                    category:'Living Room',
                    type:'Sofa',
                    size:'100cm x 120cm x 50cm',
                    material:'Veneer',
                    country:'Sweden',
                    // colors:['black','grey'],
                    productCode:16780,

                },

                {
                    id:9,
                    image:'/images/greyNolanChair.png',
                    name:'Grey Nolan Chair',
                    price:'N46k',
                    category:'Living Room',
                    type:'Chair',
                    size:'35cm x 75cm x 86cm',
                    material:'Array',
                    country:'Italia',
                    productCode:15985,
                    bestSeller:true,
                    
                },

                {
                    id:10,
                    image:'/images/greyHullChair.png',
                    name:'Grey Hull Chair',
                    price:'N35K',
                    productCode:12367,
                    bestSeller:true,
                    category:'Living Room',
                    type:'Chair',
                    size:'35cm x 75cm x 86cm',
                    material:'Veneer',
                    country:'Italia',
                },
                {
                    id:11,
                    image:'/images/greyStandingLamp.png',
                    name:'Grey Standing Lamp',
                    price:'N105K',
                    productCode:15985,
                    
                    category:'Bedroom',
                    type:'Lamp',
                    size:'35cm x 45cm x 86cm',
                    material:'Mahagony Wood',
                    country:'Italia',
                },
                {
                    id:12,
                    image:'/images/brownDeliChair.png',
                    name:'Brown Deli Chair',
                    price:'N105K',
                    productCode:13587,

                    category:'living room',
                    type:'Chair',
                    size:'50cm x 50cm x 86cm',
                    material:'Array',
                    country:'India',
                },
                {
                    id:13,
                    image:'/images/greyNola.png',
                    name:'Beige Nolan Sofa',
                    price:'N95K',
                    productCode:16780,

                    category:'living room',
                    type:'Chair',
                    size:'50cm x 50cm x 86cm',
                    material:'Array',
                    country:'Great Britain',
                },

                {
                    id:14,
                    image:'/images/greyNolanChair.png',
                    name:'Grey Bale Chair',
                    price:'N35k',
                    category:'Living Room',
                    type:'Chair',
                    size:'35cm x 75cm x 86cm',
                    material:'Veneer',
                    country:'Wales',
                    productCode:14673,
                    bestSeller:true,
                    
                },
                {
                    id:15,
                    image:'/images/darkGreyNolanSofa.png',
                    name:'Dark Grey Nolan Sofa',
                    price:'N125k',
                    category:'Living Room',
                    type:'Sofa',
                    size:'100cm x 120cm x 50cm',
                    material:'Veneer',
                    country:'Sweden',
                    // colors:['black','grey'],
                    productCode:15785,
                    large:true
                },
                {
                    id:16,
                    image:'/images/blueAvelChair.png',
                    name:'Blue Avel Chair',
                    price:'N125k',
                    category:'Living Room',
                    type:'Chair',
                    size:'35cm x 75cm x 86cm',
                    material:'Veneer',
                    country:'Sweden',
                    // colors:['black','grey'],
                    productCode:15785,
                },
                {
                    id:17,
                    image:'/images/greyVenirChair.png',
                    name:'Grey Venir Chair',
                    price:'N45k',
                    category:'Living Room',
                    type:'Chair',
                    size:'35cm x 75cm x 86cm',
                    material:'Veneer',
                    country:'Sweden',
                    // colors:['black','grey'],
                    productCode:15985,
                },
               
            ]
        };
    },
    getters:{
        bestSellers:(state) => state.products.filter((product) => product.bestSeller === true)
    }
})


export default useProductStore