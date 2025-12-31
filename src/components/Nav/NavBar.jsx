import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
const NavBar = () => {
    let products=useSelector(state=>state.product);
  return (
   <Box sx={{width:"100%",height:"15vh",backgroundColor:"black",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:'column',fontSize:"30px",fontWeight:"bold", px: 3,   // 👈 horizontal padding
    py: 2,   // 👈 vertical padding
    boxSizing: "border-box",}}>
<Box sx={{width:"100%",height:"48%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
   <Typography sx={{ fontWeight: "bold" }}>Shopping Cart</Typography>
<Button
  variant="text"
  sx={{ color: "white", fontWeight: "bold" }}
  startIcon={
    <ShoppingCartIcon color="secondary" />
  }
>
  Cart({products.length})
</Button></Box>
<Box sx={{width:"100%",height:"48%",}}>
<Button variant="text"sx={{color:"white",fontWeight:'bold'}} startIcon={< MenuIcon/>}>All</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Mobiles</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Meat</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Vegitables</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Clothes</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Electronics</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>
<Button variant="text" sx={{color:"white",fontWeight:'bold'}}>Home & Kitchen</Button>

</Box>
   </Box>
  )
}

export default NavBar
