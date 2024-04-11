import type { Ref } from "vue";
import { computed, ref } from "vue";
import type { ThemeMode } from "@/types/_common/ThemeMode";
import { defineStore } from "pinia";

import { Colors } from "@/assets/colors";

export const useThemeStore = defineStore(
  "theme",
  () => {
    const themeMode: Ref<ThemeMode> = ref("light");

    const toggleThemeMode = () => {
      themeMode.value = themeMode.value === "light" ? "dark" : "light";
      setThemeAttribute();
    };

    const defaultIconColor = computed(() => {
      return themeMode.value === "light"
        ? Colors.iconColorDark
        : Colors.iconColorLight;
    });

    const setThemeAttribute = () => {
      document.documentElement.setAttribute(
        "data-theme",
        themeMode.value + "Mode"
      );
    };

    return { themeMode, defaultIconColor, toggleThemeMode, setThemeAttribute };
  },
  {
    persist: true,
  }
);
