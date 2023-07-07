<template>
  <div>
    <span :class="`loader-${variant}`"></span>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  innerText?: string;
  variant: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
$primary: #6366f1;
.loader-primary {
  width: 48px;
  height: 48px;
  border: 5px solid #202020;
  border-bottom-color: $primary;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.loader-secondary {
  width: 48px;
  height: 48px;
  border: 5px solid $primary;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.loader-tertiary {
  width: 48px;
  height: 48px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader-tertiary::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-bottom-color: $primary;
}

.loader-modern {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  background: linear-gradient(0deg, rgba(0, 255, 221, 0.2) 33%, $primary 100%);
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader-modern::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #263238;
}

.loader-atom {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader-atom::after,
.loader-atom::before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  background: $primary;
  width: 16px;
  height: 16px;
  transform: translate(-50%, 50%);
  border-radius: 50%;
}
.loader-atom::before {
  left: auto;
  right: 0;
  background: #fff;
  transform: translate(50%, 100%);
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
