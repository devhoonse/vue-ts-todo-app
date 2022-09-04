<template>
<div>
  received : {{ message }}
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import EventBus from '@/EventBus';

@Component
export default class Receiver extends Vue {
  private message = '';

  private onReceive(msg: string) {
    this.message = msg;
  }

  private created() {
    EventBus.$on('MESSAGE', this.onReceive);
  }
}
</script>

<style scoped>

</style>
