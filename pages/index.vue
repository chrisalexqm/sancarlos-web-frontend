<template lang="pug">
  .container
    .md_flex
      .md_flex-shrink-0
        img.rounded-lg.md_w-56(src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80', alt='Woman paying for a purchase')
      .mt-4.md_mt-0.md_ml-6
        .uppercase.tracking-wide.text-sm.text-indigo-600.font-bold.background-green Marketing
        a.block.mt-1.text-lg.leading-tight.font-semibold.text-gray-900.hover_underline(href='#') Finding customers for your new business
        p.mt-2.text-gray-600
          | Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.
        button.bg-blue-500.hover_bg-blue-400.text-white.font-bold.py-2.px-4.border-b-4.border-blue-700.hover_border-blue-500.rounded
          | Button
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">

</style>
