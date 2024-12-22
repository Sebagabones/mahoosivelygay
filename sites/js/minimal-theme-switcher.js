
const THEME_OWNER = document.documentElement;
const THEME_STORAGE_KEY = 'theme';
const localStorageTheme2 = localStorage.getItem("theme");
const systemSettingDark2 = window.matchMedia("(prefers-color-scheme: dark)");

// const currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
document.addEventListener('DOMContentLoaded', () => {
  const themeSwitcher = {
    // Config
    _scheme: "auto",
    menuTarget: "details.dropdown",
    buttonsTarget: "a[data-theme-switcher]",
    buttonAttribute: "data-theme-switcher",
    rootAttribute: "data-theme",
    localStorageKey: "theme",




    // calculateSettingAsThemeString({ localStorageTheme2, systemSettingDark2 }) {
    //   if (localStorageTheme2 !== null) {
    //     return localStorageTheme2;
    //   }

    //   if (systemSettingDark2.matches) {
    //     return "dark";
    //   }

    //   return "light";
    // },

    // Init
    init() {
      // this.scheme = this.calculateSettingAsThemeString({ localStorageTheme2, systemSettingDark2 });
      this.scheme = localStorage.theme ?? "";
      console.log(localStorage.theme)
      this.initSwitchers();
    },



    //   // Init switchers
    initSwitchers() {
      const buttons = document.querySelectorAll(this.buttonsTarget);
      buttons.forEach((button) => {
        button.addEventListener(
          "click",
          (event) => {
            event.preventDefault();
            buttonThemePressed = button.getAttribute(this.buttonAttribute);
            console.log(buttonThemePressed);
            // if (buttonThemePressed == "dark" || buttonThemePressed == "light") {

            //   document.querySelector("html")?.setAttribute(this.rootAttribute, buttonThemePressed);

            //   window.localStorage?.setItem(THEME_STORAGE_KEY, buttonThemePressed);

            // }
            
            document.documentElement.dataset.theme = buttonThemePressed;

            window.localStorage?.setItem(THEME_STORAGE_KEY, buttonThemePressed);

            // else {

            //   // systemSettingDark3 = window.matchMedia("(prefers-color-scheme: dark)");
            //   window.localStorage?.setItem(THEME_STORAGE_KEY, buttonThemePressed);
            //   console.log(systemSettingDark3);

            //   if (systemSettingDark3.matches) {
            //     document.querySelector("html")?.setAttribute(this.rootAttribute, "dark");


            //   }
            //   document.querySelector("html")?.setAttribute(this.rootAttribute, "light");




            // }
            document.querySelector(this.menuTarget)?.removeAttribute("open");
          },
          false
        );
      });
    },

  };


  themeSwitcher.init();
});
