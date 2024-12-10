import {useEffect, useState} from "react";

export const useStartUps = () => {
  const [startUps, setStartUps] = useState([]);

  useEffect(() => {
    setStartUps([
      {
        id: 1,
        name: "Llama Pe",
        logo: "https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png",
        ruc: "20602020202020"
      },
      {
        id: 2,
        name: "Start Up 2",
        logo: "https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg",
        ruc: "2060202026599"
      },
      {
        id: 3,
        name: "Random Name",
        logo: "https://img.freepik.com/free-vector/branding-identity-corporate-vector-abstract-s-logo-design_460848-13703.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715817600&semt=sph",
        ruc: "20602031233"
      },
      {
        id: 4,
        name: "Emprende Pe",
        logo: "https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg",
        ruc: "20602031289"
      },
    ])
  }, []);

  return startUps;
}
