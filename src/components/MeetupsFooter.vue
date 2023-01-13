<template>
  <footer class="footer">
    <UiContainer>
      2022-{{ new Date().getFullYear() }}
    </UiContainer>
  </footer>
</template>

<script>
import UiContainer from './UiContainer.vue';
import UiLink from './UiLink.vue';

export default {
  name: 'MeetupsFooter',
  components: { UiLink, UiContainer },
};
</script>

<style scoped>
/* _footer.css */
.footer {
  padding: 100px 0 60px;
  text-align: center;
}
</style>
