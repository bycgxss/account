import Vue from 'vue';
import component from 'vue-class-component';

@component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('请输入您的标签名');
    if (!name) {return window.alert('标签不能为空，请重新添加！');}
    this.$store.commit('createTag', name);
  }
}

export default TagHelper;