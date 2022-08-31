<template>
<div>
  {{ name }}<br/>
  <b>{{ userName }}</b>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Props2 extends Vue {
  @Prop({ type: String, default: 'DefaultName2', required: true })
  private readonly name!: string;

  get userName() {
    return this.name;
  }
}
</script>

<style scoped>

</style>
