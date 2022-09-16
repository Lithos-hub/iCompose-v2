<template>
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
