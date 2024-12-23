export interface civilizationsmodel {
  id: number;
  civilizacao: string;
  planeta: {
    nome: string;
    sistemasolar: {
      estrelas: string[];
      classificacaoestrela: string;
    };
    distancia: {
      terra: string;
      vulcano: string;
    };
    populacao: {
      total: string;
      picohistorico: string;
      taxanatalidade: string;
    };
  };
  fisiologia: {
    aparencia: {
      pele: string;
      cabelo: string;
      alturamedia: string;
      antenas: string;
    };
    sentidos: {
      visao: string;
      olfato: string;
      antenas: string;
    };
  };
  historia: string;
}
