// function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
//   if (localStorageTheme !== null) {
//     return localStorageTheme;
//   }

//   if (systemSettingDark.matches) {
//     return "dark";
//   }

//   return "light";
// }

// const localStorageTheme = localStorage.getItem("theme");
// const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

// let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
// console.log(currentThemeSetting);
// const cachedTheme = localStorage.getItem("theme");
// if (cachedTheme) {
//   document.documentElement.dataset["theme"] = cachedTheme;
//   document.documentElement.querySelector("html")?.setAttribute(this.rootAttribute, cachedTheme);
// }
document.documentElement.dataset.theme = localStorage.theme ?? "";
