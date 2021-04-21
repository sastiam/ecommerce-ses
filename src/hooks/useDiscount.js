const useDiscount = (price,offert) => {
  let realPrice = 0,
		priceDiscount = 0;
	
	//Si el precio es entero
	if(price % 1 === 0) realPrice = price + ".00";
	else realPrice = price;
	
	//Si existe una oferta
  if(offert){
    priceDiscount = price - Math.round(price * offert);
		if(priceDiscount % 1 === 0) priceDiscount += ".00";
  }

  return {
    realPrice,
    priceDiscount
  }
}

export default useDiscount;