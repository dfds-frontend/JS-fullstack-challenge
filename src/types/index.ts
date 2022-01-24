export type SailingTime = {
  id: string;
  name: string;
  departsAt: Date;
  arrivesAt: Date;
  portOfLoading: string;
  portOfDischarge: string;
};

export enum VesselName {
  CROWN = "Crown",
  PEARL = "Pearl",
  ATHENA = "Athena",
  OPTIMA = "Optima",
  REGINA = "Regina",
  BRITANNIA = "Britannia",
}
