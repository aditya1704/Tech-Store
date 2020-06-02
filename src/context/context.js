//REFER : https://reactjs.org/docs/context.html

import React  from 'react'
import {Links} from './linkData'
import {socialData} from './socialData'
//import {items} from './productData'
import {client} from './contentful'
//create an object of context api
const ProductContext = React.createContext()

//create a component to pass the props to child component
class ProductProvider extends React.Component{
    state={
        sideBarOpen:false,
        cartOpen:false,
        cartItems:0,
        links:Links,
        socialLinks:socialData,
        cart:[],
        cartTotal:0,
        cartSubTotal:0,
        cartTax:0,
        storeProducts:[],
        filteredProducts:[],
        featuredProducts:[],
        singleProduct:{},
        loading:true,
        search:'',
        min:0,
        max:0,
        shipping:false,
        company:'all'
    }

    componentDidMount(){
        //from contentful items
        //this.setProducts(items);
        client
  .getEntries({
      content_type:'techStoreProducts'
  })
  .then(response=>this.setProducts(response.items))
  .catch(err => console.log(err));


    }

    //set Products
    
    //Store products contains the necessary fields of products
    setProducts = products =>{
        let storeProducts=products.map(item=>{
            const {id}=item.sys;
            const image=item.fields.image.fields.file.url
            const product ={id,...item.fields,image};
            return product
        })
        
        //feature products
        let featuredProducts=storeProducts.filter(item=>item.featured===true)
        //set maxPrice
        let maxPrice=Math.max(...storeProducts.map(item=>item.price))
        this.setState({
            storeProducts:storeProducts,
            featuredProducts:featuredProducts,
            filteredProducts:storeProducts,
            cart:this.getStorageCart(),
            singleProduct:this.getStorageProduct(),
            loading:false,
            price:maxPrice,
            max:maxPrice

        },()=>{this.addTotals()})        

    }

    //local cart storage
    getStorageCart=()=>{
        let cart
        if(localStorage.getItem('cart')){
            cart=JSON.parse(localStorage.getItem('cart'))
        }else cart =[]

        return cart
    }

    //local Product storage
    getStorageProduct=()=>{
        return localStorage.getItem('singleProduct')? JSON.parse(localStorage.getItem('singleProduct')):{}
    }

    
    getTotals =()=>{
        let cartItems=0;
        let subTotal=0;
        this.state.cart.forEach(item => {//Every item in cart has all the properties set in addToCart function
            cartItems+=item.count
            subTotal+=item.total
        });
        subTotal=parseFloat(subTotal.toFixed(2))
        let tax= parseFloat((subTotal*0.2).toFixed(2))
        let total=parseFloat((subTotal+tax).toFixed(2))
        return{
            cartItems,
            total,
            tax,
            subTotal
        }

    }

    addTotals=()=>{
        const totals=this.getTotals()
        this.setState({
            cartItems:totals.cartItems,
            cartTotal:totals.total,
            cartSubTotal:totals.subTotal,
            cartTax:totals.tax
        })
    }

    syncStorage=()=>{
        localStorage.setItem('cart',JSON.stringify(this.state.cart))
    }

    addToCart=(id)=>{
        let tempCart=[...this.state.cart]//this has the cart before the function is performed
        let tempProducts=[...this.state.storeProducts]//this has all the products
        let tempItem=tempCart.find(item=>item.id===id)//checks for the product in cart
        if(!tempItem){//IF product to be added is not in cart
            tempItem=tempProducts.find(item=>item.id===id)//finds the product in all the products available
            let total= tempItem.price
            let cartItem={...tempItem,count:1,total}//adds two new properties count and total
            tempCart=[...tempCart,cartItem]//adds the new item to cart
        }
        else{//Here  we just update the properties
            tempItem.count++
            tempItem.total=tempItem.price*tempItem.count
            tempItem.total=parseFloat(tempItem.total.toFixed(2)) //.toFixed() return string
        }

        this.setState({
            cart:tempCart
        },()=>{//callback function runs after the state is set
            this.addTotals()
            this.syncStorage()
            this.openCart()
        })
    }

