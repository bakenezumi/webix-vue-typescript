<template>
  <div class="home">
    <Example1/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Example1 from '@/components/example1/Example1.vue'; // @ is an alias to /src

@Component({
  components: {
    Example1,
  },
})
export default class Home extends Vue {}
</script>
