<template>
  <button
    :class="`
    ${disabled ? 'disabled' : variant} 
    w-[${width}px] 
    max-w-[${maxWidth}px] 
    h-[${height}px] 
    max-h-[${maxHeight}px]`"
    :disabled="variant === 'disabled' || disabled"
  >
    <i :class="icon" v-if="iconLeft" />
    <span class="mx-2">
      <slot></slot>
    </span>
    <i :class="icon" v-if="iconRight" />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  variant: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  icon?: string;
  iconLeft?: boolean;
  iconRight?: boolean;
  disabled?: boolean;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.default {
  transition: all 0.3s ease;
  @apply bg-indigo-800 p-2 text-white rounded-sm hover:bg-indigo-500 hover:shadow-lg duration-200;

  &:active {
    transform: scale(1.1);
    filter: brightness(1.5);
  }
}

.bordered {
  transition: all 0.3s ease;
  @apply bg-transparent p-2 text-black border border-black rounded-sm hover:bg-slate-100 hover:shadow-lg duration-200;

  &:active {
    transform: scale(1.1);
    filter: brightness(1.5);
  }
}

.disabled {
  transition: all 0.3s ease;
  @apply bg-gray-300 p-2 text-gray-100 rounded-sm  duration-200;
}

.rounded {
  transition: all 0.3s ease;
  @apply bg-orange-500 p-2 text-gray-100 rounded-full duration-200;

  &:active {
    transform: scale(1.1);
    filter: brightness(1.5);
  }
}

.icon {
  transition: all 0.3s ease;
  @apply bg-sky-500 p-2 text-gray-100 rounded-sm duration-200;

  &:active {
    transform: scale(1.1);
    filter: brightness(1.5);
  }
}

.neumorphic {
  @apply bg-transparent text-[#303030] py-2 px-[1.5rem] rounded-[0.5rem] duration-1000 ease-linear;
  box-shadow: 0.5rem 0.5rem 1rem #dfdfdf, -0.5rem -0.5rem 1rem white;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1rem white, -0.5rem -0.5rem 1rem #dfdfdf;
  }
  &:active {
    box-shadow: inset 2rem 2rem 1rem white, inset 2rem 2rem 1rem #dfdfdf;
  }
}
.future {
  @apply text-white font-light pt-2 pb-1 px-[1.5rem] rounded-[0.5rem] ease-linear brightness-125;

  &:active:after {
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: -1;
    background: #ffffff59;
    background-blend-mode: screen;
  }
}

.future:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% + 6px);
  height: calc(100% + 6px);
  background: linear-gradient(
    60deg,
    #f79533,
    #f37055,
    #ef4e7b,
    #a166ab,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  border-radius: 1px;
  z-index: -1;
  animation: animatedgradient 10s alternate-reverse infinite;
  background-size: 500% 500%;
  clip-path: polygon(
    10% 0%,
    100% 0,
    100% 30%,
    100% 60%,
    90% 100%,
    0 100%,
    0% 70%,
    0% 40%
  );
}

.future:after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  z-index: -1;
  background: linear-gradient(120deg, black, #404040);
  animation: animatedgradient 10s ease infinite alternate;
  // background: linear-gradient(60deg, #cf1348, #25a7c1);
  // background-size: 500% 500%;
  width: 100%;
  height: 100%;
  border-radius: 1px;
  clip-path: polygon(
    10% 0%,
    100% 0,
    100% 30%,
    100% 60%,
    90% 100%,
    0 100%,
    0% 70%,
    0% 40%
  );
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 100%;
  }
  15% {
    background-position: 10% 20%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 80% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.modern {
  @apply text-black font-light py-2 px-[1.5rem] ease-linear brightness-125 duration-100;
  border-top: 4px transparent;
  border-left: 4px transparent;
  border-bottom: 4px solid cyan;
  border-right: 4px solid cyan;
  filter: drop-shadow(4px 4px 0px red);

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0px;
    width: 100%;
    height: 100%;
    background: white;
    z-index: -1;
  }

  &:hover {
    border-right: 4px solid #ff00ff;
    border-bottom: 4px solid #ff00ff;
    filter: drop-shadow(-3px -3px 0px cyan);
    border-radius: 0px 10px 0px 10px;
  }
  &:active {
    color: white;
    font-weight: 600;
    background: #202020;
    border-radius: 0px 10px 0px 10px;
  }
  &:active:after {
    background: #505050;
    filter: drop-shadow(-3px -3px 0px #00ff0d) drop-shadow(1px 1px 0px red);
    border-radius: 0px 10px 0px 10px;
  }
}
</style>
