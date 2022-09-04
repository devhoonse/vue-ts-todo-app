<template>
<p>
  Call Parent : {{ name }}
  <input type="button" value="CallParent" @click="updateName('CallDirectly!')">
</p>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class CallParent extends Vue {
  @Prop(String)
  private name!: string;

  private updateName(value: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$parent.callMe(value);
  }
}
</script>

<style scoped>

</style>
