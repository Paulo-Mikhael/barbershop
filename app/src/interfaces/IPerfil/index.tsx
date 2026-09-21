import { IAvatar } from "../IAvatar";

export interface IPerfil {
  id: number;
  client_id: number;
  joined_at: Date;
  username: string;
  avatar: IAvatar;
  biography: string;
  birthday: Date;
}

export type ISecurePerfil = Omit<IPerfil, "client_id">;
