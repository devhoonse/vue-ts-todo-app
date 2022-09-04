import Vue from 'vue';
import {
  mapActions, mapGetters, mapMutations, mapState,
} from 'vuex';
import Component from 'vue-class-component';
import './App.scss';
// import Props1 from '@/components/Props1.vue';
// import Props2 from '@/components/Props2.vue';
// import Method from '@/components/Method.vue';
// import Watcher from '@/components/Watcher.vue';
// import Form1 from '@/components/Form1.vue';
import CallEmit from '@/components/CallEmit.vue';
import CallMethod from '@/components/CallMethod.vue';
import CallParent from '@/components/CallParent.vue';
import Sender from '@/components/Sender.vue';
import Receiver from '@/components/Receiver.vue';
import WithRender from './App.html';

@WithRender
@Component({
  components: {
    CallEmit,
    CallMethod,
    CallParent,
    Sender,
    Receiver,
  },
  computed: {
    ...mapState({
      count: (state: any) => state.Counter1.count,
    }),
    ...mapGetters({
      doubleCount: 'Counter1/doubleCount',
    }),
  },
  methods: {
    ...mapMutations({
      increment: 'Counter1/increment',
    }),
    ...mapActions({
      inc: 'Counter1/inc',
    }),
  },
})
export default class App extends Vue {
  public name = 'NotCalled';

  public callMe(value: string): void {
    this.name = value;
  }
}
