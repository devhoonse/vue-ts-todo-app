<template>
<div>
  <label for="messageInput">
    messageInput
    <input id="messageInput"
           v-model="messageInput"
           v-on:input="messageInput = $event.target.value"
           placeholder="messageInput">
  </label>
  <p>messageInput : {{ messageInput }}</p>
  <hr/>
  <label for="messageTextArea">
    messageTextArea
    <textarea id="messageTextArea"
              v-model="messageTextArea"
              placeholder="messageTextArea"/>
  </label>
  <p style="white-space: pre-line">{{ messageTextArea }}</p>
  <p><span v-html="multilineMessageTextArea" /></p>
  <hr/>
  <label for="checkbox">
    checkbox
    <input id="checkbox"
           type="checkbox"
           v-model="checkBox">
  </label>
  <p>checked : {{ checkBox }}</p>
  <hr/>
  <label v-for="(name, index) in names" v-bind:for="`checkbox-${name}`" :key="index">
    <input v-bind:id="`checkbox-${name}`"
           type="checkbox"
           v-model="selectedNames"
           :value="name">
    {{ name }}
  </label>
  <p>Selected Names : {{ selectedNames }}</p>
  <hr/>
  <label v-for="(name, index) in names" v-bind:for="`radio-${name}`" :key="index">
    <input v-bind:id="`radio-${name}`"
           type="radio"
           v-model="selectedNameRadio"
           :value="name">
    {{ name }}
  </label>
  <p>selectedNameRadio : {{ selectedNameRadio }}</p>
  <hr/>
  <select v-model="selectedNameSelector">
    <option v-for="(name, index) in names" :key="index" :value="name">
      {{ name }}
    </option>
  </select>
  <p>selectedNameSelector : {{ selectedNameSelector }}</p>
  <hr/>
  <select v-model="selectedNamesMultiple" multiple>
    <option v-for="(name, index) in names" :key="index" :value="name">
      {{ name }}
    </option>
  </select>
  <p>selectedNamesMultiple : {{ selectedNamesMultiple }}</p>
  <hr/>
  <select v-model="selectedOption">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.text }}
    </option>
  </select>
  <p>selectedOption : {{ selectedOption }}</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface IOption {
  text: string;
  value: number;
}

@Component
export default class Form1 extends Vue {
  private messageInput = '';

  private messageTextArea = '';

  private checkBox = false;

  private names: Array<string> = ['홍길동', '김철수', '이영희'];

  private selectedNames: Array<string> = ['김철수'];

  private selectedNameRadio = '홍길동';

  private selectedNameSelector = '이영희';

  private selectedNamesMultiple: Array<string> = ['홍길동'];

  private options: Array<IOption> = [
    { text: '일', value: 1 },
    { text: '이', value: 2 },
    { text: '삼', value: 3 },
  ];

  private selectedOption: IOption['value'] = 1;

  private get multilineMessageTextArea(): string {
    return this.messageTextArea.replace(/\n/, '<br/>');
  }
}
</script>

<style scoped>

</style>
