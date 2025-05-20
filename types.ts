import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  Login: undefined;
  MainApp: undefined;
  DetalheMoto: {
    moto: {
      modelo: string;
      placa: string;
      status: string;
    };
  };
  ListaMotos: undefined;
};

export type DetalheRouteProp = RouteProp<RootStackParamList, 'DetalheMoto'>;

type Moto = {
  id: string; // UUID
  modelo: string;
  placa: string;
  status: string;
};
