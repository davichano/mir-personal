import {useEffect, useState} from "react";
import userService from "../services/UserService.js";

export const useStartUps = () => {
  const [startUps, setStartUps] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchUsers = async () => {
      try {
        const data = await userService.getAllUsers();
        if (isMounted) {
          setStartUps(data || []); // Si `data` es null o undefined, usa un arreglo vacío
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Error al cargar datos");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  return {startUps, error, loading};
};
