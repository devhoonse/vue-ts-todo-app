import Vue from 'vue';
import Component from 'vue-class-component';
import './App.scss';
import Props1 from '@/components/Props1.vue';
import Props2 from '@/components/Props2.vue';
import Method from '@/components/Method.vue';
import Watcher from '@/components/Watcher.vue';
import Form1 from '@/components/Form1.vue';
import WithRender from './App.html';

@WithRender
@Component({
  components: {
    Props1,
    Props2,
    Method,
    Watcher,
    Form1,
  },
})
export default class App extends Vue {}
