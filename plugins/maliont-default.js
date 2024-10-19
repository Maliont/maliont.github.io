export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      useMenu: () => {
        const menuOpen = ref(false);

        const toggleMenu = () => {
          menuOpen.value = !menuOpen.value;
        };

        return {
          menuOpen,
          toggleMenu,
        };
      },
    },
  };
});
