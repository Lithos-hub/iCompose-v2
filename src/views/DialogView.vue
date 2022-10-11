<template>
  <div class="flex flex-col h-full">
    <Dialog
      v-if="showDialog"
      @close="showDialog = !showDialog"
      persistent
      title="Dialog title"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        nesciunt. Fugiat incidunt ipsam molestias mollitia sint culpa tenetur
        rem blanditiis, minima hic accusamus enim quis asperiores sit nihil
        excepturi adipisci iure vel velit omnis sed. Quibusdam quasi possimus
        accusamus soluta illum enim. Consequatur, et consequuntur? Rerum
        doloribus quia, a possimus quibusdam accusamus est similique totam omnis
        vero. <br /><br />
        Cum est dicta quasi odit recusandae cupiditate ullam hic nobis ipsum,
        ducimus consequatur, architecto, doloremque nisi. Veniam consequatur,
        autem omnis pariatur modi eveniet doloremque, unde dolorem, voluptatibus
        temporibus ipsam nobis harum magni. Corporis molestias adipisci culpa
        blanditiis velit perspiciatis recusandae, quam laboriosam quis!
      </p>
      <template v-slot:footer>
        <div class="flex justify-end">
          <Button variant="bordered" @click="showDialog = !showDialog"
            >Close</Button
          >
        </div>
      </template>
    </Dialog>
    <Button
      variant="default"
      class="z-1 mx-auto mt-auto mb-[100px]"
      @click="showDialog = !showDialog"
    >
      <span>Show dialog</span>
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import Dialog from "../components/Dialog.vue";
import Button from "../components/Button.vue";

const showDialog = ref(false);
</script>

<style scoped></style>
