import Vue from 'vue';
import component from 'vue-class-component';

const map: { [key: string]: string } = {
  'tag name duplicated': '您输入的标签已存在，请勿重复添加'
};

@component
export class TagHelper extends Vue {
  createTag() {
    const name = window.prompt('请输入您的标签名');
    if (!name) {return window.alert('标签不能为空，请重新添加！');}
    this.$store.commit('createTag', name);
    if (this.$store.state.createTagError) {
      window.alert(map[this.$store.state.createTagError.message] || '未知错误');
    }
  }
}

export default TagHelper;