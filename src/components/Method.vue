<template>
<div>
  COUNT : {{ currentCount }}
  <input type="button" value="더하기" @click="add()"/>
  <input type="button" value="리셋" @click="currentCount = 0"/>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Method extends Vue {
  private count = 0;

  private add() {
    this.count += 1;
  }

  private get currentCount() {
    return this.count;
  }

  private set currentCount(value: typeof this.count) {
    this.count = value;
  }
}
</script>

<style scoped>

</style>
