<template src="./template.html"></template>

<script>
import Logo from "../../components/logo/Logo";
import * as api from '../../api'

const clientId = 'f21f836aa6897bbf908c';
const clientSecret = 'f604ecc3580e0edd3a0c6bf39425511075c6f134';

export default {
  name: 'Login',
  components: {
    Logo
  },
  methods: {
    getCode() {
      const ghApi = 'https://github.com/login/oauth/authorize';
      const params = new URLSearchParams();
      params.append('client_id', clientId);
      params.append('scope', 'repo:status read:user');
      window.location.href = `${ghApi}?${params}`;
    }
  },
  async mounted() {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      try {
        const response = await api.code.getCode({ clientId, clientSecret, code });
        const token = await response.data.token;
        localStorage.setItem('token', token);
        await this.$router.replace({name: 'Home'});
      } catch (err) {
        console.error(err);
        throw err;
      }
    }
  }
}
</script>

<style src="./style.scss" lang="scss"></style>