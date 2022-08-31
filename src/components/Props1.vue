<template>
  <div>
    {{ name }}<br/>
    <b>{{ userName }}</b>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  props: {
    name: {
      type: String,
      default: 'DefaultName1',
      required: true,
    },
  },
})
export default class Props1 extends Vue {
  get userName() {
    return this.$props.name;
  }
}
</script>

<style scoped>

</style>
