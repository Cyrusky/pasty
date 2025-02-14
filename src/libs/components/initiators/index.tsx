import { EventListeners } from "@/libs/components/initiators/EventListeners.tsx";
import { LocaleInitiator } from "@/libs/components/initiators/Locales.tsx";

export const Initiator = () => {
  return (
    <>
      <EventListeners />
      <LocaleInitiator />
    </>
  );
};
