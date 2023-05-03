import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

	useEffect(async () => {
		const responde = await axios(API);
		setProducts(responde.data);
	}, []);

  return products;
}

export default useGetProducts;