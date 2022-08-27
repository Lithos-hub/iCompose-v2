import { ref } from "vue";

const useDialog = () => {
  const isShowingOptions = ref(false);
  let dialog: HTMLElement;
  let dialogOverlay: HTMLElement;

  const showOptions = () => {
    isShowingOptions.value = true;
    setTimeout(() => {
      dialogOverlay = document.querySelector(".dialog__overlay");
      dialog = document.querySelector(".dialog__spreadsheet");
      if (dialog && dialogOverlay) {
        dialog.style.transition = "all .5s ease-out";
        dialogOverlay.style.transition = "all .5s ease-out";
        dialog.style.top = "50%";
        dialog.style.opacity = "1";
        dialogOverlay.style.opacity = "1";
      }
    }, 100);
  };

  const hide = () => {
    dialogOverlay = document.querySelector(".dialog__overlay");
    dialog = document.querySelector(".dialog__spreadsheet");
    if (dialog && dialogOverlay) {
      dialog.style.transition = "all .5s ease-out";
      dialogOverlay.style.transition = "all .5s ease-out";
      dialog.style.top = "30%";
      dialog.style.opacity = 0;
      dialogOverlay.style.opacity = 0;
      setTimeout(() => {
        isShowingOptions.value = false;
      }, 500);
    }
  };

  return {
    isShowingOptions,
    showOptions,
    hide,
  };
};

export default useDialog;
