<template>
  <div class="image-uploader">
    <label
      class="image-uploader__preview"
      :class="{ 'image-uploader__preview-loading': state === $options.States.LOADING }"
      :style="state !== $options.States.EMPTY && `--bg-url: url('${imageSrc}')`"
    >
      <span class="image-uploader__text">{{ stateText }}</span>
      <input
        ref="input"
        type="file"
        accept="image/*"
        class="image-uploader__input"
        v-bind="$attrs"
        @change="handleFileSelect"
        @click="handleClick"
      />
    </label>
  </div>
</template>

<script>
const States = {
  EMPTY: 'EMPTY',
  LOADING: 'LOADING',
  FILLED: 'FILLED',
};

export default {
  name: 'UiImageUploader',
  inheritAttrs: false,

  States,

  props: {
    uploader: {
      type: Function,
    },

    preview: {
      type: String,
    },
  },

  emits: ['upload', 'select', 'error', 'remove'],

  data() {
    return {
      state: this.preview ? States.FILLED : States.EMPTY,
      localPreview: null,
    };
  },

  computed: {
    stateText() {
      return {
        [States.EMPTY]: 'Загрузить изображение',
        [States.LOADING]: 'Загрузка...',
        [States.FILLED]: 'Удалить изображение',
      }[this.state];
    },

    imageSrc() {
      return this.localPreview ?? this.preview;
    },
  },

  beforeUnmount() {
    if (this.localPreview) {
      URL.revokeObjectURL(this.localPreview);
    }
  },

  methods: {
    async handleFileSelect($event) {
      const file = $event.target.files[0];
      this.$emit('select', file);
      this.localPreview = URL.createObjectURL(file);
      if (!this.uploader) {
        this.state = States.FILLED;
        return;
      }
      return await this.upload(file);
    },

    async upload(file) {
      this.state = States.LOADING;
      try {
        const result = await this.uploader(file);
        this.$emit('upload', result);
        this.state = States.FILLED;
      } catch (error) {
        this.$emit('error', error);
        this.state = States.EMPTY;
        this.removeFile();
      }
    },

    handleClick($event) {
      if (this.state === States.LOADING) {
        $event.preventDefault();
      } else if (this.state === States.FILLED) {
        $event.preventDefault();
        this.removeFile();
        this.state = States.EMPTY;
        this.$emit('remove');
      }
    },

    removeFile() {
      this.$refs.input.value = '';
      this.localPreview = null;
    },
  },
};
</script>

<style scoped>
/* _image-uploader.css */

.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  --bg-url: var(--default-cover);
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), var(--bg-url);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
