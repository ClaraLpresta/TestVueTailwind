<template>
  <h2 class="h2 align" :class="[color, position]">{{ title }}</h2>
</template>

<script>
export default {
  props: {
    color: String,
    position: String,
    title: String
  }
}
</script>

<style>
  .align:after {
    content:'';
    display: block;
    height: 4px;
    width: 40px;
    background-color: #ff0076;
    margin-top: 1rem;
  }

  .align.center {
    text-align: center;
  }

  .align.center:after {
    margin-left: auto;
    margin-right: auto;
  }

  .align.left {
    text-align: left;
  }

  .align.right {
    text-align: right;
  }

  .align.right:after {
    margin-right: 0;
    margin-left: auto;
  }
</style>