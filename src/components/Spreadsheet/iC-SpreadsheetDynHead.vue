<template>
  <div>
    {{ computedHeaders }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    head: {
      type: String,
    },
  },
  setup(props) {
    const headersObj = ref({
      id: "ID",
      uid: "UID",
      vin: "VIN",
      make_and_model: "Make and Model",
      color: "Color",
      transmission: "Transmission",
      drive_type: "Drive type",
      fuel_type: "Fuel type",
      car_type: "Car type",
      car_options: "Car options",
      specs: "Specs",
      doors: "Doors",
      mileage: "Mileage",
      kilometrage: "Kilometrage",
      license_plate: "License plate",
    });

    const computedHeaders = computed(() => headersObj.value[props.head]);

    return {
      headersObj,
      computedHeaders,
    };
  },
});
</script>
