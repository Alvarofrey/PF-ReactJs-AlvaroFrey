const products = [
    {
        id:'1',
        name:"Jabones Tododia",
        price:"2000",
        category:"Jabones",
        img:"https://i.ibb.co/xY9VYbL/jabonromeroysalvia2.png",
        stock: 25,
        description:"5u 90g , Vegetal,Romero y Salvia",
       },
        {
            id:'2',
            name:"Jabones Tododia Feliz Dia",
            price:"2250",
            category:"Jabones",
            img:"https://i.ibb.co/8M4dT2T/jabonfeliz.png",
            stock:10,
            description:"4u, Mandarina y Frambuesa",
            
            
    
    
        },
        {
            id:'3',
            name:"Tododia Anti-Transpirante Desodorante",
            price:"920",
            category:"Desodorantes",
            img:"https://i.ibb.co/YQ0gLbh/antiavellana.png",
            stock:15,
            description:"Invisible,Avellana",
    
        }
];

export const getProducts =() =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        },100)

    })
}
export const getProductById =(productId) =>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        },500)

    })
}
export const getProductsByCategory = (prodCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === prodCategory);
            resolve(filteredProducts);
        }, 500);
    });
};
export default products;
