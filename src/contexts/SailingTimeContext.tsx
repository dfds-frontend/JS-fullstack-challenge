import * as React from "react";
import { SailingTime } from "../types";
import { v4 as uuid } from "uuid";

const sampleSailingTimes: SailingTime[] = [
  {
    id: uuid(),
    name: "Crown",
    departsAt: new Date("2022-01-19T14:00:00"),
    arrivesAt: new Date("2022-01-20T09:00:00"),
    portOfLoading: "Copenhagen",
    portOfDischarge: "Oslo",
  },
  {
    id: uuid(),
    name: "Crown",
    departsAt: new Date("2022-01-20T14:00:00"),
    arrivesAt: new Date("2022-01-21T09:00:00"),
    portOfLoading: "Oslo",
    portOfDischarge: "Copenhagen",
  },
  {
    id: uuid(),
    name: "Pearl",
    departsAt: new Date("2022-01-19T14:00:00"),
    arrivesAt: new Date("2022-01-20T09:00:00"),
    portOfLoading: "Oslo",
    portOfDischarge: "Copenhagen",
  },
  {
    id: uuid(),
    name: "Pearl",
    departsAt: new Date("2022-01-20T14:00:00"),
    arrivesAt: new Date("2022-01-21T09:00:00"),
    portOfLoading: "Copenhagen",
    portOfDischarge: "Oslo",
  },
];

interface ISailingTimeContextProps {
  sailingTimes: SailingTime[];
  setSailingTimes: React.Dispatch<React.SetStateAction<SailingTime[]>>;
  selectedVessel: string | undefined;
  setSelectedVessel: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const SailingTimeContext = React.createContext<
  undefined | ISailingTimeContextProps
>(undefined);

export const SailingTimeContextProvider: React.FC = ({ children }) => {
  const [sailingTimes, setSailingTimes] =
    React.useState<SailingTime[]>(sampleSailingTimes);
  const [selectedVessel, setSelectedVessel] = React.useState<
    string | undefined
  >();

  return (
    <SailingTimeContext.Provider
      value={{
        sailingTimes,
        setSailingTimes,
        selectedVessel,
        setSelectedVessel,
      }}
    >
      {children}
    </SailingTimeContext.Provider>
  );
};

export const useSailingTimeContext = (): ISailingTimeContextProps => {
  const context = React.useContext(SailingTimeContext);
  if (!context) {
    throw new Error(
      "useSailingTimeContext must be used within SailingTimeContextProvider"
    );
  }

  return context;
};
