<template>
  <div>
    <footer>
      <p>Copyright 2021 Chigiri.</p>
      <div  class="footer-icon" v-for="(contract, i) in contracts" :key="i">
        <a v-bind:href="contract.url">
          <font-awesome-icon
            :icon="[contract.prefix ,contract.icon]"
            size="2x"
          ></font-awesome-icon>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      contracts: [
        { 
          prefix: "fab",
          icon: "twitter",
          url: "https://twitter.com/Chigiri3desu",
        },
        {
          prefix: "fab",
          icon: "github",
          url: "https://github.com/Chigiri-oym/portfolio",
        },
        {
          icon: "envelope",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSfgzXIcl44j6_PYIZtqwZzNsxshL49gG7UGk93tA32dv2_uCw/viewform",
        },
      ]
    };
  },
};
</script>
