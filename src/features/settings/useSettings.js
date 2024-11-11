import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { getSettings } from "../../services/apiSettings";

export default function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}
