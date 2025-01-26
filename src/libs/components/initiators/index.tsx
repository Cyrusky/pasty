import { EventListeners } from "@/libs/components/initiators/EventListeners.tsx";
import { Locales } from "@/libs/components/initiators/Locales.tsx";

export const Initiator = () => {
  return (
    <>
      <EventListeners />
      <Locales />
    </>
  );
};
