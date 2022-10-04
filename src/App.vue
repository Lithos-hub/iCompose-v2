<template>
  <div
    class="z-1 h-[2300px] w-[2200px] fixed -left-[1500px] -top-[1500px] rounded-br-[1000px] bg-indigo-800 opacity-60"
  ></div>
  <router-view></router-view>
</template>

<style lang="scss">
@import "./scss/app.scss";

/* width */
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: #3730a3;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #564dd4;
}
</style>
