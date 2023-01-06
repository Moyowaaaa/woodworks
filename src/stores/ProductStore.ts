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
                    large:true,
                    slug:'black-volar',
                    Limage:'/images/blackValorSofa.png',
                 
                   

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
                    slug:'blue-volar',
                    Limage:'/images/blueValorChairr.png',

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
                    slug:'blue-Nolan',
                    Limage:'/images/blueNolanChairr.png',

                },
                // {
                //     id:4,
                //     image:'/images/blueNolanChair.png',
                //     name:'Blue Nolan Chair',
                //     price:'N46k',
                //     category:'Living Room',
                //     type:'Chair',
                //     size:'35cm x 75cm x 86cm',
                //     material:'Array',
                //     country:'Italia',
                //     // colors:['blue','grey'],
                //     productCode:15973,
                //     slug:'blue-Nola-Chair',
                //     Limage:'/images/blueNolanChairr.png',

                // },
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
                    slug:'navy-volar',
                    Limage:'/images/navyBlueValorChairr.png',

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
                    slug:'green-Nolan',
                    Limage:'/images/greenNolanSofaa.png',
                    

                },
                {
                    id:7,
                    image:'/images/bedsideTableStand.png',
                    name:'Bedside Table Stand',
                    type:'Nightstand',
                    price:'N25K',
                    productCode:13587,
                    bestSeller:true,
                    category:'bedroom',
                    size:'50cm x 50cm x 20cm',
                    material:'Mahagony Wood',
                    country:'Sweden',
                    slug:'bedside-stand',
                    Limage:'/images/bedsideTableStandd.png',
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
                    slug:'grey-sofa',
                    Limage:'/images/greyNolanSofaa.png',
                    

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
                    slug:'black-nolan',
                    Limage:'/images/greyNolanChairr.png',
                    
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
                    slug:'grey-Hull',
                    Limage:'/images/greyHullChairr.png',
                    
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
                    slug:'grey-lamp',
                    Limage:'/images/greyStandingLampp.png',
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
                    slug:'brown-deli',
                    Limage:'/images/brownDeliChairr.png',
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
                    slug:'beige-nolan',
                    Limage:'/images/greyNolaa.png',
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
                    slug:'grey-no-chair',
                    Limage:'/images/greyNolanChairr.png',
                    
                    
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
                    slug:'blue-avel',
                    Limage:'/images/blueHullChairr.png',
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
                    large:true,
                    slug:'dark-grey',
                    Limage:'/images/darkGreyNolanSofaa.png',
                    
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
                    slug:'grey-venir',
                    Limage:'/images/greyVenirChairr.png',
                },
                {
                    id:18,
                    image:'/images/blueHullChair.png',
                    name:'Blue Hull Chair',
                    price:'N54k',
                    category:'Living Room',
                    type:'Chair',
                    size:'50cm x 75cm x 86cm',
                    material:'Veneer',
                    country:'Sweden',
                    // colors:['black','grey'],
                    productCode:28910,
                    bestSeller:true,
                    slug:'blue-hull',
                    Limage:'/images/blueHullChairr.png',
                },
               
            ]
        };
    },
    getters:{
        bestSellers:(state) => state.products.filter((product) => product.bestSeller === true),
        allProducts:(state) => state.products,
        // singleProduct:(state) => {
        //     return (slug:string) => state.products.find((product) => product.slug === slug) 
        // }
        singleProduct: (state) => {
            return (productSlug: any) => state.products.find((product) => product.slug === productSlug);
        },
        productById: (state) => {
            return(productId:any) => (state.products.find((product) => product.id === (+productId)))     
        },
        getSimilarProducts:(state) => {
            return(productCategory:string) => (state.products.filter((product) => product.category === productCategory))
        }
    },
})


export default useProductStore