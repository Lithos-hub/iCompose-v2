<template>
  <div
    class="z-1 h-[2300px] w-[2200px] fixed -left-[1100px] -top-[1500px] rounded-[3000px] bg-indigo-800 opacity-60"
  ></div>
  <div
    class="z-1 h-[2400px] w-[2500px] fixed -right-[1500px] -bottom-[1500px] rounded-[2000px] bg-slate-800 opacity-20"
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
