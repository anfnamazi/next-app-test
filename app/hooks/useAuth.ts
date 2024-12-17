import { useLocalstorageState } from "rooks";
import { LocalStorageEnum } from "../@types/enum";

const useAuth = () => {
  const [token, setToken] = useLocalstorageState<string | null>(
    LocalStorageEnum.TOKEN
  );
  return { token, setToken };
};
export default useAuth;
