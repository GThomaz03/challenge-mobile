// types.ts
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
  ListaMotos: undefined; // ✅ <- adicione isso se quiser uma tela de lista separada
};


type Moto = {
  id: string; // UUID
  modelo: string;
  placa: string;
  status: string;
};
