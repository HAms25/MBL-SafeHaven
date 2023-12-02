import { useEffect, useState } from "react";
import supabase from "../lib/supabase";

interface EmployeeProps {
    id: number;
    name: string;
    info: string;
    image_path: string;
  }
  
const useEmployeeData = () => {
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEmployees = async () => {
    try {
      const { data, error } = await supabase.from("employee").select("*");

      if (error) {
        setError("Error al cargar los datos");
      } else {
        setEmployees(data);
      }
    } catch (error) {
      setError("Error inesperado");
    } finally {
      setLoading(false);
    }
  };
console.log(employees)
  useEffect(() => {
    fetchEmployees();
  }, []);

  return { employees, loading, error };
};

export default useEmployeeData;