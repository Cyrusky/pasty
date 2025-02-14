import { EventListeners } from "@/libs/components/initiators/EventListeners.tsx";
import { LocaleInitiator } from "@/libs/components/initiators/Locales.tsx";
import { ThemeInitiator } from "@/libs/components/initiators/Theme.tsx";

export const Initiator = () => {
  return (
    <>
      <ThemeInitiator />
      <EventListeners />
      <LocaleInitiator />
    </>
  );
};
