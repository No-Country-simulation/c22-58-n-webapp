import  PedidoParteCentral from './PedidoParteCentral';
 
 
 function BarraLateralDerecha(){
    

    return(

        <div className="border-2 w-1/3 md:w-1/4 min-h-screen   " >
<h2 className=" bg-blue-800 p-5 text-gray-50 md:text-xl	text-xs">ORDEN ACTUAL</h2>

  <div className="h-4/5 gb-red-500 mt-5 min-h-full">
 
  <PedidoParteCentral nombre="hamburguesa" precio={100}></PedidoParteCentral>
  <PedidoParteCentral nombre="papas fritas" precio={500}></PedidoParteCentral>
  <PedidoParteCentral nombre="coca cola" precio={300}></PedidoParteCentral>
  
  
  </div>
  
  
   

<div className="flex font-bold">
<span className="ml-100%" >TOTAL</span>
<span className="w-8/12 gb-blue-500 block"> </span>
<span className="text-left"  >$300.00</span>

</div>
 
 
 



<div className="flex justify-center context-center">
<input type="button" className="  bg-red-500 p-5 w-11/12  shadow rounded text-gray-50	text-xs 	md:text-xl "  value="ENVIAR A COCINA" />
</div>



</div>

 );
   

   
    
    }


    export default BarraLateralDerecha;