export interface IPerfil {
  id: number;
  cliente_id: number;
  joined_at: Date;
  username: string;
  avatar: {
    url: string;
    alt: string;
  };
  biography: string;
  data_nascimento: Date;
}

export type ISecurePerfil = Omit<IPerfil, "cliente_id">;