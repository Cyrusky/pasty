import type { CommandsName } from "@/types";
import { invoke } from "@tauri-apps/api/core";

export const callApi = async <T>(
  command: CommandsName,
  args?: Record<string, unknown>,
): Promise<T> => {
  console.log("call api with: ", command, args);
  return await invoke<T>(command, args);
};
