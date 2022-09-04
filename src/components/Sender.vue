<template>
<div>
  <input type="button" value="emit('MESSAGE', 'send message')" @click="send" />
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import EventBus from '@/EventBus';

@Component
export default class Sender extends Vue {
  // eslint-disable-next-line class-methods-use-this
  private send() {
    EventBus.$emit('MESSAGE', 'send message');
  }
}
</script>

<style scoped>

</style>
