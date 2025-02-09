import type { CommandsName } from "@/types";
import { invoke } from "@tauri-apps/api/core";

export const callApi = async <T>(
  command: CommandsName,
  args?: Record<string, unknown>,
): Promise<T> => {
  return await invoke<T>(command, args);
};
