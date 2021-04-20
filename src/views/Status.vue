<template>
  <div class="status">
    <line-chart v-bind="config" :data="data"/>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { LineChart } from "@opd/g2plot-vue";
import axios from "axios";

export default defineComponent({
  name: "status",
  components: {
    LineChart,
  },
  data() {
    return {
      config: {
        xField: "label",
        yField: "data",
        smooth: true,
        autoFit: true,
      },
      data: [],
    };
  },

  async mounted() {
    setInterval(this.addData, 1000);
  },

  methods: {
    addData() {
      axios
        .get("/statssys")
        .then(
          (response) => console.log(response.data.Sys),
          (response) => console.log(response.data.Uptime),
          (response) =>
            this.data = [
              ...this.data,
              {
                label: (response.data.Uptime).toString(),
                data: (response.data.Uptime),
              }
            ]
        )
        .catch((error) => console.log(error));
      LineChart.render();
    },
  },
});
</script>