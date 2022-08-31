<template>
<div>
  {{ user.name }} / {{ user.age }} / {{ user.title }}<br/>
  <input type="button" @click="addAge" value="나이먹기">
</div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';

interface IUser {
  name: string;
  age: number;
  title: string;
}

@Component
export default class Watcher extends Vue {
  private user: IUser;

  constructor() {
    super();
    this.user = {
      name: 'hoonse',
      age: 33,
      title: 'junior',
    };
  }

  @Watch('user', { deep: true })
  private onChangeUserAge(value: IUser, _oldValue: IUser) {
    if (value.age >= 18 && value.age < 70) {
      this.user.title = 'junior';
    } else if (value.age >= 70) {
      this.user.title = 'senior';
    }
  }

  private addAge() {
    this.user.age += 1;
  }
}
</script>

<style scoped>

</style>
