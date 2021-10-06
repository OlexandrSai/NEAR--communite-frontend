<template>
  <Header/>
  <Features/>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Features from '@/components/Features.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Features,
    Footer
  }
}
</script>
