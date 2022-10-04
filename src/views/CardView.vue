<template>
  <div class="container mt-10">
    <div class="grid grid-cols-fluid gap-10 max-h-[500px]">
      <Card
        :width="300"
        class="bg-white p-5 rounded-[15px] shadow-md text-center mx-auto"
      >
        <template v-slot:card-header>
          <i class="fa-brands fa-linkedin text-[100px]"></i>
          <h1 class="text-4xl font-bold my-5">LinkedIn</h1>
        </template>
        <template v-slot:default>
          <div class="overflow-auto max-h-[200px]">
            <p class="text-justify text-sm p-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
              numquam itaque ipsam asperiores minima nostrum esse quos
              voluptates amet eaque perferendis.
            </p>
          </div>
        </template>
        <template v-slot:card-footer>
          <div class="relative w-full">
            <hr class="my-5" />
            <button
              class="bg-[#303030] text-white p-4 my-auto rounded-full hover:bg-[#505050] duration-200 active:bg-[#909090]"
            >
              View profile
            </button>
          </div>
        </template>
      </Card>
      <Card
        :width="300"
        :height="600"
        class="bg-white rounded-[15px] shadow-md text-center mx-auto"
      >
        <template v-slot:card-header>
          <img
            class="rounded-t-[15px] h-[200px] w-full"
            src="../assets/img/background-1.jpg"
            alt="Card background image"
          />
        </template>
        <template v-slot:default>
          <div class="overflow-auto max-h-[200px]">
            <h3 class="font-semibold mt-5 text-indigo-400">1 week ago</h3>
            <h1 class="font-semibold text-indigo-800 text-3xl">Card title</h1>
            <p class="py-5 text-sm mx-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              soluta nam suscipit a quam obcaecati adipisicing.
            </p>
          </div>
        </template>
        <template v-slot:card-footer>
          <div class="relative rounded-b-[15px] w-full bg-indigo-800">
            <div class="grid grid-cols-3 text-white p-3">
              <div>
                <h5 class="text-2xl">32</h5>
                <h6 class="font-semibold">likes</h6>
              </div>
              <div>
                <h5 class="text-2xl">178</h5>
                <h6 class="font-semibold">comments</h6>
              </div>
              <div>
                <h5 class="text-2xl">298</h5>
                <h6 class="font-semibold">views</h6>
              </div>
            </div>
          </div>
        </template>
      </Card>
      <Card
        :width="400"
        class="bg-neutral-800 text-white rounded-[15px] shadow-md text-left mx-auto pb-5"
      >
        <template v-slot:card-header>
          <div class="relative">
            <div
              class="bg-indigo-500 opacity-50 rounded-t-[15px] masked absolute top-0 left-0 w-full h-full z-10"
            ></div>
            <img
              class="z-9 rounded-t-[15px] masked filter brightness-140 contrast-150"
              src="../assets/img/background-2.jpg"
              alt="Card background image"
            />
          </div>
        </template>
        <template v-slot:default>
          <div class="px-5">
            <h1 class="font-semibold text-3xl">Canada</h1>
            <p class="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              soluta nam suscipit a quam obcaecati adipisicing. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
              <br />
              <br />
              Ex eaque ab nulla pariatur quaerat corrupti quod incidunt commodi
              voluptatum dignissimos.
            </p>
          </div>
        </template>
      </Card>
      <Card
        :width="300"
        class="bg-white text-[#202020] rounded-md shadow-md text-center mx-auto"
      >
        <template v-slot:card-header>
          <div
            class="absolute top-0 left-0 w-full h-[3px] bg-orange-500 rounded-t-md"
          ></div>
          <h1 class="text-2xl my-20 font-semibold">Our values</h1>
        </template>
        <template v-slot:default>
          <div class="px-5">
            <p class="text-sm font-light text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              soluta nam suscipit a quam obcaecati adipisicing. Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div class="mt-5 flex justify-center">
            <div class="w-[2px] h-[100px] bg-orange-500 mr-0"></div>
            <div>
              <ul>
                <li class="italic my-2 flex justify-start">
                  <div
                    class="w-[13px] h-[2px] bg-orange-500 my-auto mr-2"
                  ></div>
                  <div>Lorem ipsum dolor sit amet</div>
                </li>
                <li class="italic my-2 flex justify-start">
                  <div
                    class="w-[13px] h-[2px] bg-orange-500 my-auto mr-2"
                  ></div>
                  <div>Lorem ipsum dolor sit amet</div>
                </li>
                <li class="italic my-2 flex justify-start">
                  <div
                    class="w-[13px] h-[2px] bg-orange-500 my-auto mr-2"
                  ></div>
                  <div>Lorem ipsum dolor sit amet</div>
                </li>
              </ul>
            </div>
          </div>
        </template>
        <template v-slot:card-footer>
          <img
            src="../assets/img/logo-1.png"
            alt="Logo picture"
            class="h-[100px] absolute -right-[50px] -bottom-[35px]"
          />
        </template>
      </Card>
      <Card
        :width="600"
        class="bg-gradient-to-r from-cyan-500 to-blue-800 text-white rounded-[15px] shadow-md text-center mx-auto col-span-2"
      >
        <template v-slot:card-header>
          <div class="flex justify-between m-5">
            <div class="ml-5 mt-3">
              <i class="fa-solid fa-plane-departure text-[30px]"></i>
            </div>
            <div class="mt-3 text-lg font-medium">
              MAD
              <i class="fa-solid fa-chevron-right text-[14px] ml-5"></i>
              <i class="fa-solid fa-chevron-right text-[14px] mr-5"></i>
              LON
            </div>
            <div class="mr-5 mt-3">
              <div
                class="p-2 rounded-full h-[35px] w-[35px] hover:bg-blue-500 duration-200"
              >
                <i class="fa-solid fa-xmark text-[20px]"></i>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:default>
          <div class="mx-10">
            <p class="text-lg font-light text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              soluta nam suscipit a quam obcaecati adipisicing. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Eum, explicabo.
            </p>
          </div>
        </template>
        <template v-slot:card-footer>
          <div class="flex justify-start pb-5">
            <button
              class="ml-10 mt-5 border-white border-2 rounded-full p-3 px-5 hover:bg-cyan-500 active:bg-cyan-200 duration-200"
            >
              Book flight
            </button>
          </div>
        </template>
      </Card>
      <Card
        :width="600"
        class="bg-white text-[#404040] rounded-[15px] shadow-lg mx-auto col-span-2"
      >
        <template v-slot:card-header>
          <div
            class="h-[150px] w-[150px] rounded-[15px] bg-gradient-to-r from-yellow-400 to-red-500 shadow-lg shadow-orange-400 absolute top-1/2 -left-[30px] -translate-y-1/2"
          ></div>
        </template>
        <template v-slot:default>
          <div class="ml-[150px] mt-[50px] text-left">
            <h5 class="font-medium text-slate-400">05 DEC 2022</h5>
            <h1 class="font-bold text-slate-800 text-lg">
              Lorem ipsum dolor sit amet.
            </h1>
            <p class="mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
              soluta ea, inventore sunt quidem repellendus tempora, eligendi sed
              odit excepturi aspernatur consequuntur?
            </p>
          </div>
        </template>
        <template v-slot:card-footer>
          <div class="flex justify-end m-5">
            <button
              class="bg-gradient-to-r from-yellow-400 to-red-500 shadow-lg text-white p-3 rounded-[15px]"
            >
              Read more
            </button>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Card from "../components/Card.vue";
</script>

<style lang="scss">
.masked {
  clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
}
</style>