    setSingleProduct = id =>{
        let product = this.state.storeProducts.find(item=>item.id===id)
        localStorage.setItem('singleProduct',JSON.stringify(product))
        this.setState({
            singleProduct:{...product},
            loading:false        
        })
        
    }

    handleSideBar = ()=>{
        this.setState({
            sideBarOpen:!this.state.sideBarOpen
        })
    }

    handleCart = () =>{
        this.setState({
            cartOpen:!this.state.cartOpen
        })
    }

    closeCart = ()=>{
        this.setState({
            cartOpen:false
        })
    }

    openCart = ()=>{
        this.setState({
            cartOpen:true
        })
    }
    //increases the quantity of product  
    increment = (id)=>{
        let tempCart=[...this.state.cart]
        let tempItem=tempCart.find(item=>item.id===id)
        tempItem.count+=1;
        tempItem.total= parseFloat((tempItem.count * tempItem.price).toFixed(2))
        this.setState(()=>{
            return {cart:[...tempCart]}
        },()=>{
            this.addTotals()//this updates the total value once the state is changed
            this.syncStorage()//this updates the cart local storage once the state is changed 
        })
    }

    decrement = (id) =>{
        let tempCart=[...this.state.cart]
        let tempItem=tempCart.find(item=>item.id===id)
        tempItem.count-=1;
        tempItem.total= parseFloat((tempItem.count * tempItem.price).toFixed(2))
        
        this.setState(()=>{
            return {cart:[...tempCart]}
        },()=>{
            this.addTotals()
            this.syncStorage()
            if(tempItem.count===0){
                this.removeProduct(id)
            }
        })
    }

    removeProduct =(id) =>{
        let updatedCart=this.state.cart.filter(item=>item.id!==id)
        this.setState(()=>{
            return {cart: updatedCart}
        },()=>{
            this.addTotals()
            this.syncStorage()
        })
    }

    clearCart =()=>{
        this.setState(()=>{
            return {cart:[]}
        },()=>{
            this.addTotals()
            this.syncStorage()
        })
    }

    //Filtering

    //handleChnage
    handleChange=(event)=>{
        const name= event.target.name 
        const value= event.target.type==='checkbox'?event.target.checked:event.target.value //we do not have name property in checkox input
        this.setState({
            [name]:value //wil dynamically change state when event is value is changed
        },this.sortData)
    }

    sortData=()=>{
        const {storeProducts,search,company,price,shipping}=this.state
        let tempPrice=parseInt(price)
        let tempProducts=[...storeProducts]
        //Filtering based on price
        tempProducts=tempProducts.filter(product=>product.price <= tempPrice)

        //Filtering based on company
        if(company!=='all'){
            tempProducts=tempProducts.filter(product=>product.company===company)
        }
        if(shipping){
            tempProducts=tempProducts.filter(item=>{
                return item.freeShipping===true}
                )
        }
        if(search.length>0){
            tempProducts=tempProducts.filter(item=>{
                let tempSearch=search.toLowerCase()
                let tempTitle=item.title.toLowerCase().slice(0,search.length)
                
                if(tempSearch===tempTitle){
                    return item
                }
                
            })
        }

        this.setState({
            filteredProducts:tempProducts
        })

    }

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleCart:this.handleCart,
                closeCart:this.closeCart,
                openCart:this.openCart,
                handleSideBar:this.handleSideBar,
                addToCart:this.addToCart,
                setSingleProduct:this.setSingleProduct,
                increment:this.increment,
                decrement:this.decrement,
                clearCart:this.clearCart,
                removeProduct:this.removeProduct,
                handleChange:this.handleChange 

            }}>
            {/* Anything you wrap inside the ProductProvider Component can access the value passed in the Provider */ }
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

//use consumer object in the component where you want to recieve the props
const ProductConsumer =ProductContext.Consumer

export {ProductProvider,ProductConsumer};